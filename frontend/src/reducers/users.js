export default function usersReducer(state=false, action) {
  switch (action.type) {
    case "PENDING_USER_FETCH":
      return {
        ...state,
        pendingFetch: true
      }
    case "ADD_CURRENT_USER":
      return {
        ...state,
        pendingFetch: false,
        currentUser: action.user
      }
    default:
      return state
  }
}