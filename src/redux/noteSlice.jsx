import { createSlice } from "@reduxjs/toolkit";
import { addThunkMethod } from "./notesThunk";
const initialState = {
    notes:[],
    loading: false,
}
export const noteSlice= createSlice({
    name:"notes",
    initialState,
    extraReducers:(builder)=>{
builder.addCase(addThunkMethod.pending,(state)=>{
    state.loading=true;
})
builder.addCase(addThunkMethod.fulfilled,(state)=>{state.loading =false})
builder.addCase(addThunkMethod.rejected,(state)=>{state.loading = false})
    }

})
export default noteSlice.reducer;