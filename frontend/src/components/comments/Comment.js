import React from 'react';

function Comment({content, user}) {
  return (
    <div className="Comments-show">
      <div className="Comments-show-user">{user.name}</div>
      <p className="Comments-show-content">{content}</p>
    </div>
  );
}

export default Comment;
