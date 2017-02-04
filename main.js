const com = require('./core/com.js')

const {
  app,
  BrowserWindow,
  globalShortcut
} = require('electron')

const path = require('path')
const url = require('url')

let win

function createWindow () {
  win = new BrowserWindow({
    frame: false,
    width: 800,
    height: 600,
    minWidth: 600,
    minHeight: 400
  })

  win.on('closed', () => {
    win = null
  })

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'www/index.html'),
    protocol: 'file:',
    slashes: true
  }))
  win.webContents.openDevTools()
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})

app.on('ready', () => {
  globalShortcut.register('CommandOrControl+Y', () => {
    console.log('Hey !');
  })
})
