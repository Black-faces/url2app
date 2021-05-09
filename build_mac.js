const path = require('path');
const builder = require('electron-builder');

builder.build({
        projectDir: path.resolve(__dirname), // 專案路徑
        mac: ['dmg', 'zip'],
        config: {
            "appId": "com.github.waynechang65.url2app",
            "productName": "url2app", // 應用程式名稱 ( 顯示在應用程式與功能 )
            "directories": {
                "output": "dist/mac"
            },
            "mac": {
                "icon": path.resolve(__dirname, 'img/url2app.png'),
            }
        },
    })
    .then(
        data => console.log(data),
        err => console.error(err)
    );
