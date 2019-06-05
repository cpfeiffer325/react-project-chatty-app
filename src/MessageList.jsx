import React, {Component} from 'react';

import Message from "./Message.jsx";

export default class MessageList extends Component {
  render() {
    console.log(this.props.messages);
    const messages = this.props.messages;
    
    return (
      <main className="messages">
        {messages.map((message) =>
          <Message 
            key={ message.id }
            username ={ message.username }
            content ={ message.content} />
        )}
      </main>
    );
  }
}
