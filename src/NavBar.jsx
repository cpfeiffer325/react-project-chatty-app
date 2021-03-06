import React, {Component} from 'react';

export default class NavBar extends Component {
  render() {
    return (
        <nav className='navbar'>
          <a href='/' className='navbar-brand'>Chatty</a>
          <div className='numConnections'>{this.props.count} {this.props.count === 1 ? 'user online' : 'users online'}</div>
        </nav>
    );
  }
}