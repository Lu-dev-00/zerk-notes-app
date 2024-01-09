const {app, BrowserWindow} = require('electron')
const path = require('node:path')

//Code to create window 
const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })
    win.loadFile('index.html')
}

//Open Window if none are open (MacOS)
app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

// Closing app (Linux & Windows)
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})


