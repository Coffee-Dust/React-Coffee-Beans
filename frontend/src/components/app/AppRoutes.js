import { Route } from "react-router-dom";
import Posts from "../../containers/Posts";
import Users from "../../containers/Users";
import Paths from "../../helpers/path";

export default function AppRoutes(props) {
  return (
    <>
    <Route exact path={Paths.posts} component={Posts}/>
    <Route exact path={Paths.showPost({ id: ':id' })} component={Posts} />
    <Route exact path={Paths.profile} component={Users}/>
    </>
  )
}