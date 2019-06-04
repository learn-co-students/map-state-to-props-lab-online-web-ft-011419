import React, { Component } from 'react';
import { connect } from 'react-redux';

class ConnectedUsers extends Component {

  render() {
    return (
      <div>
        <h2>Total Users: {this.props.userCount}</h2>
          <ul>
            {this.props.users.map(user => <li>{user.username} - {user.hometown}</li>)}
          </ul>
      </div>
    )
  }

}

const mapStateToProps = state => {
  return { users: state.users, userCount: state.users.length };
};

export default connect(mapStateToProps)(ConnectedUsers);
