import React, {Component} from 'react';

// handles new messages and notifications for user name changes
export default class ChatBar extends Component {
  render() {
    return (
      <footer className='chatbar' >
        <input className='chatbar-username' placeholder='Your Name (Optional)' defaultValue={this.props.currentUser} onKeyPress={this.props.updateCurrentUser}/>
        <input className='chatbar-message' placeholder='Type a message and hit ENTER' onKeyPress={this.props.postMessage}/>
      </footer>
    );
  }
}
