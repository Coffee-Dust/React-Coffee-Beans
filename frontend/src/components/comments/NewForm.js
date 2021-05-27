import React, { useState } from 'react';
import Comment from '../../models/comment';

function NewCommentForm(props) {

  const [content, setContent] = useState("");

  const handleSubmit = event=> {
    event.preventDefault();
    const data = {
      content: content,
      post_id: props.post.id,
      user_id: props.currentUser.id
    }

    Comment.create(data, props.onNewCommentPersisted)
  }

  return (
    <div className="Comments-new-form">
      <form onSubmit={handleSubmit}>
        <input type="text" name="content" value={content} onChange={e=> setContent(e.target.value)}/>
      </form>
    </div>
  );
}

export default NewCommentForm;
