import Post from "./post"
import AjaxCall from "../helpers/ajax"
import Paths from "../helpers/path"

class User {

  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.posts = []
  }

  getPosts(successCallback) {
    new AjaxCall(Paths.userPosts(this)).getData().then(postsData=> {
      this.posts = postsData.map(data=> new Post(data))
      successCallback(this.posts)
    })
  }
}

export default User;