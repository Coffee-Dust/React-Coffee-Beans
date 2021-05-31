import React, { PureComponent } from 'react';
import {connect} from 'react-redux'
import { displayPopup } from '../actions/app';
import ShowUser from '../components/users/Show';
import Signup from '../components/users/Signup';
import User from '../models/user';

class UsersContainer extends PureComponent {
  
  state = {
    showUserNode: false
  }
  
  routeActions = {
    findUserAndSetNode: ()=> {
      if (!this.state.showUserNode) {
        User.findWithID(this.props.match.params.id, 
          user=> this.setState({showUserNode: <ShowUser user={user} />}))
      }
    },

    showProfileOrDisplaySignup: ()=> {
      if (this.props.isLoggedIn) {
        if (!this.state.showUserNode) {this.setState({showUserNode: <ShowUser user={this.props.currentUser} />})}

      } else if (!this.props.currentPopup && !this.props.users.pendingFetch) {
        this.props.displayPopup([<Signup />])
      }
    }
  }

  checkRouteAndRunAction() {

    if (this.props.match.params.id) {
      // route is show user(/users/:id):
      this.routeActions.findUserAndSetNode()
    } else {
      // route is /profile
      this.routeActions.showProfileOrDisplaySignup()
    }
  }

  componentDidMount() {
    this.checkRouteAndRunAction()
  }

  componentDidUpdate() {
    this.checkRouteAndRunAction()
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
