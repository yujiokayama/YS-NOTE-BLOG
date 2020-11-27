import { combineReducers } from "@reduxjs/toolkit";
import counterModule from "./modules/Counter";
import postModule from "./modules/Post";
import tagModule from "./modules/Tag";

const rootReducer = combineReducers({
  Post: postModule.reducer,
  Counter: counterModule.reducer,
  Tag: tagModule.reducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
