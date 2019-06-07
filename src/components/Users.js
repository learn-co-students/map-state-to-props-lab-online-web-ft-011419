import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    return (
      <div>
        <h1>Total Users: {this.props.usersCount}</h1>
        <ul>
          {this.props.users.map(user => <li>{user.username} - {user.hometown}</li>)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { users: state.users, usersCount: state.users.length }
}

export default connect(mapStateToProps)(Users)
