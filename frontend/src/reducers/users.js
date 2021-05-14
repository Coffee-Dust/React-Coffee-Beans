export default function usersReducer(state=false, action) {
  console.log(`usersReducer received ${action.type}`, action)
  switch (action.type) {
    case "ADD_CURRENT_USER":
      return {
        ...state,
        currentUser: action.user
      }
    default:
      return state
  }
}