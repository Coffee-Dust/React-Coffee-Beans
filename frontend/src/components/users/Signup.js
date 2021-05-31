import React from 'react';
import LoginForm from './LoginForm';
import NewUserForm from './NewForm';

function Signup() {
  return (
    <div className="Users-signup-popup">
      <LoginForm />,
      <NewUserForm />
    </div>
  );
}

export default Signup;
