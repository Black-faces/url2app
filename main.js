const { app, BrowserWindow, Menu } = require('electron');
const menuTemplate = [{ label: require('./package.json').name }];
const menu = Menu.buildFromTemplate(menuTemplate);
Menu.setApplicationMenu(menu);

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600
    })
    if (process.env.URL2APP_URL) {
        // e.g. export URL2APP_URL="http://localhost:8008/milling/index.html"
        mainWindow.loadURL(process.env.URL2APP_URL);
    } else {
        mainWindow.loadURL(require('./package.json').app2url_url);
    }
}

app.whenReady().then(() => {
    createWindow();
    app.on('activate', function () {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit();
})