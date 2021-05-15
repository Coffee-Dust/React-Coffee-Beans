export function addPost(post) {
  if (post.constructor.name === "Post") {
    return {
      type: "ADD_POST",
      post
    }
  } else {
    throw new Error(`InvalidItemAddedToStoreError: tried to add ${post} when it was not of type "Post"`)
  }
}