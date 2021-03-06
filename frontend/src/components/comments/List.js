import React from 'react';
import Comment from './Comment'

function CommentsList({comments}) {
  return (
    <div className="Comments-feed">
      {comments.map(comment=> <Comment key={comment.id} {...comment}/>)}
    </div>
  );
}

export default CommentsList;
