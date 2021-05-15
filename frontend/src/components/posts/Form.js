import { useState } from "react"
import Post from "../../models/post";

function PostsForm(props) {
  
  const [postData, setPostData] = useState({content: props.post.content || ""});

  const handleChange = event=> {
    setPostData({...postData, content: event.target.value})
  }

  const handleSubmit = event=> {
    event.preventDefault()
    const data = {
      post: {
        content: postData.content,
        // image_attributes: {attachment: event.target.image.value},
        user_id: props.container.props.currentUser.id
      }
    }
    if (props.post) {
      props.post.update(postData)
    } else {
      Post.create(data, post=> props.container.focus(post))
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} name="content" value={postData.content}/>
      {
        (!props.post) ?
          <input type="file" accept="image/png, image/jpeg" name="image"/>
        :
          <input type="file" accept="image/png, image/jpeg" name="image" hidden="true"/>
      }
      <input type="submit" />
    </form>
  )
}

export default PostsForm