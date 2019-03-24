const {app, BrowserWindow} = require('electron');
const path = require('path');

let mainWindow;
const url = process.env.NODE_ENV === 'development' ?
  'http://localhost:8080' :
  'file://' + path.join(__dirname, '../renderer/default.html');

function createWindow() {
  /**
   * Initial window options
   * see https://electronjs.org/docs/api/browser-window#new-browserwindowoptions
   */
  mainWindow = new BrowserWindow({
    height: 563,
    useContentSize: true,
    width: 1000,
    minHeight: 563,
    // vibrancy: 'ultra-dark',
    center: true,
    // titleBarStyle: 'customButtonsOnHover',
    // frame: false,
    minWidth: 1000,
  });

  mainWindow.loadURL(url);

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

