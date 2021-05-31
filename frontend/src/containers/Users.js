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

  state = {
    showUserNode: false
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
    currentUser: state.users.currentUser
  }
)
const mapDispatchToProps = dispatch=> (
  {
    displayPopup: content=> dispatch(displayPopup(content))
  }
)
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
