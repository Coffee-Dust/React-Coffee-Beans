import { BrowserRouter as Router, } from 'react-router-dom';
import '../assets/App.css';
import AppRoutes from '../components/app/AppRoutes';
import Navbar from '../components/app/Navbar';
import React, { Component } from 'react';

class App extends Component {

  render() {

    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="App-wrapper">
            <AppRoutes />
          </div>
        </div>
      </Router>
    );
  }

}

export default App;
