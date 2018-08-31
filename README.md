# 不适用代理服务器 请求mock数据
```
npm run start
```

# 使用代理服务器 请求服务器数据
```
npm run start:no-proxy
```


# 构建
```
npm run build
road build
```

# 分析构建文件体积
```
npm run analyze
```
然后打开`dist/stats.html`查看体积分布数据

# 发布
将`dist`文件夹的静态文件发不到cdn或者静态服务器即可，可能要修改`index.html`引用`js`和`css`的路径