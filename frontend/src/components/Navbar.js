import { NavLink } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div className="App-navbar">
      <NavLink to="/profile">Profile</NavLink>
    </div>
  )
}