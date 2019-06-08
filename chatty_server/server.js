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
let connections = 0;

// send oject data to all open connections
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
  connections++;

  // object to store and send count of open server connections
  const numConnections = {
    type: 'countConnections',
    count: connections,
    id: uuidv1()
  };
  
  // send object with number of connections to app for all users
  console.log('connected clients', connections);
  wss.broadcast(JSON.stringify(numConnections));

  ws.on('message', (event) => {
    const msg = JSON.parse(event);

    // handler to deal with incoming data for either messages or change of users
    switch(msg.type) {
      case 'postMessage':
        // handle incoming message
        msg.type = 'incomingMessage';
        msg.id = uuidv1();
        console.log(`${msg.username} said ${msg.content}`);
        break;
      case 'postNotification':
        // handle incoming notification
        msg.type = 'incomingNotification';
        msg.id = uuidv1();
        console.log(`${msg.content}`);
        break;
      default:
        // show an error in the console if the message type is unknown
        throw new Error('Unknown event type ' + msg.type);
    }
    wss.broadcast(JSON.stringify(msg));
  });

  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', () => {
    // Reduce count of open connections
    connections--;

    // object to store and send count of open server connections
    const numConnectionsOnClose = {
      type: 'countConnections',
      count: connections,
      id: uuidv1()
      };
    console.log('Client disconnected');
    console.log('connected clients', connections);
    // send count of connections to the app
    wss.broadcast(JSON.stringify(numConnectionsOnClose));
  });
});