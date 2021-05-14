import AjaxCall from "../helpers/ajax"


export function createUser(formData) {
  console.log("this return got called with ", formData);
  return dispatch => {
    console.log("this return got called");
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
  return {type: "ADD_CURRENT_USER", user: userData}
}