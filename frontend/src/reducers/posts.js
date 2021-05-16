export default function postsReducer(state = {all:[], status:{}}, action) {
  console.log(`postsReducer received ${action.type}`, action)
  switch (action.type) {
    case "ADD_POST":
      return {...state, all: [...state.all, action.post]}
    case "FETCH_POSTS":
      return {...state, status: {...state.status, pendingFetch: true}}

    default:
      return state
  }
}