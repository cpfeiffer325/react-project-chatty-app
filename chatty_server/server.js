// server.js

const express = require('express');
const SocketServer = require('ws').Server;
const uuidv1 = require('uuid');

// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new SocketServer({ server });

wss.broadcast = function broadcast(data) {
  wss.clients.forEach(function each(client) {
    if (client.readyState === 1) {
      client.send(data);
    }
  });
};

// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.    
wss.on('connection', (ws) => {
  console.log('Client connected');

  ws.on('message', (event) => {
    const msg = JSON.parse(event);
    switch(msg.type) {
      case "postMessage":
        // code to handle incoming message
        msg.type = "incomingMessage";
        msg.id = uuidv1();
        console.log(`${msg.username} said ${msg.content}`);
        break;
      case "postNotification":
        // handle incoming notification
        msg.type = "incomingNotification";
        msg.id = uuidv1();
        console.log(`${msg.content}`);
        break;
      default:
        // show an error in the console if the message type is unknown
        throw new Error("Unknown event type " + msg.type);
    }
    wss.broadcast(JSON.stringify(msg));
  });

  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', () => console.log('Client disconnected'));
});