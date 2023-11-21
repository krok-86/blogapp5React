import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPosts } from "../../api/postApi";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const { data } = await getPosts();
  return data;
});

const initialState = {
  posts: {
    items: [],
    status: "loading",
  },
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPosts.pending]: (state) => {
      state.posts.items = [];
      state.posts.status = "loading";
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.posts.items = action.payload;
      state.posts.status = "loaded";
    },
    [fetchPosts.rejected]: (state) => {
      state.posts.items = [];
      state.posts.status = "error";
    },
  },
});

export const postsReducer = postsSlice.reducer;
