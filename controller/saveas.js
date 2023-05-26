const fs = require('fs');
const path =  require('path');
const got = require('got').default;
const { Menu, dialog } = require('electron');
const randomstring = require('randomstring');

const download = (response, ext) => {
    const chunk = Buffer.from(response.rawBody);
    dialog.showSaveDialog({ 
        title: '图片另存为',
        defaultPath: path.resolve(__dirname, '../uploads/' + randomstring.generate(10) + ext),
     }).then(result => {
         const { filePath, canceled } = result;
         if (!canceled) {
            fs.writeFileSync(filePath, chunk);
            dialog.showMessageBox({ message: '保存成功' });
         }
     })
}

const saveas = (url) => {
    // got.get(url)
    const contextMenu = Menu.buildFromTemplate([
        { 
            label: '另存为', 
            click: () => {
                const ext = url.slice(url.lastIndexOf('.'));
                got.get(url).then(response => {
                    // 保存到本地
                    download(response, ext);                    
                });
            } 
        }
    ])
    contextMenu.popup();
}

module.exports = saveas;