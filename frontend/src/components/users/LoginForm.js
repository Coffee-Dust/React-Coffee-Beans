import { useState } from "react";
import { connect } from "react-redux";
import { closePopup } from "../../actions/app";
import { loginUser } from "../../actions/users";

function LoginForm(props) {
  const [formData, setFormData] = useState({email: "", password: ""});

  const handleChange = event=> {
    setFormData({...formData, [event.target.name]: event.target.value})
  }
  const handleSubmit = event=> {
    event.preventDefault()
    props.dispatch(loginUser({user: formData}))
    props.dispatch(closePopup())
    setFormData({ email: "", password: "" })
  }

  return (
    <fieldset>
      <form onSubmit={handleSubmit}>
        <label>Email: </label>
        <input type="text" name="email" onChange={handleChange} value={formData.email} />
        <label>Password: </label>
        <input type="password" name="password" onChange={handleChange} />
        <input type="submit" />
      </form>
    </fieldset>
  )
}

export default connect(null)(LoginForm);