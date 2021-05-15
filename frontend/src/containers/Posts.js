import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPost } from '../actions/posts';
import PostsForm from '../components/posts/Form';

class PostsContainer extends Component {
  render() {
    return (
      <div>
        <PostsForm addPost={this.props.actions.addPost} post={false} container={this.props}/>
      </div>
    );
  }
}

const mapStateToProps = state=> ({
  currentUser: state.users.currentUser,
  posts: state.posts.all
})

const mapDispatchToProps = dispatch=> ({
  actions: {
    addPost: post=> dispatch(addPost(post))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);
