import React, { PureComponent } from 'react';
import {connect} from 'react-redux'
import { displayPopup, closePopup } from '../actions/app';
import { createUser, loginUser } from '../actions/users';
import LoginForm from '../components/users/LoginForm';
import NewUserForm from '../components/users/NewForm';

class UsersContainer extends PureComponent {
  
  componentDidMount() {
    if (!this.props.currentUser) {
      this.props.app.displayPopup([
        <LoginForm loginUser={this.props.loginUser}/>,
        <NewUserForm createUser={this.props.createUser}/>
      ])
    }
  }

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
          Please login!
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
    createUser: formData=> dispatch(createUser(formData)),
    loginUser: formData=> dispatch(loginUser(formData)),
    app: {
      displayPopup: content=> dispatch(displayPopup(content))
    }
  }
)
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
