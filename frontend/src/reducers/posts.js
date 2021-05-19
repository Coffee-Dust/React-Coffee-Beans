export default function postsReducer(state = {all:[], status:{}}, action) {
  console.log(`postsReducer received ${action.type}`, action)
  switch (action.type) {
    case "ADD_POST":
      return {...state, all: [action.post, ...state.all]}
    case "FETCH_POSTS":
      return {...state, status: {...state.status, pendingFetch: true}}
    case "ADD_POSTS":
      return {...state, all: action.posts, status: {...state.status, pendingFetch: false}}

    default:
      return state
  }
}