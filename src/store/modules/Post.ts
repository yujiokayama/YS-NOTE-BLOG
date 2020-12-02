import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import Post from "~/types/post";

type State = {
  posts: Post[] | null | undefined;
};

const initialState: State = {
  posts: [],
};

// export const fetchPost = createAsyncThunk(
//   "modules/fetchPost",
//   async (_args, _thunkApi) => {
//   }
// );

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
  extraReducers: (builder) => {
    // builder.addCase(fetchPost.fulfilled, (state, action) => {
    //   return {
    //     ...state,
    //     posts: action.payload,
    //   };
    // });
  },
});

export const { fetchPosts } = postModule.actions;

export default postModule;
