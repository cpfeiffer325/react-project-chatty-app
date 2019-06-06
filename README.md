# React Project - Chatty App

A simple single page web app that allows users to communicate with each other without having to register accounts in real-time. Built with ReactJS Webpack with Babel JSX ES6 WebSockets and SCSS.

## Getting Started
1. Fork this repository then clone your fork locally
```
git clone git@github.com:cpfeiffer325/react-project-chatty-app.git
cd react-project-chatty-app
```
2. Install dependencies using the npm install command in both the main folder and the chatty_server folder
```
npm install
cd chatty_server
npm install
```
3. Start both the app and websocket servers in separate terminals
  - The app will be served at http://localhost:3000/
  - The websocket will be listening on port 3001
```
// in react-project-chatty-app folder
run start
// open second terminal
// in chatty_server folder
run start
```
4. Go to http://localhost:3000/ in your browser
5. Open a second browser with http://localhost:3000/
6. Send messages between sites

## App - Main Folder
### Dependencies
* [React] (https://reactjs.org/docs/getting-started.html)
* React-dom

### Dev-Dependencies
* Babel-core
* [Babel-loader](https://github.com/babel/babel-loader)
* Babel-preset-es2015
* Babel-preset-react
* Babel-preset-stage-0
* Css-loader
* Eslint
* Eslint-plugin-react
* Node-sass
* Sass-loader
* Sockjs-client
* Style-loader
* Webpack
* [Webpack-dev-server](https://github.com/webpack/webpack-dev-server)

## WebSocket - Server Folder
### Dependencies
* Express
* UUID
* WS

## App Functionality


## Screenshot





### Static Files

You can store static files like images fonts etc in the `build` folder.

For example if you copy a file called my_image.png into the build folder you can access it using `http://localhost:3000/build/my_image.png`.

### Linting

This boilerplate project includes React ESLint configuration.

```
npm run lint
```