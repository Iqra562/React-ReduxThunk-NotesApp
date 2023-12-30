import {createAsyncThunk} from "@reduxjs/toolkit";
import { db } from "../config/firebaseConfig";
import  {addDoc,collection, deleteDoc, getDocs,doc, query, updateDoc} from "firebase/firestore";
export const collectionName = "notes"
export const addThunkMethod = createAsyncThunk("addNotes", async (data)=>{
    try{
await addDoc(collection(db,collectionName),data)
    }catch(error){
 console.log(error);
    }
})
export const getThunkMethod  =createAsyncThunk("getNotes",async ()=>{
    try{
        let getNotes;
 await getDocs(collection(db,collectionName)).then((querySnapShotData)=>{
// console.log(querySnapShotData)
 getNotes= querySnapShotData.docs.map((singleData)=>{
    return{
        ...singleData.data(),
   id:singleData.id,
//    title:singleData.title

    }

})
})
return getNotes;
// console.log(getNotes)
    }
    catch(error){
       console.log(error)
    }
})
export const  deleteThunkMethod = createAsyncThunk("deleteNote",async(singleNote,parameter)=>{
    const {dispatch} = parameter;
  try{
    const deleteRefrence = await doc(db,collectionName,singleNote?.id);
    await deleteDoc(deleteRefrence)
    dispatch(getThunkMethod());
    
  }
  
  catch(error){
 console.log(error)
  }
})
export const  favoriteThunkMethod = createAsyncThunk("favoriteNote",async(singleNote,parameter)=>{
const {dispatch} = parameter
    try{
const documentREference  = await doc(db,collectionName,singleNote?.id);
await updateDoc(documentREference,  {
    ...singleNote,
    favourite: !singleNote?.favourite
})

      dispatch(getThunkMethod())  
    }catch(error)
    {
        console.log(error)

    }
})
export const  updateThunkMethod = createAsyncThunk("updateNotes",async(singleNote,parameter)=>{
    const {dispatch} = parameter
        try{
    const documentREference  = await doc(db,collectionName,singleNote?.id);
    await updateDoc(documentREference,singleNote)
    
          dispatch(getThunkMethod())  
        }catch(error)
        {
            console.log(error)
    
        }
    })