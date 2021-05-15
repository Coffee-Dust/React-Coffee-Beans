export default function postsReducer(state = {all:[], status:{}}, action) {
  console.log(`postsReducer received ${action.type}`, action)
  switch (action.type) {

    default:
      return state
  }
}