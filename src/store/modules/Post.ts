import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import Post from "~/types/post";

type State = {
  posts: Post[];
};

const initialState: State = {
  posts: [],
};

// export const fetchPost = createAsyncThunk(
//   'modules/fetchAPI',
//   async (arg, thunk) => {
//     const res = await fetch('http://localhost:3004/members');
//     if (res.ok) {
//       return await res.json();
//     }
//     throw new Error('fetch error');
//   }
// );

const postModule = createSlice({
  name: "post",
  initialState,
  reducers: {
    fetchPosts: (state, action: PayloadAction<Post[]>) => {
      return {
        ...state,
        posts: action.payload
      };
    },
  },
  extraReducers: (builder) => {
    // builder.addCase(fetchPost.fulfilled, (state, action) => {
    //   return {
    //     ...state,
    //     list: action.payload
    //   };
    // });
  },
});

export const { fetchPosts } = postModule.actions;

export default postModule;
