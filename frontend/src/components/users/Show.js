import React, { Component } from 'react';

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
        
      </div>
    );
  }
}

export default ShowUser;

