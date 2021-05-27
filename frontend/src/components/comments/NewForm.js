import React, { useState } from 'react';
import Comment from '../../models/comment';

function NewCommentForm(props) {

  const [content, setContent] = useState("");

  const handleSubmit = event=> {
    event.preventDefault();

    if (content.length > 0) {

      const data = {
        content: content,
        post_id: props.post.id,
        user_id: props.currentUser.id
      }

      Comment.create(data, props.onNewCommentPersisted)
    } else {
      event.target.content.placeholder = "You cannot submit an empty comment"
    }
  }

  return (
    <div className="Comments-new-form" hidden={!props.currentUser}>
      <form onSubmit={handleSubmit}>
        <input type="text" name="content" value={content} onChange={e=> setContent(e.target.value)} />
        <input type="submit" className="Comments-new-form-submit"/>
      </form>
    </div>
  );
}

export default NewCommentForm;
