const path = require('path');
const  createTray = require('./controller/tray');
const { app, BrowserWindow, Tray } = require('electron');

require('./controller/alert');
require('./controller/getSource');
require('./controller/openWindow');

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1000,
        height: 600,
        webPreferences: {
            preload: path.resolve(__dirname, './preload.js')
        }
    })

    win.loadURL('http://localhost:5173/');
    // 打开开发者工具
    win.webContents.openDevTools();
    // 系统托盘
    createTray(app, win);
    // getSource();
}

app.whenReady().then(() => {
    createWindow();
    // 对于MacOS系统，当全部窗口关闭，点击 dock 图标，窗口再次打开
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    })
    app.on('window-all-closed', () => {
        // 对于MacOS系统，关闭窗口时不会直接退出应用
        if (process.platform !== 'darwin') {
          app.quit()
        }
    })
});