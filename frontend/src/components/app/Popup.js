import React from 'react';
import { closePopup } from '../../actions/app';
import { connect } from 'react-redux'

function Popup(props) {

  const checkClickAndClose = event=> {
    console.log("thisgotclicked!", event.target);
    if (event.target.classList.contains("App-popup")) {
      props.onClose()
      props.closePopup()
    }
  }

  return (
    <div className="App-popup" onClick={checkClickAndClose}>
      <div className="App-popup-content">
        <button 
        className="close-button"
        onClick={_=> {props.onClose(); props.closePopup()}}>x</button>

        {props.children}
        
      </div>
    </div>
  );
}

export default connect(null, {closePopup: closePopup})(Popup);
