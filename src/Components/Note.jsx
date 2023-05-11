import React, { useState } from "react";
import "./Note.css";
import AddIcon from '@mui/icons-material/Add';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Note_box_main from "../Comman/Notes_box/Notes_area";


const Note_main = (Notess) => {
    // const [current, satcurrent] = useState();
    const [Notes, satNotes] = useState([]);

    const Add_notes = () => {
        console.log("clicked")
    }

    return (
        <>
            <div className="Note">
                <div className="Note_left">
                    <div className="Note_left_top_title">
                        <h1>Docket</h1>
                    </div>
                    <div className="Note_left_mid_title" onClick={Add_notes}>
                        <AddIcon />
                    </div>
                </div>
                <div className="Note_mid_border" />

                <div className="Note_Right">
                    <div className="Note_Right_top_item">

                        <div className="Note_Right_top_search_bar">
                            <div className="Note_Right_top_search_bar_left">
                                <SearchOutlinedIcon className="plus_icon" />
                            </div>
                            <div className="Note_Right_top_search_bar_right">
                                <input type="text" placeholder="Search" />
                            </div>
                        </div>
                        <div className="Note_Right_mid_hadding">
                            Notes
                        </div>
                    </div>
                    <div className="Notes_Box">
                        <div className="Notes_Box_1">
                            <Note_box_main  className="box_1"/>
                        </div>
                        <div className="Notes_Box_2">
                            <Note_box_main className="box_2" />
                        </div>
                        <div className="Notes_Box_3">
                            <Note_box_main className="box_3" />
                        </div>
                        <div className="Notes_Box_4">
                            <Note_box_main className="box_4" />
                        </div>
                        <div className="Notes_Box_5">
                            <Note_box_main className="box_5" />
                        </div>
                        <div className="Notes_Box_6">
                            <Note_box_main className="box_6" />
                        </div>
                    </div>



                </div>
            </div>
        </>
    );
}
export default Note_main;