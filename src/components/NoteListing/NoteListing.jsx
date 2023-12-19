import React from "react";
import { Link } from "react-router-dom";

function NoteListing() {
  return (
    <div className="notesList">
      <div className="note  white">
        <div className="right-align">
          <i className="material-icons red-text" style={{ cursor: "pointer" }}>
            favorite
          </i>
          <i className="material-icons" style={{ cursor: "pointer" }}>
            delete
          </i>
        </div>
        <Link to="">
          <h5 className="black-text"> Title</h5>
        </Link>
        <p className="truncate">Content</p>
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
    </div>
  );
}

export default NoteListing;