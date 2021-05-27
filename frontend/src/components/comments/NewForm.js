import React, { useState } from 'react';

function NewCommentForm(props) {

  const [content, setContent] = useState("");

  const handleSubmit = event=> {
    event.preventDefault();
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
