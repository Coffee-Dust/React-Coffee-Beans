import React, { Component } from 'react';
import { connect } from 'react-redux';
import CommentsList from '../components/comments/List';

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

export default connect(state=>({currentUser: state.users.currentUser}))(CommentsContainer);
