# 使用官方的 Node.js 16 镜像作为基础镜像
FROM node:16 AS build

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json 文件以减少构建时间
COPY package*.json ./

# 安装项目依赖
RUN npm install

# 复制项目文件到工作目录
COPY . .

# 构建 Vue.js 项目
RUN npm run serve

# 暴露端口（Nginx 默认端口是80）
EXPOSE 8080

