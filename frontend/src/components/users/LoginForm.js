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
    <form onSubmit={handleSubmit}>
      <input type="text" name="email" onChange={handleChange} value={formData.email} />
      <input type="password" name="password" onChange={handleChange} />
      <input type="submit" />
    </form>
  )
}

export default connect(null)(LoginForm);