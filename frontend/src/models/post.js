import AjaxCall from "../helpers/ajax"
import Paths from "../helpers/path"
import Comment from "./comment"
class Post {

  constructor(data) {
    this.constructorName = "Post"
    if (data.id) {
      this.id = data.id
      this.content = data.content
      this.user = data.user
      this.commentCount = data.comment_count
      this.date = new Date(data.created_at)
      this.reactionsCount = data.reactions_count
    } else {
      throw new Error("Invalid Post Creation: Missing ID property")
    }
  }

  async fetchComments() {
    return new AjaxCall(Paths.showPostComments(this)).getData().then(commentsData=> commentsData.map(data=> new Comment(data)))
  }

  static create(data, successCallback, failureCallback=_=>{}) {
    new AjaxCall(Paths.posts).postData(data).then(postData=> {
      if (postData.id) {
        const post = new this(postData)
        successCallback(post)
      } else {
        console.error(`Post did not save! An id was not returned from server`, postData)
        failureCallback(postData)
      }
    })
  }

}

export default Post;