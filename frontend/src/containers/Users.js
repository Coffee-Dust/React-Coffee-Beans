import React, { PureComponent } from 'react';
import {connect} from 'react-redux'
import { displayPopup } from '../actions/app';
import ShowUser from '../components/users/Show';
import Signup from '../components/users/Signup';

class UsersContainer extends PureComponent {
  
  state = {
    showUserNode: false
  }
  
  routeActions = {

  }


  componentDidMount() {
    if (!this.props.currentUser) {
      this.props.app.displayPopup([
        <Signup />
      ])
    }
  }



  render() {
    return (
      <div className="Users-container">
        {this.state.showUserNode}
      </div>
    )
  }

}

const mapStateToProps = state=> (
  {
    users: state.users,
    currentUser: state.users.currentUser,
    isLoggedIn: !!state.users.currentUser,
    currentPopup: state.app.currentPopup
  }
)
const mapDispatchToProps = dispatch=> (
  {
    displayPopup: content=> dispatch(displayPopup(content))
  }
)
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
