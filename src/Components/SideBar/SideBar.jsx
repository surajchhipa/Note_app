import React, { useState } from "react";
import "./SideBar.css";
import AddIcon from "@mui/icons-material/Add";
import InputModal from "../Modal/Indax";
import { ReactDOM, createPortal } from "react-dom";

const SideBar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const addNote = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <div className="Note_left">
        <div className="Note_left_top_title">
          <p>Docket</p>
        </div>
        <div className="Note_left_mid_title" onClick={addNote}>
          <AddIcon
            style={{ width: "2.5rem", height: "2.5rem", cursor: "pointer" }}
          />
        </div>
        {modalOpen &&
          createPortal(
            <>
              <InputModal onClick={addNote} />
            </>,
            document.querySelector(".modal")
          )}
      </div>
    </>
  );
};
export default SideBar;
