import React, { Component } from 'react';
import PostList from '../posts/List';

class ShowUser extends Component {

  constructor(props) {
    super(props)
    this.user = props.user
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    this.user.getPosts(posts=> this.setState({posts: posts}))
  }

  render() {
    return (
      <div className="Users-show">
        <div className="Users-show-info-bar">
          <img src="" alt="" />
          <span>{this.user.name}</span>
        </div>
        <div className="Users-show-select-display-bar">
          <h4>My Beans</h4>
        </div>
        <PostList posts={this.state.posts} />
      </div>
    );
  }
}

export default ShowUser;

