import React, { Component } from 'react';

class CommentsContainer extends Component {

  constructor(props) {
    super()
    this.state = {
      comments: []
    }
    this.post = props.post
  }

  componentDidMount() {
    if (this.post.commentCount > 0) {
      this.post.fetchComments().then(comments=> this.setState({comments: comments}))
    }
  }

  render() {
    return (
      <div className="Comments-container">
        <CommentsList comments={this.state.comments} />
      </div>
    );
  }
}

export default CommentsContainer;
