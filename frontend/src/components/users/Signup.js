import React from 'react';
import LoginForm from './LoginForm';
import NewUserForm from './NewForm';

function Signup() {
  return (
    <div className="Users-signup-popup">
      <h2>Enter Your Login Info</h2>
      <LoginForm />,
      <h2>Or Make a New Account</h2>
      <NewUserForm />
    </div>
  );
}

export default Signup;
