import { createSlice } from "@reduxjs/toolkit";
import { addThunkMethod, favoriteThunkMethod, getThunkMethod,updateThunkMethod } from "./notesThunk";
const initialState = {
    notes:[],
    loading: false,
    isEditNoteAvailable :null,
}

export const noteSlice= createSlice({
    name:"notes",
    initialState,
    reducers:{
  saveNoteforUpdate : (state,action)=>{
state.isEditNoteAvailable  = action.payload;
// console.log(action.payload)

    },
},
    extraReducers:(builder)=>{
        
builder.addCase(addThunkMethod.pending,(state)=>{
    state.loading=true;
})
builder.addCase(addThunkMethod.fulfilled,(state)=>{state.loading =false})
builder.addCase(addThunkMethod.rejected,(state)=>{state.loading = false})

builder.addCase(getThunkMethod.pending,(state)=>{
    state.loading=true;
})
builder.addCase(getThunkMethod.fulfilled,(state,action)=>{

    state.loading =false;
    state.notes =action.payload
    // console.log(payload)
})
builder.addCase(getThunkMethod.rejected,(state)=>{state.loading = false})
// builder.addCase(favoriteThunkMethod.pending,(state)=>{
//     state.loading=true;
// })
// builder.addCase(favoriteThunkMethod.fulfilled,(state)=>{

//     state.loading =false;
  
// })
// builder.addCase(favoriteThunkMethod.rejected,(state)=>{state.loading = false})
.addCase(updateThunkMethod.pending, (state) => {
    state.loading = true;
  })
  .addCase(updateThunkMethod.fulfilled, (state, ) => {
    state.loading = false;
    state.isEditNoteAvailable = null;
  })
  .addCase(updateThunkMethod.rejected, (state) => {
    state.loading = false;
    state.isEditNoteAvailable = null;
  });
}

})
export const {saveNoteforUpdate} = noteSlice.actions
export default noteSlice.reducer;