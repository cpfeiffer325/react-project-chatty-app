import React, {Component} from 'react';
import Message from './Message.jsx';

// handle incoming object with all messages/notifications and iterates them for individual rendering
export default class MessageList extends Component {
  render() {    
    return (
      <main className='messages'>
        {this.props.messages.map((message) =>
          <Message 
            key={ message.id }
            type={ message.type }
            username ={ message.username }
            content ={ message.content} />
        )}
      </main>
    );
  }
}
