const { ipcMain, BrowserWindow } = require('electron');

const getSource = (url) => {
    return new Promise(resolve => {
        console.log('ipcMain', url);
        const win = new BrowserWindow({
            width: 500,
            height: 500,
            show: false,
            webPreferences: {
                // 只在内存中执行
                offscreen: true
            }
        })

        win.loadURL(url);

        const { webContents } = win;
        webContents.on('did-finish-load', () => {
            const title = win.getTitle();
            console.log('title', title);
            // nativeImage
            webContents.capturePage().then(image => {
                const screenshot = image.toDataURL();
                resolve({ title, screenshot });
            });

        });
    })
}

ipcMain.handle('on-url-event', (e, url) => {
    return getSource(url);
})

module.exports = getSource;