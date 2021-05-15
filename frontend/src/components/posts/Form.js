import { useState } from "react"

function PostsForm(props) {
  
  const [postData, setPostData] = useState({content: props.post.content || ""});

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