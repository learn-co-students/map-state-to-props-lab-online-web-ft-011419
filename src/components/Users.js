import React, { Component } from 'react';
import { connect } from 'react-redux';
class Users extends Component {
///<li key={i}>Test</li>
  render() {
    return (
      <div>
        <ul>
          {this.props.users.map((user, i) => <li key={i}>{user.username} </li>    )}
          {this.props.userCount}
        </ul>
      </div>
    )
  }
}

const  mapStateToProps = (state)=> {
  return { users:  state.users   ,userCount: state.users.length}
}

export default connect(mapStateToProps)(Users)
