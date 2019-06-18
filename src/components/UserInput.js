import React, { Component } from 'react';
import { connect } from 'react-redux'

class UserInput extends Component {
// state set to username and a hometown.  Initial state is empty.

  state = {
    username: '',
    hometown: ''
  }

// handleInputChange action on event.  setState to the value of user input
  handleInputChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  // handleOnSubmit in submit prevents the default action, dispatch type to 'ADD_USER' and sets new user state to database
  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch({ 
      type: 'ADD_USER', user: this.state 
    })
  }

  // render form 
  render() {
    return(
      <form onSubmit={this.handleOnSubmit}>

        <p>
          <input
            type="text"
            id="username"
            onChange={this.handleInputChange}
            placeholder="username"
          />
        </p>

        <p>
          <input
            type="text"
            id="hometown"
            onChange={this.handleInputChange}
            placeholder="hometown"
          />
        </p>

        <input type="submit" />
      </form>
    )
  }
}

//export default and  connect to UserInput
export default connect()(UserInput);
