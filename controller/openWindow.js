const { BrowserWindow, ipcMain } = require('electron');
const saveas = require('./saveas');

const openWindow = (url) => {
    const win = new BrowserWindow({
        width: 1200,
        height: 800,
    })

    win.loadURL(url);

    win.webContents.on('context-menu', (event, params) => {
        if (params.mediaType === 'image') {
            const { srcURL } = params;
            saveas(srcURL);
        }
    })
}

ipcMain.handle('on-open-event', (event, url) => {
    console.log('url', url);
    return openWindow(url);
});