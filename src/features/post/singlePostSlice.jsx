import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPost } from "./singlePostAPI";


const initialState = {
    video: {},
    isLoading: false,
    isError: false,
    error: '',
}

//async thunk

export const fetchvideo = createAsyncThunk('video/fetchvideo', async (id) => {
    const video = await getPost(id);
    return video;
})

const videoSlice = createSlice({
    name: "video",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchvideo.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchvideo.fulfilled, (state, action) => {
                state.isLoading = false;
                state.video = action.payload;
            })
            .addCase(fetchvideo.rejected, (state, action) => {
                state.isLoading = false;
                state.video = {};
                state.isError = true;
                state.error = action.error.message;
            })
    }
})

export default videoSlice.reducer;
