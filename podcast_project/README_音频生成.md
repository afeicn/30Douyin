# MiniMax 播客音频生成器使用说明

## 📋 功能介绍

这个工具可以将播客的Markdown文本转换为高质量的音频文件，支持多角色语音合成。

## 🚀 快速开始

### 1. 安装依赖

```bash
pip install -r requirements.txt
```

### 2. 安装ffmpeg（用于音频合并）

**macOS:**
```bash
brew install ffmpeg
```

**Ubuntu/Debian:**
```bash
sudo apt update
sudo apt install ffmpeg
```

**Windows:**
下载并安装 ffmpeg: https://ffmpeg.org/download.html

### 3. 设置API密钥

获取MiniMax API密钥后，设置环境变量：

```bash
export MINIMAX_API_KEY='eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJHcm91cE5hbWUiOiLlvZLlv4MiLCJVc2VyTmFtZSI6IuW9kuW_gyIsIkFjY291bnQiOiIiLCJTdWJqZWN0SUQiOiIxOTEzNDAzMDMxMjQ4OTcwMTUyIiwiUGhvbmUiOiIxODYwMTMxMDYxNCIsIkdyb3VwSUQiOiIxOTEzNDAzMDMxMjQwNTgxNTQ0IiwiUGFnZU5hbWUiOiIiLCJNYWlsIjoiIiwiQ3JlYXRlVGltZSI6IjIwMjUtMDUtMDEgMTM6NTA6MzgiLCJUb2tlblR5cGUiOjEsImlzcyI6Im1pbmltYXgifQ.GtA_2nEZLlaxoyKddaNNlQTkWd21d00dRTfr2Xc6r6qxUrpUn7C570qw1hlEHO8eRtZCl-E0kJ_jFE-fBF__8N_TuTsKUZRUpuOSo6Yen9euwZwcGNaCZ8MRAcUtbPilWyr9NRc7-cVA0B96Ny6Yj2m0lA2hA2rAcD-0slv55fLsqfSsGLLtEP0RpNLYkx0ut9-2fc-UKWQKMaVTZm0hmbThAOj1GdQQiCpSp2wKoemwwvUKxUobfwstXcAqB75SWdQ7gsiApeFUYFH-HJtZZnBUflEdIPswsBDs7WtsZRRtA3nXpgSnuo0BlhOs8ZuqGLnVcieV6CiRNdH5BVkgVQ'
```

或者在脚本中直接传入API密钥。

### 4. 运行生成器

```bash
python generate_podcast_audio.py
```

## 🎙️ 语音配置

脚本支持两个角色的语音配置：

- **沈飞（主播）**: 男声，清晰音质
- **丽芹（嘉宾）**: 女声，少女音

可以在脚本中的 `voice_configs` 字典中调整语音参数：

```python
self.voice_configs = {
    "沈飞": {
        "voice_id": "male-qn-qingse",  # 语音ID
        "speed": 1.0,                  # 语速 (0.5-2.0)
        "volume": 0.8,                 # 音量 (0.0-1.0)
        "pitch": 0.0                   # 音调 (-1.0-1.0)
    },
    "丽芹": {
        "voice_id": "female-shaonv",
        "speed": 1.0,
        "volume": 0.8,
        "pitch": 0.1
    }
}
```

## 📁 输出文件

生成的音频文件将保存为：
- **文件名**: `闹海Plus_MCP播客_完整版.mp3`
- **位置**: 与播客Markdown文件相同目录
- **格式**: MP3
- **质量**: 高质量语音合成

## 🔧 自定义配置

### 修改输入文件

在 `main()` 函数中修改 `markdown_file` 路径：

```python
markdown_file = "/path/to/your/podcast.md"
```

### 修改输出目录

```python
output_file = generator.generate_podcast_audio(
    markdown_file, 
    output_dir="/path/to/output/directory"
)
```

## 📝 支持的文本格式

脚本会自动解析以下格式的文本：

1. **角色标识**: `（沈飞）` 或 `沈飞 -`
2. **语调标记**: `**[语调：热情]**` (会被自动移除)
3. **停顿标记**: `**[停顿 2秒]**` (会被自动移除)
4. **Emoji**: 会被自动清理
5. **Markdown标记**: 会被自动清理

## ⚠️ 注意事项

1. **API限制**: MiniMax API可能有调用频率限制，脚本会在片段间添加1秒延迟
2. **文本长度**: 单个片段建议不超过500字符，过长可能影响合成质量
3. **网络连接**: 需要稳定的网络连接访问MiniMax API
4. **ffmpeg依赖**: 音频合并功能需要安装ffmpeg

## 🐛 故障排除

### 常见问题

1. **API密钥错误**
   ```
   错误: 请设置MINIMAX_API_KEY环境变量
   ```
   解决: 检查API密钥是否正确设置

2. **ffmpeg未安装**
   ```
   提示: 请确保已安装ffmpeg
   ```
   解决: 按照上述说明安装ffmpeg

3. **网络超时**
   ```
   API请求失败: 超时
   ```
   解决: 检查网络连接，或增加timeout参数

4. **音频质量问题**
   - 调整语速、音量、音调参数
   - 检查文本是否包含特殊字符
   - 确保文本分段合理

## 📞 技术支持

如遇到问题，请检查：
1. Python版本 (建议3.8+)
2. 依赖包版本
3. API密钥有效性
4. 网络连接状态

## 🎯 使用示例

完整的使用流程：

```bash
# 1. 安装依赖
pip install -r requirements.txt

# 2. 安装ffmpeg
brew install ffmpeg

# 3. 设置API密钥
export MINIMAX_API_KEY='your_minimax_api_key'

# 4. 运行生成器
python generate_podcast_audio.py

# 5. 播放生成的音频
open 闹海Plus_MCP播客_完整版.mp3
```

生成完成后，您将获得一个完整的播客音频文件，包含沈飞和丽芹的对话，音质清晰，适合直接发布或进一步编辑。