import React, { useState } from "react";
import "./Notes_area.css";

const Note_box_main = ({ className, text }) => {
    const [Notes, satNotes] = useState();
    const New_notes = () => {
        satNotes(Notes + 1);
    }

    return (<>
        <div className={className}>
            <div className="Notes_box">
                <input className="input_box" type="text" />

            </div>
        </div>
    </>);
};
export default Note_box_main;


// / const App = () => {
//     const State = useState();
//     const [count, satnumber] = useState(0);

//     const IncNum = () => {
//         satnumber(count + 1);
//         // console.log(count++);
//     }
//     const DecNum = () => {
//         if (count !== 0) {
//             satnumber(count - 1);
//         }
//         else {
//             alert("sorry bhai log")
//         }
//         // console.log(count++);
//     }

//     return (
//         <>
//             <h1>{count}</h1>
//             <button onClick={IncNum}>CKICK ME</button>
//             <button onClick={DecNum}>CKICK ME</button>

//         </>
//     );
// }
// export default App;