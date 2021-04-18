## Now is 2021, the new generate of front-end is came. Anyway, this repo is archived, here is some alternative you may like:

<p align="center">
    <img src="https://bunuelo.oss-cn-shanghai.aliyuncs.com/torre-electron-react/torre-electron-react.png?x-oss-process=image/resize,w_200" alt="torre-electron-react logo"/>
    <center>
    <h1 style="text-align=center">torre-electron-react</h1></center>
    <p>torre-electron-react is a template of your electron project with react.</p>
</p>

# Process
## Installation
- Be sure that you familiar with [Electron](https://electronjs.org/) and [React](https://reactjs.org/)
- To download torre-electron-react, click [here](https://github.com/hello-acuario/torre-electron-react/releases). 
- And unzip it.
- Then, you can open your workplaces and began develop your app.
``` bash
cd '{your app name}'
yarn install
```

## Extended Development
- To see what your app look like, run:
``` bash
yarn dev
```
It will compile your code by [webpack](https://webpack.js.org/ "webpack offcial website") and run a webpack dev server on [localhost:5000](http://localhost:5000) (If you want to see your app in browser, open it). Then,your app will be launched and it will connect the webpack dev server so that you can see your app.

- Directory Structure

    - build: The binary file will be here if you build your app.
    - dist: Webpack will output the code here after it compile the code in src. (main including Electron Main Process and renderer including Electron Renderer Process)
    - src: You write your code here. Main and renderer do same things as dist. (Both of them can use ES6)
    - config: Webpack and electron-builder's configure here.
    - script: Npm scripts will run javascript files in it. You needn't care about everyting in it.

- Began develop

    - Now, you have a better understanding of torre-electron-react. 🍔
    - You can write react code in src/renderer. There is some template code and they are easy to understand.
    - You can wreite node code in src/main to control Electron app. There is also some template and easy to understand.

- Build Your App

    - run:
    ``` bash
    yarn build:mac
    ```
    sorry, I support mac only, I'll support playfomr soon. 🤗

    - Or you want to clean every thing in dist, run:
    ``` bash
    yarn build:clean
    ```
    - If you want to change the icon, change dist/icon/icon/ico. (at leaste 512 ✖ 512️)

# Get Involved
Pull requests are welcome!
If you want to ask questions, you can create issues on github.

# License
MIT
