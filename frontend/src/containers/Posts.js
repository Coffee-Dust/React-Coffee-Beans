import React, { Component } from 'react';
import { connect } from 'react-redux';
import { closePopup, displayPopup } from '../actions/app';
import { addPost, fetchPosts } from '../actions/posts';
import PostsForm from '../components/posts/Form';
import PostList from '../components/posts/List';

const mapStateToProps = state => ({
  currentUser: state.users.currentUser,
  posts: state.posts.all,
  app: {currentPopup: state.app.currentPopup}
})

const mapDispatchToProps = dispatch => ({
  actions: {
    addPost: post => dispatch(addPost(post)),
    fetchPosts: limit => dispatch(fetchPosts(limit))
  },
  app: {
    displayPopup: content=> dispatch(displayPopup(content)),
    closePopup: closePopup
  }
})

class PostsContainer extends Component {

  constructor(props) {
    super(props)

  }

  componentDidMount() {
    this.props.actions.fetchPosts()
  }

  displayNewPostButtonIfLoggedIn() {
    if (this.props.currentUser) {
      return <button className="Posts-new-button" onClick={_=> this.props.app.displayPopup([<PostsForm post={_} container={this.props}/>])}>+</button>
    }
    return null
  }

  render() {
    return (
      <div className="Posts-container">
        {this.displayNewPostButtonIfLoggedIn()}
        <PostList posts={this.props.posts} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);
