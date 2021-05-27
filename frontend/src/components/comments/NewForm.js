import React from 'react';

function NewCommentForm(props) {

  const handleSubmit = event=> {
    event.preventDefault();
  }

  return (
    <div className="Comments-new-form">
      <form onSubmit={handleSubmit}>

      </form>
    </div>
  );
}

export default NewCommentForm;
