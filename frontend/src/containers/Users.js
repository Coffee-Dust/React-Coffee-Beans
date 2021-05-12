import React, { Component } from 'react';
import {connect} from 'react-redux'
import { createUser } from '../actions/users';
import NewUserForm from '../components/users/NewForm';

class UsersContainer extends Component {
  render() {
    return (
      <div>
        <NewUserForm createUser={this.props.createUser}/>
      </div>
    );
  }
}
const mapStateToProps = state => (
  {
    currentUser: state.users.currentUser
  }
)
const mapDispatchToProps = dispatch => (
  {
    createUser: formData => dispatch(createUser(formData))
  }
)
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
