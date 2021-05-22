import React, { Component } from 'react';
import { connect } from 'react-redux';
import Reaction from '../models/reaction';

class ReactionsContainer extends Component {

  constructor(props) {
    super(props)
    this.parentType = this.props.parent.constructor.name
    this.state = {
      reactionsCount: this.props.parent.reactionsCount
    }
  }

  generateReactionButtons() {
    return Object.keys(Reaction.typeGlyphs).map(type=> {
      return (
      <ReactionButton 
        reaction={new Reaction(type, this.props.parent, this.props.currentUser)} 
        count={this.state.reactionsCount[type]} 
        updateCount={this.updateCount} 
        key={type} 
      />)
    })
  }

  updateCount = (newReactionsCount)=> {
    this.setState(s=> ({...s, reactionsCount: newReactionsCount}))
  }

  render() {
    return (
      <span className={`${this.parentType}s-reactions-bar`}>
        {this.generateReactionButtons()}
      </span>
    );
  }
}

function ReactionButton({reaction, count, updateCount}) {
  return (
    <button 
    onClick={_=> reaction.submitClick(newReactionsCount=> updateCount(newReactionsCount))}
    disabled={!reaction.currentUser}
    >
      {count}{reaction.glyph}
    </button>
  )
}

export default connect(state=> ({currentUser: state.users.currentUser}))(ReactionsContainer);
