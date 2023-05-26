const { ipcMain, dialog } = require('electron');

const alert = ({ message, buttons = ['取消', '确定'], title= '提示'  }) => {
    return dialog.showMessageBox({ title, buttons, message });
}

ipcMain.handle('on-alert-event', (e, options) => {
    return alert(options);
})

module.exports = alert;