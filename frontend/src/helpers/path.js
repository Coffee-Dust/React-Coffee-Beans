const Paths = {
  posts: "/beans",
  
  profile: "/profile",

  reactions: "/reactions",

  showUser: (user)=> `/users/${user.id}`,

  showPost: (post)=> `/beans/${post.id}`

}

export default Paths