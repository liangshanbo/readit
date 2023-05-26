# 基于 Vue 3 和 Electron 的桌面混合开发

## 项目初始化
```
npm i
```
## 项目运行
```
// 运行Vue项目 
npm run dev
// 运行Electron项目
npm start
// Electron 打包
npm run app:dist
// 在 main.js 中修改Vue项目指定的端口
 win.loadURL('http://localhost:5173/');
```