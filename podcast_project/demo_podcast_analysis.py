#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
MiniMax 播客音频生成器 - 演示版本
演示如何解析播客文本并准备音频生成
"""

import os
import re
import json
from typing import List, Dict
from pathlib import Path

class PodcastAudioDemo:
    def __init__(self):
        """
        初始化播客音频演示器
        """
        # 语音配置
        self.voice_configs = {
            "沈飞": {
                "voice_id": "male-qn-qingse",  # 男声，清晰
                "speed": 1.0,
                "volume": 0.8,
                "pitch": 0.0
            },
            "丽芹": {
                "voice_id": "female-shaonv",  # 女声，少女音
                "speed": 1.0,
                "volume": 0.8,
                "pitch": 0.1
            }
        }
    
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
                        'duration_estimate': len(current_text.strip()) * 0.1  # 估算时长（秒）
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
    
    def clean_text(self, text: str) -> str:
        """
        清理文本，移除特殊标记
        
        Args:
            text: 原始文本
            
        Returns:
            清理后的文本
        """
        # 移除emoji
        text = re.sub(r'[👋✨🎙️📊🎯💡🔧🚀]', '', text)
        
        # 移除markdown标记
        text = re.sub(r'\*\*', '', text)
        
        # 移除停顿标记
        text = re.sub(r'\*\*\[停顿.*?\]\*\*', '', text)
        text = re.sub(r'\[停顿.*?\]', '', text)
        
        # 移除语调标记
        text = re.sub(r'\*\*\[语调.*?\]\*\*', '', text)
        text = re.sub(r'\[语调.*?\]', '', text)
        
        # 移除其他标记
        text = re.sub(r'\*\*\[.*?\]\*\*', '', text)
        text = re.sub(r'\[.*?\]', '', text)
        
        # 清理多余空格
        text = re.sub(r'\s+', ' ', text)
        
        return text.strip()
    
    def generate_script_analysis(self, markdown_file: str, output_dir: str = None) -> str:
        """
        生成播客脚本分析报告
        
        Args:
            markdown_file: 播客markdown文件路径
            output_dir: 输出目录，默认为markdown文件所在目录
            
        Returns:
            分析报告文件路径
        """
        if output_dir is None:
            output_dir = os.path.dirname(markdown_file)
        
        # 创建输出目录
        os.makedirs(output_dir, exist_ok=True)
        
        # 解析播客内容
        print("正在解析播客内容...")
        segments = self.parse_podcast_content(markdown_file)
        print(f"共解析出 {len(segments)} 个音频片段")
        
        if not segments:
            print("未找到有效的播客内容")
            return None
        
        # 生成分析报告
        report_path = os.path.join(output_dir, "播客脚本分析报告.md")
        
        total_duration = sum(segment['duration_estimate'] for segment in segments)
        speaker_stats = {}
        
        for segment in segments:
            speaker = segment['speaker']
            if speaker not in speaker_stats:
                speaker_stats[speaker] = {
                    'segments': 0,
                    'total_chars': 0,
                    'total_duration': 0
                }
            speaker_stats[speaker]['segments'] += 1
            speaker_stats[speaker]['total_chars'] += len(segment['text'])
            speaker_stats[speaker]['total_duration'] += segment['duration_estimate']
        
        # 生成报告内容
        report_content = f"""# 播客脚本分析报告

## 📊 基本统计

- **总片段数**: {len(segments)}
- **预估总时长**: {total_duration:.1f} 秒 ({total_duration/60:.1f} 分钟)
- **总字符数**: {sum(len(segment['text']) for segment in segments)}

## 👥 说话人统计

"""
        
        for speaker, stats in speaker_stats.items():
            report_content += f"""### {speaker}
- **片段数**: {stats['segments']}
- **字符数**: {stats['total_chars']}
- **预估时长**: {stats['total_duration']:.1f} 秒 ({stats['total_duration']/60:.1f} 分钟)
- **占比**: {stats['total_duration']/total_duration*100:.1f}%

"""
        
        report_content += """## 🎙️ 详细片段列表

| 序号 | 说话人 | 字符数 | 预估时长(秒) | 内容预览 |
|------|--------|--------|-------------|----------|
"""
        
        for i, segment in enumerate(segments, 1):
            preview = segment['text'][:50] + "..." if len(segment['text']) > 50 else segment['text']
            report_content += f"| {i} | {segment['speaker']} | {len(segment['text'])} | {segment['duration_estimate']:.1f} | {preview} |\n"
        
        report_content += f"""

## 🔧 语音配置

### 沈飞（主播）
```json
{json.dumps(self.voice_configs['沈飞'], indent=2, ensure_ascii=False)}
```

### 丽芹（嘉宾）
```json
{json.dumps(self.voice_configs['丽芹'], indent=2, ensure_ascii=False)}
```

## 📝 MiniMax API 调用示例

要使用MiniMax API生成音频，您需要：

1. **获取API密钥**: 访问 [MiniMax开放平台](https://api.minimax.chat/) 注册并获取API密钥

2. **设置环境变量**:
   ```bash
   export MINIMAX_API_KEY='eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJHcm91cE5hbWUiOiLlvZLlv4MiLCJVc2VyTmFtZSI6IuW9kuW_gyIsIkFjY291bnQiOiIiLCJTdWJqZWN0SUQiOiIxOTEzNDAzMDMxMjQ4OTcwMTUyIiwiUGhvbmUiOiIxODYwMTMxMDYxNCIsIkdyb3VwSUQiOiIxOTEzNDAzMDMxMjQwNTgxNTQ0IiwiUGFnZU5hbWUiOiIiLCJNYWlsIjoiIiwiQ3JlYXRlVGltZSI6IjIwMjUtMDctMjQgMTQ6MzA6NTIiLCJUb2tlblR5cGUiOjEsImlzcyI6Im1pbmltYXgifQ.LAoh13doRBbMkgbSoJzkHX4oT5nCB9NjeJfKgnhQGY8SJ8pAgLUm8us8Txzw9iXecTNwWPvdFReIgfQqN1LJFYJPfTFkXWuyE1SinpFsy3h8lbpDUiwKJRAm3Cx9VfhB5Vcd1_sinYhufrmZfW3x6rJeCCq0il6xLc230MhkDlwkC63rJpPZViNMeptMIqgeoT_c0ufdVQnHlMc8HDJ5TTCg3yDsNe_gSkH-HWGuu6Yy7AnZ4WHFi7Ybfv6wJpsEvoA-yaZihjHdAi7kxBmkXrVE0Os6ntKKkzFJZFx-q2MEoxQinXZXVoc66lJk7flaeB_kX7X6LQKpycoG1ZyVXw'
   ```

3. **运行完整版脚本**:
   ```bash
   python generate_podcast_audio.py
   ```

## 🎯 预期输出

生成的音频文件将具有以下特征：
- **格式**: MP3
- **质量**: 高质量语音合成
- **时长**: 约 {total_duration/60:.1f} 分钟
- **文件大小**: 预估 {total_duration/60*2:.1f} MB

## 💡 优化建议

1. **文本优化**: 
   - 确保每个片段长度适中（建议200-500字符）
   - 避免过长的句子，适当添加标点符号

2. **语音优化**:
   - 可以调整语速、音量、音调参数
   - 考虑为不同内容类型设置不同的语音风格

3. **后期处理**:
   - 可以添加背景音乐
   - 调整音频间的停顿时间
   - 进行音频均衡化处理

---

*本报告由播客音频生成器自动生成*
"""
        
        # 保存报告
        with open(report_path, 'w', encoding='utf-8') as f:
            f.write(report_content)
        
        print(f"分析报告已生成: {report_path}")
        return report_path

def main():
    """主函数"""
    # 配置
    markdown_file = "/Users/lianjia/文稿/99个人/88workspace/30Douyin/播客_语音版.md"
    
    try:
        # 创建演示器
        demo = PodcastAudioDemo()
        
        # 生成分析报告
        report_file = demo.generate_script_analysis(markdown_file)
        
        if report_file:
            print(f"\n🎉 播客脚本分析完成!")
            print(f"📁 报告位置: {report_file}")
            print(f"\n📋 下一步:")
            print(f"1. 查看分析报告了解播客结构")
            print(f"2. 获取MiniMax API密钥")
            print(f"3. 设置环境变量: export MINIMAX_API_KEY='your_key'")
            print(f"4. 运行完整版脚本生成音频")
        else:
            print("\n❌ 播客脚本分析失败")
            
    except Exception as e:
        print(f"程序执行出错: {str(e)}")

if __name__ == "__main__":
    main()