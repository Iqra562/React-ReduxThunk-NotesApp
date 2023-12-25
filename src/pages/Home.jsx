import React, { useEffect } from "react";
import AddNote from "../components/AddNote/AddNote";
import NoteListing from "../components/NoteListing/NoteListing";
import { useDispatch, useSelector } from "react-redux";
import { getThunkMethod } from "../redux/notesThunk";

function Home() {
  const dispatch  =useDispatch();
  // const notes= useSelector(state=>state);
  // console.log(notes)

  useEffect(()=>{
   dispatch(getThunkMethod());
  },[])
  return (
    <div className="container">
      <div className="row center-align">
        <div className="col s7">
          <AddNote />
        </div>
        <div className="col s5">
          <NoteListing />
        </div>
      </div>
    </div>
  );
}

export default Home;