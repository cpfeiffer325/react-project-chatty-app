import React, {Component} from 'react';

import MessageList from "./MessageList.jsx";
import ChatBar from "./ChatBar.jsx";

class App extends Component {
  // set initial state of chatty app
  constructor (props) {
    super(props);
    this.state = 
    {
      currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: [
        {
          id: 1,
          username: "Bob",
          content: "Has anyone seen my marbles?",
        },
        {
          id: 2,
          username: "Anonymous",
          content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
        }
      ]
    };
    this.postMessage = this.postMessage.bind(this); 
  }


  postMessage(event) {
    if (event.charCode == 13 ) {
      const newMessage = {
        id: this.state.messages.length + 1,
        username: this.state.currentUser.name, // event.target.previousSibling
        content: event.target.value
      };

      const newMessages = [...this.state.messages, newMessage];

      this.socket.send(JSON.stringify(newMessage));

      this.setState(
        {messages: newMessages}
        );
        event.target.value = "";
    }
  }

  componentDidMount() {
    this.socket = new WebSocket("ws://localhost:3001");


    this.socket.onopen = () => {
      console.log("connected to the server");
      this.socket.send("Connection created with the client");
    }

    
    // setTimeout(() => {
    //   // Add a new message to the list of messages in the data store
    //   const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
    //   const messages = this.state.messages.concat(newMessage);
    //   // Update the state of the app component.
    //   // Calling setState will trigger a call to render() in App and all child components.
    //   this.setState({messages: messages});
    // }, 500);
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
        </nav>
        <MessageList messages = {this.state.messages}/>
        <ChatBar currentUser = {this.state.currentUser.name} postMessage = {this.postMessage}/>
      </div>
    );
  }
}
export default App;

