#!/bin/bash

# 中间件管理平台前端启动脚本

# 设置项目根目录
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# 进入项目目录
cd "$PROJECT_ROOT"

echo "正在启动中间件管理平台前端..."

# 检查node和npm是否已安装
if ! command -v node &> /dev/null; then
    echo "错误: 未找到node，请先安装Node.js"
    exit 1
fi

if ! command -v npm &> /dev/null; then
    echo "错误: 未找到npm，请先安装Node.js"
    exit 1
fi

# 安装依赖
echo "正在安装依赖..."
npm install

if [ $? -ne 0 ]; then
    echo "错误: 依赖安装失败"
    exit 1
fi

echo "依赖安装完成"

# 启动开发服务器
echo "正在启动开发服务器..."
npm run dev