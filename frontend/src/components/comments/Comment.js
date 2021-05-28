import React from 'react';
import { Link } from 'react-router-dom';
import Paths from '../../helpers/path';

function Comment({content, user}) {
  return (
    <div className="Comments-show">
      <div className="Comments-show-user"><Link to={Paths.showUser(user)}>{user.name}</Link></div>
      <p className="Comments-show-content">{content}</p>
    </div>
  );
}

export default Comment;
