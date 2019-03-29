const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const { spawn } = require('child_process');
const electron = require('electron');
const path = require('path');

let electronProcess = null;

async function startRenderer() {
  const config = require('../config/webpack.config');
  config.mode = 'development';
  const options = {
    contentBase: './dist',
    hot: true,
    host: 'localhost',
  };

  webpackDevServer.addDevServerEntrypoints(config, options);
  const compiler = webpack(config);
  const server = new webpackDevServer(compiler, options);

  server.listen(5000, 'localhost', () => {
    console.log('dev server listening on port 5000');
  });
}

async function startMain() {
  const config = require('../config/webpack.main.config');
  config.mode = 'development';
  const compiler = webpack(config);

  compiler.watch({}, (err, stats) => {
    if (err) {
      console.log(err);
      return
    }

    if (electronProcess && electronProcess.kill) {
      process.kill(electronProcess.pid);
      electronProcess = null;
      startElectron();
    }
  });
}

function startElectron() {
  const args = [
    '--inspect=5858',
    path.join(__dirname, '../dist/main/main.js'),
  ];

  electronProcess = spawn(electron, args);
}

async function init() {
  await startRenderer();
  await startMain();
  startElectron();
}

init().then();
