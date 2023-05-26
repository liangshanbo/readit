const path = require('path');
const { Tray, Menu } = require('electron');

function createTray(app, win) {
    const tray = new Tray(path.resolve(__dirname, '../public/icon.jpg'));
    const contextMenu = Menu.buildFromTemplate([
        { label: '打开readit', type: 'radio', click:() => { win.show(); } },
        { label: '重启', type: 'radio', click:() => { app.relaunch(); } },
        { label: '全屏', type: 'radio', click:() => { win.setFullScreen(true); } },
        { label: '退出全屏', type: 'radio', click:() => { 
            if (win.isFullScreen()) {
                win.setFullScreen(false)
            }
         } },
        { label: '退出', type: 'radio', click: () => { app.quit() } },
      ])
      tray.setContextMenu(contextMenu);
    tray.setToolTip('我的第一个Electron应用'); 
    // tray.on('click', (e) => {
    //     console.log('tray click');
        
    // })
}

module.exports = createTray;