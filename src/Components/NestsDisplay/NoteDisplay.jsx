import React from "react";
import NoteBox from "../../Comman/Notes_box/Notes_area";

const NoteDisplay = () => {
  return (
    <>
      <div className="Note_container">
        <h1
          style={{
            marginBottom: "1rem",
          }}
        >
          Notes
        </h1>
        <div className="Note_boxs">
          <NoteBox />
        </div>
      </div>
    </>
  );
};

export default NoteDisplay;
