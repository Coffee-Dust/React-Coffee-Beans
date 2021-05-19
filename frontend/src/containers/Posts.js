import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPost, fetchPosts } from '../actions/posts';
import FocusPost from '../components/posts/Focus';
import PostsForm from '../components/posts/Form';
import PostList from '../components/posts/List';

const mapStateToProps = state => ({
  currentUser: state.users.currentUser,
  posts: state.posts.all
})

const mapDispatchToProps = dispatch => ({
  actions: {
    addPost: post => dispatch(addPost(post)),
    fetchPosts: limit => dispatch(fetchPosts(limit))
  }
})

class PostsContainer extends Component {

  state = {
    currentFocus: false
  }

  focus(post) {
    this.setState(prev=> ({...prev, currentFocus: post}))
  }
  closeFocus() {
    this.setState(prev => ({ ...prev, currentFocus: false }))
  }

  componentDidMount() {
    this.props.actions.fetchPosts()
  }

  render() {
    return (
      <div>
        <PostList posts={this.props.posts} />

        {(this.state.currentFocus) ?
        <FocusPost container={this} post={this.state.currentFocus} />
        :
          null
        }
        <PostsForm addPost={this.props.actions.addPost} post={false} container={this}/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);
