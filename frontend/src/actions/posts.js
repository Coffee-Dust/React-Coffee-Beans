import AjaxCall from "../helpers/ajax" 
import Post from "../models/post"

export function addPost(post) {
  if (post.constructor.name === "Post") {
    return {
      type: "ADD_POST",
      post
    }
  } else {
    throw new Error(`InvalidItemAddedToStoreError: tried to add ${post} when it was not of type "Post"`)
  }
}

export function fetchPosts(limit=25) {
  return dispatch=> {
    dispatch({type: "FETCH_POSTS"})
    new AjaxCall(`/beans?limit=${limit}`).getData().then(postsData=> {
      dispatch({type: "ADD_POSTS", posts: postsData.map(data=> new Post(data))})
    })
  }
}

// Action creators can be impure.
// var addChat = ({id = "JKLDSHFJKSDHFJKHSDJKHF", msg = '', user = 'Anonymous', timeStamp = Date.now()} = {idk:"XD"}) => ({ type: "ADD_CHAT", payload: { id, msg, user, timeStamp }});
