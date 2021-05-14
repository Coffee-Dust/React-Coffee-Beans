import { NavLink } from "react-router-dom";
import Paths from "../helpers/path";

export default function Navbar(props) {
  return (
    <div className="App-navbar">
      <NavLink to={Paths.profile}>Profile</NavLink>
    </div>
  )
}