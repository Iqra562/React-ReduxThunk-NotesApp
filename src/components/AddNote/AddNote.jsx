import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../../config/firebaseConfig";
 import { collection, addDoc } from "firebase/firestore";
import CustomSpinner from "../CustomSpinner/CustomSpinner";
import { addThunkMethod, updateThunkMethod } from "../../redux/notesThunk";
function AddNote() {
  const {loading:loader,isEditNoteAvailable} = useSelector((state)=>state?.notes)
const [inputFields , setInputFields]  =useState({
  title:"",
  content:"",
})
const dispatch= useDispatch();
const onEveryInputChange = (event)=>{
event.preventDefault();
const currentElement = event.target;
setInputFields((previousValue)=>({
 ...previousValue,
  [currentElement.name]:currentElement.value,
}))
}
const addNoteSubmitHandler = (event)=>{
event.preventDefault();
const {title,content } = inputFields;
if(!title || !content){
alert("input fields are empty");
return;
}
 const payload= {
title,
content,
favourite:false,
}
if(isEditMode){
const editPayload = {
  ...payload,
  favorite: isEditNoteAvailable?.favourite,
  id: isEditNoteAvailable?.id,
}
dispatch(updateThunkMethod(editPayload))
}else{

  dispatch(addThunkMethod(payload))
}
setInputFields({
  title: "",
  content: "",
});
}
const isEditMode = Boolean(isEditNoteAvailable);
useEffect(()=>{
if(isEditNoteAvailable?.title || isEditNoteAvailable?.content){
setInputFields({
  ...inputFields,
  title:isEditNoteAvailable.title,
  content:isEditNoteAvailable.content
})


}
},[isEditNoteAvailable])

  return (
    <div className="section form-container">
      <CustomSpinner loading = {loader}/>
      <form className="white" onSubmit={addNoteSubmitHandler}>
        <h5 className="grey-text text-darken-3">New Note</h5>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="note_title"
              type="text"
              className="validate"
              name="title"
              onChange={onEveryInputChange}
              value={inputFields.title}
            />
            <label className="active">Title</label>
          </div>

        <div className="input-field col s12">
          <textarea
            id="note_content"
            className="materialize-textarea"
            name="content"
            onChange={onEveryInputChange}
            value={inputFields.content}
            ></textarea>
          <label>Content</label>
        </div>
        <button className="btn green" type="submit" >
          {isEditMode?"Update Note" :"Add Note"}
        </button>
            </div>
      </form>
    </div>
  );
}

export default AddNote;