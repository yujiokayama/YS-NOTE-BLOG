import { combineReducers } from "@reduxjs/toolkit";
import counterModule from "./modules/Counter";
import postModule from "./modules/Post";

const rootReducer = combineReducers({
  Post: postModule.reducer,
  Counter: counterModule.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
