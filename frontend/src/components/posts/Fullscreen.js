import React, { Component } from 'react';

class FullscreenPost extends Component {
  constructor(props) {
    super()
    this.container = props.container
    this.post = props.post
  }
  render() {
    return (
      <div>
        <button onClick={e=> this.container.closeFocus(this.post)}>X</button>
        <p>{this.post.content}</p>
      </div>
    );
  }
}

export default FullscreenPost;
