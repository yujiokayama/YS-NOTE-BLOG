import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Post from "~/types/post";

type State = {
  posts: Post[] | null | undefined;
};

const initialState: State = {
  posts: [],
};

const postModule = createSlice({
  name: "post",
  initialState,
  reducers: {
    fetchPosts: (state, action: PayloadAction<Post[]>) => {
      return {
        ...state,
        posts: action.payload,
      };
    },
  },
});

export const { fetchPosts } = postModule.actions;

export default postModule;
