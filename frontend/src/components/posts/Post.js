import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { ReactComponent as CommentIcon } from '../../assets/icons/comment.svg';
import ReactionsContainer from '../../containers/Reactions';
import Paths from '../../helpers/path';

function Post({history, post}) {

  const validClickLocation = event=> {
    return event.target.classList.contains("Posts-show")
  }

  return (
    <div className="Posts-show" onClick={e=> {
      if (validClickLocation(e)) {
        history.push(Paths.showPost(post))
      }}}>
      <div className="Posts-show-user"><Link to={Paths.showUser(post.user)}>{post.user.name}</Link></div>
      <span className="Posts-show-date">{post.date.toLocaleTimeString("en-us", { hour: '2-digit', minute: '2-digit' })} - {post.date.toDateString()}</span>
      <div className="Posts-show-content"><p>{post.content}</p></div>
      <div className="Posts-show-interactions-bar">
        <ReactionsContainer parent={post} />
        <span className="Posts-show-comment-count"> {<CommentIcon />} {post.commentCount}</span>
      </div>
    </div>
  )
}

export default withRouter(Post);