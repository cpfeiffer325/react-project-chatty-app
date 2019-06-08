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
* [React-dom] (https://www.npmjs.com/package/react-dom)

### Dev-Dependencies
* [Babel-core] (https://www.npmjs.com/package/babel-core)
* [Babel-loader](https://github.com/babel/babel-loader)
* Babel-preset-es2015
* Babel-preset-react
* Babel-preset-stage-0
* [Css-loader] (https://www.npmjs.com/package/css-loader)
* Eslint
* Eslint-plugin-react
* [Node-sass] (https://www.npmjs.com/package/node-sass)
* [Sass-loader] (https://www.npmjs.com/package/sass-loader)
* [Sockjs-client] (https://www.npmjs.com/package/sockjs-client)
* [Style-loader] (https://www.npmjs.com/package/style-loader)
* [Webpack] (https://www.npmjs.com/package/webpack)
* [Webpack-dev-server](https://github.com/webpack/webpack-dev-server)

## WebSocket - Server Folder
### Dependencies
* [Express] (https://www.npmjs.com/package/express)
* [UUID] (https://www.npmjs.com/package/uuid)
* [WS] (https://www.npmjs.com/package/websocket)

## App Functionality
Primarily a client-side SPA (single-page app) built with ReactJS
Contains a chat log displaying messages and notifications
Contains an input field to change your name and an input field to send a message
The client-side app communicates with a server via WebSockets for multi-user real-time updates
No persistent database is involved; the focus is on the client-side experience

## App Behaviour
When any connected user sends a chat message, all connected users receive and display the message
When any connected user changes their name, all connected users are notified of the name change
Notifications are styled differently from chat messages
Header will display the count of connected users
When the number of connected users changes, this count will be updated for all connected users

## Screenshot
!['Screenshot of Chatty App'] ('build/chatty-app-screenshot.png')
