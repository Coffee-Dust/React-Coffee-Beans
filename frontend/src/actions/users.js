import AjaxCall from "../helpers/ajax"


export function createUser(formData) {
  console.log("this return got called with ", formData);
  return dispatch => {
    console.log("this return got called");
    new AjaxCall("/users").postData(formData)
    .then(user=> {
      if (user.id) {
        dispatch({type: "ADD_CURRENT_USER", user})
      } else {
        alert("Something went wrong. Please try again.")
      }
    })
  }
}