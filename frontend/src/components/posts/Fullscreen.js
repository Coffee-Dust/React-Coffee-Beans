import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ReactComponent as CommentIcon } from '../../assets/icons/comment.svg';
import CommentsContainer from '../../containers/Comments';
import ReactionsContainer from '../../containers/Reactions';
import Paths from '../../helpers/path';

class FullscreenPost extends Component {

  render() {
    return (
      <div className="Posts-show-fullscreen">
        <div className="Posts-show">
        <div className="Posts-show-user"><Link to={Paths.showUser(this.props.post.user)}>{this.props.post.user.name}</Link></div>
        <span className="Posts-show-date">{this.props.post.date.toLocaleTimeString("en-us", { hour: '2-digit', minute: '2-digit' })} - {this.props.post.date.toDateString()}</span>
        <div className="Posts-show-content"><p>{this.props.post.content}</p></div>
        <div className="Posts-show-interactions-bar">
          <ReactionsContainer parent={this.props.post} />
          <div className="Posts-show-comment-count">
            {<CommentIcon />} {this.props.post.commentCount}
          </div>
          <CommentsContainer post={this.props.post}/>
        </div>
        </div>
      </div>
    );
  }
}

export default connect(state=> ({allPosts: state.posts.all}))(FullscreenPost);
