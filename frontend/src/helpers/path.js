const Paths = {
  posts: "/beans",
  
  profile: "/profile",

  reactions: "/reactions",

  showUser: (user)=> `/users/${user.id}`,

  userPosts: (user)=> `/users/${user.id}/beans`,

  showPost: (post)=> `/beans/${post.id}`,

  showPostComments: (post)=> `/beans/${post.id}/comments`

}

export default Paths