import AjaxCall from "../helpers/ajax";
import Paths from "../helpers/path";

class Comment {
  
  constructor(data) {
    this.id = data.id
    this.user = data.user
    this.content = data.content
    this.date = new Date(data.created_at)
  }

  static create(data, successCallback) {
    new AjaxCall(Paths.showPostComments({id: data.post_id})).postData({comment: data}).then(commentData=> {
      if (commentData.id) {
        successCallback(new this(commentData))
      } else {
        alert("Could not submit/save comment.")
      }
    })
  }

}

export default Comment;