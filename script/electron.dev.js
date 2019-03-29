const electronDebug = require('electron-debug');
const {default: installExtension, REACT_DEVELOPER_TOOLS, REACT_PERF, REDUX_DEVTOOLS} = require('electron-devtools-installer');

console.log(process.argv);
require('electron').app.on('ready', () => {
  installExtension(REACT_DEVELOPER_TOOLS);
});

installExtension().then();
require('../dist/main/main');
