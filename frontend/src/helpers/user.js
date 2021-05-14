import { store } from ".."

export function isLoggedIn() {
  return !!getCurrentUser()
}

export function getCurrentUser() {
  return store.getState().users.currentUser
}
