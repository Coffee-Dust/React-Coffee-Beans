import React from 'react';
import Post from './Post'

function PostList({posts}) {
  return (
    <div className="Posts-feed">
      {posts.map(post=> <Post key={`post${post.id}`} post={post} />)}
    </div>
  )
}

export default PostList;

