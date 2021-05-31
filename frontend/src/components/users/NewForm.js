import {useState} from 'react';
import { connect } from 'react-redux';
import { closePopup } from '../../actions/app';
import { createUser } from '../../actions/users';

function NewUser(props) {

  const [formData, setFormData] = useState({name:"", email:"", password: "", password_confirmation: ""});

  function handleSubmit(event) {
    event.preventDefault()
    // Check for missing data & matching password:
    if (Object.values(formData).every(v => v !== "") && formData.password === formData.password_confirmation) {
      props.dispatch(createUser({user: formData}))
      props.dispatch(closePopup())
    }
  }

  function handleChange(event) {
    setFormData({...formData, [event.target.name]: event.target.value})
  }
  const passwordsMatch = (formData.password === formData.password_confirmation) ? "Passwords match! You good to go." : "No. Passwords don't match!"

  return (
    <fieldset>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input type="text" name="name" value={formData.name} onChange={handleChange}/>
        <label>Email: </label>
        <input type="text" name="email" value={formData.email} onChange={handleChange}/>
        <label>Password: </label>
        <input type="password" name="password" onChange={handleChange}/>
        <label>Confirm Password: </label>
        <span>{(formData.password) ? passwordsMatch : ""}</span>
        <input type="password" name="password_confirmation" onChange={handleChange}/>
        <input type="submit" />
      </form>
    </fieldset>
  );
}

export default connect(null)(NewUser);
