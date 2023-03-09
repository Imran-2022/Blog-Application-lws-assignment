import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRelatedVideos } from "./relatedVideosApi";

const initialState = {
    relatedVideos: [],
    isLoading: false,
    isError: false,
    error: '',
}

//async thunk

export const fetchrelatedVideos = createAsyncThunk('relatedVideos/fetchrelatedVideos', async ({tags,id}) => {
    const relatedVideos = await getRelatedVideos({tags,id});
    return relatedVideos;
})

const relatedVideosSlice = createSlice({
    name: "relatedVideos",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchrelatedVideos.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchrelatedVideos.fulfilled, (state, action) => {
                state.isLoading = false;
                state.relatedVideos = action.payload;
            })
            .addCase(fetchrelatedVideos.rejected, (state, action) => {
                state.isLoading = false;
                state.relatedVideos = [];
                state.isError = true;
                state.error = action.error.message;
            })
    }
})

export default relatedVideosSlice.reducer;