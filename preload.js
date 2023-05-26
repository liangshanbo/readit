const { contextBridge, ipcRenderer } = require('electron');

const sendURL = (url) => {
    console.log('url', url)
    return ipcRenderer.invoke('on-url-event', url).then(result => {
        console.log('ipcRenderer.invoke.result', result);
        return result;
    });
}

const alert = (options) => {
    return ipcRenderer.invoke('on-alert-event', options).then(result => {
        console.log('ipcRenderer.invoke.result', result);
        return result;
    });
}

const open = (url) => {
    return ipcRenderer.invoke('on-open-event', url).then(result => {
        console.log('ipcRenderer.invoke.result', result);
        return result;
    });
}

contextBridge.exposeInMainWorld('api', {
    open,
    alert,
    sendURL,
})