import moment from 'moment';
import React from 'react';
import { Link } from 'react-router-dom';
import Paths from '../../helpers/path';

function Comment({content, user, date}) {
  const displayElapsedTime = ()=> {
    const difference = new Date(Date.now() - date)
    return moment(date).fromNow()
  }

  return (
    <div className="Comments-show">
      <div className="Comments-show-user"><Link to={Paths.showUser(user)}>{user.name}</Link></div>
      <div className="Comments-show-date">
        {displayElapsedTime()}
      </div>
      <p className="Comments-show-content">{content}</p>
    </div>
  );
}

export default Comment;
