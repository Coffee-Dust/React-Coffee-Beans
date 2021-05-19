import AjaxCall from "../helpers/ajax"
import Paths from "../helpers/path"
class Post {

  constructor(data) {
    if (data.id) {
      this.id = data.id
      this.content = data.content
      this.user = data.user
      this.commentCount = data.comment_count
      this.date = new Date(data.created_at)
    } else {
      throw new Error("Invalid Post Creation: Missing ID property")
    }
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