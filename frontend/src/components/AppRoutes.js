import { Route } from "react-router-dom";
import Users from "../containers/Users";

export default function AppRoutes(props) {
  return (
    <>
    <Route exact path="/profile" component={Users}/>
    </>
  )
}