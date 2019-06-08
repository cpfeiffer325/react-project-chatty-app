import React, {Component} from 'react';

export default class Message extends Component {
  render() {
    console.log(this.props);
    switch(this.props.type) {
      case 'incomingMessage':
        return (
        // code to handle incoming message
        <div className='message'>
          <span className='message-username'>{this.props.username}</span>
          <span className='message-content'>{this.props.content}</span>
        </div>
        )
      case 'incomingNotification':
        return ( 
        // handle incoming notification
        <div className='notification'>
          <span className='notification-content'>{this.props.content}</span>
        </div> 
        )
    }     
  }
}
