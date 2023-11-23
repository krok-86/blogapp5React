import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deletePostById, getPosts, postPosts } from "../../api/postApi";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const { data } = await getPosts();
  return data;
});

export const fetchRemovePost = createAsyncThunk("posts/fetchRemovePost", async (id) => {
  await deletePostById(id);  
});

export const addPost = createAsyncThunk("posts/addPost", async (data) => {
  return await postPosts(data);
});

const initialState = {
  // posts: {
    posts: [],
    status: "loading",
  // },
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    //get posts
    [fetchPosts.pending]: (state) => {
      state.posts = [];
      state.status = "loading";
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.posts = action.payload;
      state.status = "loaded";
    },
    [fetchPosts.rejected]: (state) => {
      state.posts = [];
      state.status = "error";
    },
    //remove post
    [fetchRemovePost.fulfilled]: (state, action) => {      
      state.posts = state.posts.filter(obj => obj.id !== action.payload.id);
    },    
    //add post
    [addPost.fulfilled]: (state, action) => {
      state.posts = [...state.posts, action.payload.data];
      console.log(state.posts)
    },
  },
});

export const postsReducer = postsSlice.reducer;
