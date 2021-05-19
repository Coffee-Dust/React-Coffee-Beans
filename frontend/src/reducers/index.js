import { combineReducers } from "redux";
import appReducer from "./app";
import postsReducer from "./posts";
import usersReducer from "./users";

export default combineReducers({app: appReducer, users: usersReducer, posts: postsReducer})