import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router';
import appReducer from "./app";
import postsReducer from "./posts";
import usersReducer from "./users";

export default (history)=> combineReducers({router: connectRouter(history), app: appReducer, users: usersReducer, posts: postsReducer})