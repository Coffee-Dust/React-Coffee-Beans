import { useState } from "react";

function LoginForm() {
  const [formData, setFormData] = useState({email: "", password: ""});

  const handleChange = event=> {
    setFormData({...formData, [event.target.name]: event.target.value})
  }
  const handleSubmit = event=> {

  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} value={formData.email} />
      <input type="password" onChange={handleChange} />
    </form>
  )
}
