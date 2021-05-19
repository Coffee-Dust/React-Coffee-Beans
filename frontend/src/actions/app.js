export function displayPopup(contentArray=[]) {
  return {
    type: "DISPLAY_POPUP",
    payload: contentArray
  }
}

export function closePopup() {
  return {
    type: "CLOSE_POPUP"
  }
}