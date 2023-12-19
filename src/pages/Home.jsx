import React from "react";
import AddNote from "../components/AddNote/AddNote";
import NoteListing from "../components/NoteListing/NoteListing";

function Home() {
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