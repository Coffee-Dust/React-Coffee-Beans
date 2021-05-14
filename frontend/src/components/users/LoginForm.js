import { useState } from "react";

function LoginForm(props) {
  const [formData, setFormData] = useState({email: "", password: ""});

  const handleChange = event=> {
    setFormData({...formData, [event.target.name]: event.target.value})
  }
  const handleSubmit = event=> {
    event.preventDefault()
    props.loginUser({user: formData})
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
export default LoginForm