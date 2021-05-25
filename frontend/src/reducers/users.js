export default function usersReducer(state=false, action) {
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