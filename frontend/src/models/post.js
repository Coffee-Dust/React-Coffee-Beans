import AjaxCall from "../helpers/ajax"
class Post {

  constructor(data) {
    if (data.id) {
      this.id = data.id
      this.content = data.content
      this.user_id = data.user_id
    } else {
      throw new Error("Invalid Post Creation: Missing ID property")
    }
  }

  static create(data, successCallback, failureCallback=_=>{}) {
    new AjaxCall().postData(data).then(postData=> {
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