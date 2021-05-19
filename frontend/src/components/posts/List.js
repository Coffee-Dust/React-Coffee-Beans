import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as CommentIcon } from '../../assets/icons/comment.svg';
import Paths from '../../helpers/path';

function PostList({posts}) {
  return (
    <ul className="Posts-feed">
      {posts.map(post=> <Post key={`post${post.id}`} post={post} />)}
    </ul>
  )
}

function Post({post}) {
  return (
    <li className="Posts-show">
      <div className="Posts-show-user"><Link to={Paths.showUser(post.user)}>{post.user.name}</Link></div>
      <p>{post.content}</p>
      <div className="Posts-show-interactions-bar">
        <span className="Posts-show-comment-count">{<CommentIcon />} {post.commentCount}</span>
      </div>
    </li>
  )
}

export default PostList;

