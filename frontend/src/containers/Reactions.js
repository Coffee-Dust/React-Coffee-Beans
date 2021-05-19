import React, { Component } from 'react';

const reactionTypes = {
  "like": "👍",
  "dislike": "👎",
  "love": "💜",
  "laugh": "🤣",
  "angry": "😡",
  "sad": "😢"
}

class ReactionsContainer extends Component {

  constructor(props) {
    super(props)
    this.parentType = this.props.parent.constructor.name
    this.reactionsCount = this.props.parent.reactionsCount
  }

  generateReactionButtons() {
    return Object.keys(reactionTypes).map(type=> {
      let glyph = reactionTypes[type]
      let count = this.reactionsCount[type]
      return <Reaction glyph={glyph} count={count} handleClick={this.handleClick} />
    })
  }

  handleClick(event) {

  }

  render() {
    return (
      <span className={`${this.parentType}s-reactions-bar`}>
        {this.generateReactionButtons()}
      </span>
    );
  }
}

function Reaction(props) {
  return (
    <button>{props.count}{props.glyph}</button>
  )
}

export default ReactionsContainer;
