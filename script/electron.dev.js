const electronDebug = require('electron-debug');
const {default: installExtension, REACT_DEVELOPER_TOOLS, REACT_PERF, REDUX_DEVTOOLS} = require('electron-devtools-installer');

console.log(process.argv);
require('electron').app.on('ready', () => {
  installExtension(REACT_DEVELOPER_TOOLS);
  installExtension(REACT_PERF);
  installExtension(REDUX_DEVTOOLS);
});
electronDebug({ devtool: true });

require('../dist/main/main');
