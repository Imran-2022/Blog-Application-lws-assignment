import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status:'all',
    sort: 'default',
}

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers:{
        statusSelected:(state,action)=>{
            state.status=action.payload;
        },
        sortSelected:(state,action)=>{
            state.sort=action.payload;
        },
    }
})

export default filterSlice.reducer;
export const {statusSelected,sortSelected}=filterSlice.actions