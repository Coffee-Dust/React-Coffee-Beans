import { BrowserRouter as Router, } from 'react-router-dom';
import '../assets/App.css';
import '../assets/Post.css';
import '../assets/Comment.css';
import '../assets/User.css';
import AppRoutes from '../components/app/AppRoutes';
import Navbar from '../components/app/Navbar';
import React, { Component } from 'react';
import {connect} from 'react-redux'
import Popup from '../components/app/Popup';

class App extends Component {

  render() {

    return (
      <Router>
        <div className="App">
          <Navbar />
          {(this.props.currentPopup) ? <Popup onClose={this.props.currentPopup.onClose}>{this.props.currentPopup.content}</Popup> : null}
          <div className="App-wrapper">
            <AppRoutes />
          </div>
        </div>
      </Router>
    );
  }

}

export default connect(state=>({currentPopup: state.app.currentPopup}))(App);
