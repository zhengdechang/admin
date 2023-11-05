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
RUN npm run build

# 使用 Nginx 镜像作为生产容器
FROM nginx:latest

# 复制构建好的 Vue.js 项目到 Nginx 静态文件目录
COPY --from=build /app/dist /usr/share/nginx/html

# 暴露端口（Nginx 默认端口是80）
EXPOSE 8080

# 复制 Nginx 配置文件作为默认配置
COPY default.conf /etc/nginx/conf.d/default.conf

# 启动 Nginx 服务器，并将其监听容器内部端口 8080
CMD ["nginx", "-g", "daemon off;", "-c", "/etc/nginx/nginx.conf"]
