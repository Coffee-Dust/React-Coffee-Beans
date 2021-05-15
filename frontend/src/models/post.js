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


  static create(data, successCallback, failureCallback=null) {

  }

}