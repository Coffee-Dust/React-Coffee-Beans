import { Route } from "react-router-dom";
import Posts from "../containers/Posts";
import Users from "../containers/Users";

export default function AppRoutes(props) {
  return (
    <>
    <Route path="/beans" component={Posts}/>
    <Route exact path="/profile" component={Users}/>
    </>
  )
}