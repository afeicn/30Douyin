#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
MiniMax播客音频生成器
使用MiniMax语音合成API生成播客音频
"""

import os
import json
import time
import requests
from pathlib import Path
from typing import List, Dict, Optional
import subprocess
import re

class PodcastAudioGenerator:
    def __init__(self, api_key: Optional[str] = None):
        """
        初始化播客音频生成器
        
        Args:
            api_key: MiniMax API密钥，如果不提供则从环境变量获取
        """
        self.api_key = api_key or os.getenv('MINIMAX_API_KEY')
        if not self.api_key:
            raise ValueError("请设置MINIMAX_API_KEY环境变量或提供API密钥")
        
        # 从JWT token中提取GroupID
        try:
            import base64
            import json
            # 解析JWT token获取GroupID
            token_parts = self.api_key.split('.')
            if len(token_parts) >= 2:
                # 解码payload部分
                payload = token_parts[1]
                # 添加必要的padding
                payload += '=' * (4 - len(payload) % 4)
                decoded = base64.b64decode(payload)
                token_data = json.loads(decoded)
                self.group_id = token_data.get('GroupID', '1913403031240581544')
            else:
                self.group_id = '1913403031240581544'  # 默认值
        except:
            self.group_id = '1913403031240581544'  # 默认值
        
        self.base_url = "https://api.minimaxi.chat/v1/t2a_v2"
        self.output_dir = Path("podcast_audio_output")
        self.output_dir.mkdir(exist_ok=True)
        
        # 语音配置
        self.voice_configs = {
            '沈飞': {
                'voice_id': 'male-qn-qingse',  # 男声-青涩
                'speed': 1.0,
                'volume': 0.8,
                'pitch': 0.0
            },
            '丽芹': {
                'voice_id': 'female-shaonv',  # 女声-少女
                'speed': 1.0,
                'volume': 0.8,
                'pitch': 0.1
            }
        }
    
    def clean_text(self, text: str) -> str:
        """
        清理文本，移除不适合语音合成的内容
        
        Args:
            text: 原始文本
            
        Returns:
            清理后的文本
        """
        # 移除Markdown格式
        text = re.sub(r'\*\*([^*]+)\*\*', r'\1', text)  # 粗体
        text = re.sub(r'\*([^*]+)\*', r'\1', text)      # 斜体
        text = re.sub(r'`([^`]+)`', r'\1', text)        # 代码
        
        # 移除语调标记
        text = re.sub(r'\[([^\]]+)\]', '', text)
        
        # 移除多余的空格和换行
        text = re.sub(r'\s+', ' ', text)
        text = text.strip()
        
        return text
    
    def parse_podcast_content(self, file_path: str) -> List[Dict]:
        """
        解析播客文本内容
        
        Args:
            file_path: 播客文本文件路径
            
        Returns:
            解析后的音频片段列表
        """
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        segments = []
        current_speaker = None
        current_text = ""
        
        # 按行处理内容
        lines = content.split('\n')
        
        for line in lines:
            line = line.strip()
            
            # 跳过空行
            if not line:
                continue
            
            # 检测说话人 - 标题格式
            if line.startswith('##') and ('（沈飞）' in line or '沈飞）' in line):
                if current_text and current_speaker:
                    segments.append({
                        'speaker': current_speaker,
                        'text': current_text.strip(),
                        'voice_config': self.voice_configs.get(current_speaker, self.voice_configs['沈飞']),
                        'duration_estimate': len(current_text.strip()) * 0.1
                    })
                current_speaker = '沈飞'
                current_text = ""
                continue
            elif line.startswith('##') and ('（丽芹）' in line or '丽芹）' in line):
                if current_text and current_speaker:
                    segments.append({
                        'speaker': current_speaker,
                        'text': current_text.strip(),
                        'voice_config': self.voice_configs.get(current_speaker, self.voice_configs['沈飞']),
                        'duration_estimate': len(current_text.strip()) * 0.1
                    })
                current_speaker = '丽芹'
                current_text = ""
                continue
            
            # 检测说话人 - 内联格式
            if '**[沈飞 -' in line or '沈飞 -' in line:
                if current_text and current_speaker:
                    segments.append({
                        'speaker': current_speaker,
                        'text': current_text.strip(),
                        'voice_config': self.voice_configs.get(current_speaker, self.voice_configs['沈飞']),
                        'duration_estimate': len(current_text.strip()) * 0.1
                    })
                current_speaker = '沈飞'
                current_text = ""
                continue
            elif '**[丽芹 -' in line or '丽芹 -' in line:
                if current_text and current_speaker:
                    segments.append({
                        'speaker': current_speaker,
                        'text': current_text.strip(),
                        'voice_config': self.voice_configs.get(current_speaker, self.voice_configs['沈飞']),
                        'duration_estimate': len(current_text.strip()) * 0.1
                    })
                current_speaker = '丽芹'
                current_text = ""
                continue
            
            # 跳过标题、分隔线和元数据
            if (line.startswith('#') or line.startswith('---') or 
                line.startswith('*本播客') or line.startswith('- **')):
                continue
            
            # 跳过语调和停顿标记
            if line.startswith('**[') and line.endswith(']**'):
                continue
            
            # 清理文本
            clean_line = self.clean_text(line)
            if clean_line and current_speaker:
                current_text += clean_line + " "
        
        # 添加最后一段
        if current_text and current_speaker:
            segments.append({
                'speaker': current_speaker,
                'text': current_text.strip(),
                'voice_config': self.voice_configs.get(current_speaker, self.voice_configs['沈飞']),
                'duration_estimate': len(current_text.strip()) * 0.1
            })
        
        return segments
    
    def generate_audio_segment(self, segment: Dict, segment_index: int) -> Optional[str]:
        """
        生成单个音频片段
        
        Args:
            segment: 音频片段信息
            segment_index: 片段索引
            
        Returns:
            生成的音频文件路径，失败返回None
        """
        try:
            # 准备请求数据 - 使用正确的MiniMax API格式
            payload = {
                "text": segment['text'],
                "voice_id": segment['voice_config']['voice_id'],
                "model": "speech-01",
                "speed": segment['voice_config']['speed'],
                "vol": segment['voice_config']['volume'],
                "pitch": int(segment['voice_config']['pitch'])
            }
            
            headers = {
                "Authorization": f"Bearer {self.api_key}",
                "Content-Type": "application/json"
            }
            
            print(f"正在生成第 {segment_index + 1} 个音频片段 ({segment['speaker']})...")
            print(f"文本预览: {segment['text'][:50]}...")
            print(f"请求参数: {payload}")
            
            # 使用正确的API端点
            api_url = f"https://api.minimax.chat/v1/text_to_speech?GroupId={self.group_id}"
            response = requests.post(
                api_url,
                headers=headers,
                json=payload,
                timeout=60
            )
            
            print(f"API响应状态: {response.status_code}")
            print(f"响应头: {dict(response.headers)}")
            
            # 检查响应状态和内容类型
            if response.status_code == 200:
                # 检查响应是否为音频数据
                content_type = response.headers.get('content-type', '')
                if 'audio' in content_type or 'application/octet-stream' in content_type:
                    # 保存音频文件
                    audio_filename = f"segment_{segment_index + 1:02d}_{segment['speaker']}.mp3"
                    audio_path = self.output_dir / audio_filename
                    
                    with open(audio_path, 'wb') as f:
                        f.write(response.content)
                    
                    print(f"✅ 片段 {segment_index + 1} 生成成功: {audio_filename}")
                    return str(audio_path)
                else:
                    # 响应可能是错误信息
                    try:
                        error_data = response.json()
                        print(f"❌ API返回错误: {error_data}")
                    except:
                        print(f"❌ 响应内容类型错误: {content_type}")
                        print(f"响应内容: {response.text[:200]}")
                    return None
            else:
                print(f"❌ 片段 {segment_index + 1} 生成失败: {response.status_code}")
                print(f"错误信息: {response.text}")
                return None
                
        except Exception as e:
            print(f"❌ 生成片段 {segment_index + 1} 时发生错误: {str(e)}")
            return None
    
    def merge_audio_files(self, audio_files: List[str], output_filename: str = "完整播客.mp3") -> str:
        """
        合并音频文件
        
        Args:
            audio_files: 音频文件路径列表
            output_filename: 输出文件名
            
        Returns:
            合并后的音频文件路径
        """
        output_path = self.output_dir / output_filename
        
        # 创建ffmpeg输入文件列表
        input_list_file = self.output_dir / "input_list.txt"
        with open(input_list_file, 'w', encoding='utf-8') as f:
            for audio_file in audio_files:
                f.write(f"file '{os.path.abspath(audio_file)}'\n")
        
        try:
            # 使用ffmpeg合并音频
            cmd = [
                'ffmpeg',
                '-f', 'concat',
                '-safe', '0',
                '-i', str(input_list_file),
                '-c', 'copy',
                '-y',  # 覆盖输出文件
                str(output_path)
            ]
            
            print("正在合并音频文件...")
            result = subprocess.run(cmd, capture_output=True, text=True)
            
            if result.returncode == 0:
                print(f"✅ 音频合并成功: {output_filename}")
                # 清理临时文件
                input_list_file.unlink()
                return str(output_path)
            else:
                print(f"❌ 音频合并失败: {result.stderr}")
                return None
                
        except Exception as e:
            print(f"❌ 合并音频时发生错误: {str(e)}")
            return None
    
    def generate_podcast(self, podcast_file: str) -> Optional[str]:
        """
        生成完整播客音频
        
        Args:
            podcast_file: 播客文本文件路径
            
        Returns:
            生成的播客音频文件路径，失败返回None
        """
        print("🎙️ 开始生成播客音频...")
        
        # 解析播客内容
        segments = self.parse_podcast_content(podcast_file)
        if not segments:
            print("❌ 未找到有效的播客内容")
            return None
        
        print(f"📝 共解析出 {len(segments)} 个音频片段")
        
        # 生成各个音频片段
        audio_files = []
        for i, segment in enumerate(segments):
            audio_file = self.generate_audio_segment(segment, i)
            if audio_file:
                audio_files.append(audio_file)
            else:
                print(f"⚠️ 跳过片段 {i + 1}")
            
            # 添加延迟避免API限制
            time.sleep(1)
        
        if not audio_files:
            print("❌ 没有成功生成任何音频片段")
            return None
        
        print(f"✅ 成功生成 {len(audio_files)} 个音频片段")
        
        # 合并音频文件
        final_audio = self.merge_audio_files(audio_files)
        
        if final_audio:
            print(f"🎉 播客音频生成完成!")
            print(f"📁 输出文件: {final_audio}")
            print(f"📊 总片段数: {len(segments)}")
            print(f"⏱️ 预估时长: {sum(s['duration_estimate'] for s in segments):.1f} 秒")
        
        return final_audio

def main():
    """主函数"""
    try:
        # 检查API密钥
        api_key = os.getenv('MINIMAX_API_KEY')
        if not api_key:
            print("❌ 请设置MINIMAX_API_KEY环境变量")
            print("💡 使用方法: export MINIMAX_API_KEY='your_api_key'")
            return
        
        # 播客文件路径
        podcast_file = "播客_语音版.md"
        
        if not os.path.exists(podcast_file):
            print(f"❌ 播客文件不存在: {podcast_file}")
            return
        
        # 创建生成器并生成音频
        generator = PodcastAudioGenerator(api_key)
        result = generator.generate_podcast(podcast_file)
        
        if result:
            print(f"\n🎵 播客音频已生成: {result}")
        else:
            print("\n❌ 播客音频生成失败")
            
    except Exception as e:
        print(f"❌ 程序执行出错: {str(e)}")

if __name__ == "__main__":
    main()