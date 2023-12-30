import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CustomSpinner from "../CustomSpinner/CustomSpinner";
import { deleteThunkMethod,favoriteThunkMethod } from "../../redux/notesThunk";
import {saveNoteforUpdate} from "../../redux/noteSlice";

function NoteListing() {
const dispatch = useDispatch();
  const {loading,notes}= useSelector(select=> select.notes);
  const [isShowFavoriteNote,setIsShowFavoriteNote] = useState(false);
  // console.log(notes)
  const deleteNoteHandler = (event,singleData)=>{
   event.preventDefault();
   if(window.confirm("Are you surre???")){

     dispatch(deleteThunkMethod(singleData))
   }
  }
  const favoriteNoteHandler = (event,singleData)=>{
      event.preventDefault();
      dispatch(favoriteThunkMethod(singleData))
  }
  const showFavoriteNotes = (event)=>{
event.preventDefault();
console.log(event.target.checked)
setIsShowFavoriteNote(event.target.checked);
  }
  const  getNotes = isShowFavoriteNote ? notes?.filter((singleNote)=>Boolean(singleNote?.favourite)) : notes;
  const onEditNote = (event,singleData)=>{
event.preventDefault();
dispatch(saveNoteforUpdate(singleData))
  }
  
  return (
    <div className="notesList">
      <div class="switch left-align">
        <label style={{ fontSize: "20px" }}>
          <input
            type="checkbox"
            onChange={(event) => showFavoriteNotes(event)}
          />
          <span class="lever"></span>
          Show Favorite Notes
        </label>
      </div>
      <CustomSpinner loading ={loading}/>
      {getNotes?.length>0 && getNotes?.map((singleData)=>{
        const heartIcon = singleData?.favourite ? "favorite":"favorite_border"
return(
  <div className="note  white">
  <div className="right-align">
    <i className="material-icons red-text" style={{ cursor: "pointer" }} onClick={(event)=>favoriteNoteHandler(event,singleData)}>
      {heartIcon}
    </i>
    <i  className="material-icons" style={{ cursor: "pointer" }} onClick={(event)=> deleteNoteHandler(event,singleData)}>
      delete
    </i>
  </div>
  <Link to="">
    <h5 className="black-text"> {singleData.title}</h5>
  </Link>
  <p className="truncate">{singleData.content}</p>
  <div className="right-align">
    <Link to="">
      <i
        className="material-icons black-text"
        style={{ cursor: "pointer" }}
        onClick={(event)=>onEditNote(event,singleData)}
      >
        edit
      </i>
    </Link>
  </div>
</div>
)
      }       
      )}
     
    </div>
  );
}

export default NoteListing;