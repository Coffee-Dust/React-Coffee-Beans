import React, { Component } from 'react';
import { connect } from 'react-redux';
import { closePopup, displayPopup } from '../actions/app';
import { addPost, fetchPosts } from '../actions/posts';
import PostsForm from '../components/posts/Form';
import FullscreenPost from '../components/posts/Fullscreen';
import PostList from '../components/posts/List';

const mapStateToProps = state => ({
  currentUser: state.users.currentUser,
  posts: state.posts.all,
  currentPopup: state.app.currentPopup,
})

const mapDispatchToProps = dispatch => ({
  actions: {
    addPost: post => dispatch(addPost(post)),
    fetchPosts: limit => dispatch(fetchPosts(limit))
  },
  app: {
    displayPopup: (content, onClose)=> dispatch(displayPopup(content, onClose)),
    closePopup: _=> dispatch(closePopup())
  }
})

class PostsContainer extends Component {

  componentDidMount() {
    if (this.props.currentPopup && !this.props.match.params.id) {
      this.props.app.closePopup()
    }
    this.props.actions.fetchPosts()
  }

  shouldComponentUpdate() {
    if (this.props.currentPopup) {
      return false
    } else {
      return true
    }
  }

  
  render() {
    return (
      <div className="Posts-container">
        {this.displayFullscreenPost()}
        {this.displayNewPostButtonIfLoggedIn()}
        <PostList posts={this.props.posts} />
      </div>
    );
  }

  displayFullscreenPost() {
    if (this.props.match.params.id && this.props.currentPopup === false) {
      this.props.app.displayPopup([<FullscreenPost post={this.props.posts.find(p => p.id == this.props.match.params.id)}/>], this.exitFullscreenPost)
    }
  }

  exitFullscreenPost = _=> {
    this.props.app.closePopup()
    this.props.history.goBack();
  }

  displayNewPostButtonIfLoggedIn() {
    if (this.props.currentUser) {
      return <button className="Posts-new-button" onClick={_=> this.props.app.displayPopup([<PostsForm post={_} container={this.props}/>])}>+</button>
    }
    return null
  }
  
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);
