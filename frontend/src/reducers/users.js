export default function usersReducer(state=false, action) {
  console.log(`usersReducer received ${action.type}`, action)
  switch (action.type) {
    default:
      return state
  }
}