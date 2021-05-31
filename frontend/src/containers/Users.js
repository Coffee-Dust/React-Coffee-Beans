import React, { PureComponent } from 'react';
import {connect} from 'react-redux'
import { displayPopup } from '../actions/app';
import ShowUser from '../components/users/Show';
import Signup from '../components/users/Signup';

class UsersContainer extends PureComponent {
  
  componentDidMount() {
    if (!this.props.currentUser) {
      this.props.app.displayPopup([
        <Signup />
      ])
    }
  }

  render() {
    if (this.props.currentUser) {
      return (
        <div>
          <ShowUser user={this.props.currentUser} />
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
    displayPopup: content=> dispatch(displayPopup(content))
  }
)
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
