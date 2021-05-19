import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as CommentIcon } from '../../assets/icons/comment.svg';
import Paths from '../../helpers/path';

function PostList({posts}) {
  return (
    <div className="Posts-feed">
      {posts.map(post=> <Post key={`post${post.id}`} post={post} />)}
    </div>
  )
}

function Post({post}) {
  return (
    <div className="Posts-show">
      <div className="Posts-show-user"><Link to={Paths.showUser(post.user)}>{post.user.name}</Link></div>
      <div className="Posts-show-content"><p>{post.content}</p></div>
      <div className="Posts-show-interactions-bar">
        <span className="Posts-show-comment-count">{<CommentIcon />} {post.commentCount}</span>
      </div>
    </div>
  )
}

export default PostList;

