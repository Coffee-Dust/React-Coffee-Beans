import React from 'react';
import LoginForm from './LoginForm';
import NewUserForm from './NewForm';

function Signup() {
  return (
    <div className="Users-signup-popup">
      <LoginForm loginUser={this.props.loginUser}/>,
      <NewUserForm createUser={this.props.createUser}/>
    </div>
  );
}

export default Signup;
