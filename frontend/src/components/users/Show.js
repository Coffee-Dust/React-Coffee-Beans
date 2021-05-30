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
      <div>
        <PostList posts={this.state.posts} />
      </div>
    );
  }
}

export default ShowUser;

