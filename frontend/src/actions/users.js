import AjaxCall from "../helpers/ajax"
import User from "../models/user"

export function createUser(formData) {
  return dispatch => {
    dispatch({type: "PENDING_USER_FETCH"})
    new AjaxCall("/users").postData(formData)
    .then(user=> {
      if (user.id) {
        dispatch(addCurrentUser(user))
      } else {
        alert("Something went wrong. Please try again.")
      }
    })
  }
}

export function loginUser(formData) {
  return dispatch=> {
    dispatch({type: "PENDING_USER_FETCH"})
    new AjaxCall("/sessions").postData(formData)
    .then(user=> {
      if (user.id) {
        dispatch(addCurrentUser(user))
      } else {
        alert(user.errors[0])
      }
    })
  }
}

export function addCurrentUser(userData) {
  let user = null
  if (userData.id) {
    user = new User(userData)
  } else {
    throw new Error("Invalid User object added to store")
  }
  return {type: "ADD_CURRENT_USER", user: user}
}