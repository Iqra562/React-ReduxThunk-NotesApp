import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CustomSpinner from "../CustomSpinner/CustomSpinner";
import { deleteThunkMethod } from "../../redux/notesThunk";
import { favoriteThunkMethod } from "../../redux/notesThunk";

function NoteListing() {
const dispatch = useDispatch();
  const {notes,loading}= useSelector(select=> select.notes)
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
  return (
    <div className="notesList">
      <CustomSpinner loading ={loading}/>
      {notes?.length>0 && notes?.map((singleData)=>{
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