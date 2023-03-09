import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPosts } from "./postsAPI";

const initialState = {
    posts: [],
    isLoading: false,
    isError: false,
    error: "",
};

// async thunk
export const fetchBlogs = createAsyncThunk("videos/fetchVideos", async () => {
    const posts = await getPosts();
    return posts;
});

const postSlice = createSlice({
    name: "posts",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchBlogs.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchBlogs.fulfilled, (state, action) => {
                state.isLoading = false;
                state.posts = action.payload;
            })
            .addCase(fetchBlogs.rejected, (state, action) => {
                state.isLoading = false;
                state.posts = [];
                state.isError = true;
                state.error = action.error?.message;
            });
    },
});

export default postSlice.reducer;
