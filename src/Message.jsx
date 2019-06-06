import React, {Component} from 'react';

export default class Message extends Component {
    render() {
      return (
        <div className="message">
          <span className="message-username">{this.props.username}</span>
          <span className="message-content">{this.props.content}</span>
        </div>
      );
    }
  }