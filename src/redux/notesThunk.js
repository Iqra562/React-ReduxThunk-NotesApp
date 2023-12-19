import {createAsyncThunk} from "@reduxjs/toolkit";
import { db } from "../config/firebaseConfig";
import  {addDoc,collection} from "firebase/firestore";
export const collectionName = "notes"
export const addThunkMethod = createAsyncThunk("addNotes", async (data)=>{
    try{
await addDoc(collection(db,collectionName),data)
    }catch(error){
 console.log(error);
    }
})