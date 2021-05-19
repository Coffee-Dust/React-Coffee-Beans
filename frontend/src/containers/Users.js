import React, { Component } from 'react';
import {connect} from 'react-redux'
import { createUser, loginUser } from '../actions/users';
import LoginForm from '../components/users/LoginForm';
import NewUserForm from '../components/users/NewForm';

class UsersContainer extends Component {
  render() {
    if (this.props.currentUser) {
      return (
        <div>
          <h1>Hello, {this.props.currentUser.name}!</h1>
        </div>
      )
    } else {
      return (
        <div>
          <LoginForm loginUser={this.props.loginUser}/>
          <NewUserForm createUser={this.props.createUser}/>
        </div>
      );
    }
  }
}

const mapStateToProps = state=> (
  {
    currentUser: state.users.currentUser
  }
)
const mapDispatchToProps = dispatch=> (
  {
    createUser: formData => dispatch(createUser(formData)),
    loginUser: formData=> dispatch(loginUser(formData))
  }
)
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
