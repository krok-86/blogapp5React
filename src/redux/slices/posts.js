import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deletePostById, getPosts } from "../../api/postApi";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const { data } = await getPosts();
  return data;
});

export const fetchRemovePost = createAsyncThunk("posts/fetchRemovePost", async (id) => {
  await deletePostById(id);  
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
    //get posts
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
    //remove post
    [fetchRemovePost.pending]: (state, action) => {      
      state.posts.items = state.posts.items.filter(obj => obj.id !== action.payload.id);
    },    
  },
});

export const postsReducer = postsSlice.reducer;
