import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map(user => { return (
          <React.Fragment>
            <h3>{user.username}</h3>
            <h4>{user.hometown}</h4>
            <li>{this.props.count}</li>
          </React.Fragment>
          )})}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { users: state.users, count: state.users.length }
}

export default connect(mapStateToProps)(Users)
