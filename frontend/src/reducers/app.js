export default function appReducer(state = {currentPopup: false}, action) {
  console.log(`appReducer received ${action.type}`, action)
  switch (action.type) {
    case "DISPLAY_POPUP":
      return { ...state, currentPopup: {content: action.payload.content, onClose: action.payload.onClose} }
    case "CLOSE_POPUP":
      return {...state, currentPopup: false}
    default:
      return state
  }
}