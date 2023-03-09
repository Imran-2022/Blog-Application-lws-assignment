import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRelatedPosts } from "./relatedPostsApi";

const initialState = {
    relatedPosts: [],
    isLoading: false,
    isError: false,
    error: '',
}

//async thunk

export const fetchrelatedPosts = createAsyncThunk('relatedPosts/fetchrelatedPosts', async ({tags,id}) => {
    const relatedPosts = await getRelatedPosts({tags,id});
    return relatedPosts;
})

const relatedPostsSlice = createSlice({
    name: "relatedPosts",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchrelatedPosts.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchrelatedPosts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.relatedPosts = action.payload;
            })
            .addCase(fetchrelatedPosts.rejected, (state, action) => {
                state.isLoading = false;
                state.relatedPosts = [];
                state.isError = true;
                state.error = action.error.message;
            })
    }
})

export default relatedPostsSlice.reducer;