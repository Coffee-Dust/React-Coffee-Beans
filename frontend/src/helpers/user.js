import { store } from ".."

export function isLoggedIn() {
  return !!currentUser()
}

export function currentUser() {
  return store.getState().users.currentUser
}
