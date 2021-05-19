import { useState } from "react"
import Post from "../../models/post";

function PostsForm(props) {
  
  const [content, setContent] = useState(props.post.content || "");

  const handleSubmit = event=> {
    event.preventDefault()
    const data = {
      post: {
        content: content,
        // image_attributes: {attachment: event.target.image.value},
        user_id: props.container.currentUser.id
      }
    }
    if (props.post.id) {
      props.post.update(content)
    } else {
      Post.create(data, post=> {props.container.actions.addPost(post); props.container.app.closePopup()})
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={e=> setContent(e.target.value)} name="content" value={content}/>
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