import React, {Component} from 'react';

import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';
import NavBar from './NavBar.jsx';

class App extends Component {
  // set initial state of chatty app
  constructor (props) {
    super(props);
    this.state = 
    {
      currentUser: {name: 'Bob'}, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: [],
      count: 0
    };
    this.postMessage = this.postMessage.bind(this); 
    this.updateCurrentUser = this.updateCurrentUser.bind(this); 
  }

  // updates the current user in the message feed and displays a notification to all open connections
  updateCurrentUser(event) {
    if (event.charCode === 13 ) {
      const oldname = this.state.currentUser.name;
      this.setState(
        {currentUser: {name: event.target.value}}
      );
      const content = `${oldname} changed their name to ${event.target.value}`;
      const newUser = {
        type: 'postNotification',
        content: content
      };    
      this.socket.send(JSON.stringify(newUser));
    }
  }

  // updates the message feed with new inputs from any open connection
  postMessage(event) {
    if (event.charCode === 13 ) {
      const newMessage = {
        type: 'postMessage',
        id: this.state.messages.length + 1,
        username: this.state.currentUser.name, // event.target.previousSibling
        content: event.target.value
      };
      this.socket.send(JSON.stringify(newMessage));

      event.target.value = '';
    }
  }

  // handles all incoming messages, notifications and connection count to update currnt states
  componentDidMount() {
    this.socket = new WebSocket('ws://localhost:3001');

    this.socket.onopen = () => {
      this.socket.onmessage = (event) => {

        // The socket event data is encoded as a JSON string.
        // This line turns it into an object
        const incomingEvent = JSON.parse(event.data);
      
        switch(incomingEvent.type) {
          case 'incomingMessage':
            // code to handle incoming message 
            const newMessages = [...this.state.messages, incomingEvent];   
            this.setState(
              {messages: newMessages}
              );
            event.target.value = '';
            break;
          case 'incomingNotification':
              const newUser = [...this.state.messages, incomingEvent];
            // handle incoming notification    
            this.setState(
              {messages: newUser}
              );
            break;
          case 'countConnections':
              // handle incoming count of connections    
              this.setState(
                {count: incomingEvent.count}
              )
              break;
          default:
            // show an error in the console if the message type is unknown
            throw new Error('Unknown event type ' + incomingEvent.type);
        }              
      };
    };
  }

  // updates the web apps with new content
  render() {
    return (
      <div>
        <NavBar count = {this.state.count}/>
        <MessageList messages = {this.state.messages}/>
        <ChatBar currentUser = {this.state.currentUser.name} postMessage = {this.postMessage} updateCurrentUser = {this.updateCurrentUser}/>
      </div>
    );
  }
}
export default App;

