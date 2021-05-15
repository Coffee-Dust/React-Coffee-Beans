class Post {

  constructor(data) {
    this.content = data.content
    this.user_id = data.user_id || null
  }


  static create(data, successCallback, failureCallback=null) {

  }

}