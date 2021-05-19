import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as CommentIcon } from '../../assets/icons/comment.svg';
import Paths from '../../helpers/path';

function ShowPost({post}) {
  return (
    <div className="Posts-show">
      <div className="Posts-show-user"><Link to={Paths.showUser(post.user)}>{post.user.name}</Link></div>
      <p>{post.content}</p>
      <div className="Posts-show-interactions-bar">
        <span className="Posts-show-comment-count">{<CommentIcon />} {post.commentCount}</span>
      </div>
    </div>
  )
}

export default ShowPost;

