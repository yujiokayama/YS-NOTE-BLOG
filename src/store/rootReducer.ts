import { combineReducers } from "@reduxjs/toolkit";
import postModule from "./modules/Post";

const rootReducer = combineReducers({
  Post: postModule.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
