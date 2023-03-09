import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPost } from "./singlePostAPI";


const initialState = {
    singlePost: {},
    isLoading: false,
    isError: false,
    error: '',
}

//async thunk

export const fetchPost = createAsyncThunk('video/fetchvideo', async (id) => {
    const video = await getPost(id);
    return video;
})

const singlePostSlice = createSlice({
    name: "singlePost",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchPost.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchPost.fulfilled, (state, action) => {
                state.isLoading = false;
                state.singlePost = action.payload;
            })
            .addCase(fetchPost.rejected, (state, action) => {
                state.isLoading = false;
                state.singlePost = {};
                state.isError = true;
                state.error = action.error.message;
            })
    }
})

export default singlePostSlice.reducer;
