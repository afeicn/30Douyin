# 🎙️ 播客项目文件夹

这个文件夹包含了所有与播客相关的文件和工具。

## 📁 文件结构

### 📝 播客内容文件
- `播客_语音版.md` - 播客的语音版本脚本
- `MCP通俗易懂课件.md` - MCP技术课件内容
- `播客脚本分析报告.md` - 播客脚本的分析报告

### 🛠️ 工具和脚本
- `generate_podcast_audio.py` - 主要的音频生成脚本
- `demo_podcast_analysis.py` - 播客分析演示脚本
- `requirements.txt` - Python依赖包列表

### 📖 文档
- `使用说明.md` - MiniMax播客音频生成器使用指南
- `README_音频生成.md` - 详细的音频生成使用说明

### 🎵 音频输出
- `podcast_audio_output/` - 生成的音频文件存储目录
  - `segment_01_沈飞.mp3` - 单个音频片段
  - `完整播客.mp3` - 完整的播客音频

### 🐍 Python环境
- `podcast_env/` - 播客项目专用的Python虚拟环境

## 🚀 快速开始

1. **激活虚拟环境**：
   ```bash
   source podcast_env/bin/activate
   ```

2. **安装依赖**：
   ```bash
   pip install -r requirements.txt
   ```

3. **设置API密钥**：
   ```bash
   export MINIMAX_API_KEY='your_api_key_here'
   ```

4. **生成播客音频**：
   ```bash
   python generate_podcast_audio.py
   ```

## 📋 功能特性

- ✅ 支持多角色语音合成
- ✅ 自动文本清理和分段
- ✅ 音频文件自动合并
- ✅ 详细的分析报告生成
- ✅ 高质量MP3输出

## 🔧 自定义配置

可以在脚本中调整以下参数：
- 语音ID和音色
- 语速、音量、音调
- 输出格式和质量
- 文本分段规则

---

*本项目使用MiniMax API进行语音合成，请确保有效的API密钥和网络连接。*