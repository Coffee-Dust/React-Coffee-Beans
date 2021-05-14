import { useStore } from "react-redux"

export function isLoggedIn() {
  return !!currentUser()
}

export function currentUser() {
  return useStore().getState().users.currentUser
}