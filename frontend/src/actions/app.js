export function displayPopup(contentArray=[], onClose=_=>{}) {
  return {
    type: "DISPLAY_POPUP",
    payload: {content: contentArray, onClose}
  }
}

export function closePopup() {
  return {
    type: "CLOSE_POPUP"
  }
}