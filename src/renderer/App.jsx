import React, { useState } from 'react';

export default () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hello World</h1>
      <h3>
        Now is 2021, the new generate of front-end
        is came. Anyway, this repo is archived,
        here is some alternative you may like:
      </h3>
      <p>
        All new React Electron Template
        <a href="https://github.com/jctaoo/vite-electron-esbuild-starter" target="_blank" rel="noreferrer">
          vite-electron-esbuild-starter
        </a>
        (in vite awesome!)
      </p>
      <p>
        All new Vue Electron Template
        <a href="https://github.com/jctaoo/electron-vue-starter" target="_blank" rel="noreferrer">
          electron-vue-starter
        </a>
      </p>
      <p>
        Universal electron tool:
        <a href="https://github.com/jctaoo/electron-run" target="_blank" rel="noreferrer">
          electron-run
        </a>
      </p>
      <h1 style={{ color: 'red' }}>{count}</h1>
      <button type="button" onClick={() => { setCount(count + 1); }}>+</button>
      <button type="button" onClick={() => { setCount(count - 1); }}>-</button>
    </>
  );
};
