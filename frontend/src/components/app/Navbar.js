import { NavLink } from "react-router-dom";
import Paths from "../../helpers/path";

export default function Navbar(props) {
  return (
    <div className="App-navbar">
      <NavLink to="/" className="App-logo"><span>Coffee-Beans</span></NavLink>
      <NavLink to={Paths.posts}>Bean-Feed</NavLink>
      <NavLink to={Paths.profile}>Profile</NavLink>
    </div>
  )
}