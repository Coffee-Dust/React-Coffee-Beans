import { store } from ".."
import { addCurrentUser } from "../actions/users"
import AjaxCall from "./ajax"

export function isLoggedIn() {
  return !!getCurrentUser()
}

export function getCurrentUser() {
  return store.getState().users.currentUser
}

export function checkForUserSession() {
  new AjaxCall("sessions").getData().then(user=> {
    store.dispatch(addCurrentUser(user))
  })
}