const webpack = require('webpack');
const del = require('del');
const builder = require("electron-builder");
const {Platform} = builder;
const jsYml = require('js-yaml');
const fs = require('fs');
const path = require('path');

function clean() {
  del.sync(['build/*', '!build/icon', '!build/icon/icon.*']);
  process.exit();
}

async function startRenderer() {
  const config = require('../config/webpack.config');
  config.mode = 'production';
  webpack(config, () => {
  });
}

async function startMain() {
  const config = require('../config/webpack.main.config');
  config.mode = 'production';
  webpack(config, () => {
  });
}

async function start() {
  del.sync(['dist/main/*', 'dist/renderer/*']);

  await build();

  const config = jsYml.load(fs.readFileSync(path.join(__dirname, '../config/builder.config.yml')));

  builder.build({
    targets: Platform.MAC.createTarget(),
    config: config,
  }).then(() => {
    console.log('build successfully');
  }).catch((error) => {
    console.error(error);
  })
}

async function build() {
  await startRenderer();
  await startMain();
}

if (process.env.BUILD_TARGET === 'clean') {
  clean();
} else {
  start().then();
}
