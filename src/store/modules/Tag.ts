import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

type State = {
  tags: string[] | null;
};

const initialState: State = {
  tags: null,
};

const tagModule = createSlice({
  name: "tag",
  initialState,
  reducers: {
    fetchTags: (state, action: PayloadAction<string[]>) => {
      return {
        ...state,
        tags: action.payload,
      };
    },
  },
  extraReducers: (builder) => {},
});

export const { fetchTags } = tagModule.actions;

export default tagModule;
