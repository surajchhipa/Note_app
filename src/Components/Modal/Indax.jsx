import React, { useState } from "react";
import "./Indax.css";
import "./IndaxMd.css";

// ----------------------MUI imported---------------------------*m
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatListNumberedOutlinedIcon from "@mui/icons-material/FormatListNumberedOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import FormatAlignJustifyOutlinedIcon from "@mui/icons-material/FormatAlignJustifyOutlined";
import FormatAlignCenterOutlinedIcon from "@mui/icons-material/FormatAlignCenterOutlined";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import SaveIcon from "@mui/icons-material/Save";
import SendIcon from "@mui/icons-material/Send";
const InputModal = ({ onClick }) => {
  // /-----------------------try it ----------------------
  const [bold, setBold] = useState("");
  const textBold = () => {};
  return (
    <>
      <div onClick={onClick} className="modalOuterDiv">
        <div className="input_Box">
          <div className="input_Box_Container">
            <div className="input_Box_Top">
              <div className="input_Box_Top_first">
                <div className="input_Box_Top_Left_Row_First_item">
                  <div className="Item_Bold AllItem" onclick={textBold}>
                    <FormatBoldIcon />
                  </div>
                  <div className="Item_Italic AllItem">
                    <FormatItalicIcon />
                  </div>
                </div>
                <div className="input_Box_Top_Left_Row_Three_item">
                  <div className="Item_Order_list AllItem">
                    <FormatListNumberedOutlinedIcon />
                  </div>
                  <div className="Item_Unoredr_list AllItem">
                    <FormatListBulletedOutlinedIcon />
                  </div>
                  <div className="Item_Text_Top AllItem">
                    <FormatAlignJustifyOutlinedIcon />
                  </div>
                  <div className="Item_Text_center AllItem">
                    <FormatAlignCenterOutlinedIcon />
                  </div>
                </div>
              </div>
              <div className="input_Box_Top_Second">
                <div className="Item_Cross" onClick={onclick}>
                  <CloseSharpIcon
                    style={{ height: "1.8rem", width: "1.8rem" }}
                  />
                </div>
              </div>
            </div>
            <div className="input_Box_Buttom">
              hello my name is suraj chhipa
            </div>
          </div>
          <div className="Input_button">
            <div className="Input_Btn1">
              Save
              <SaveIcon />
            </div>
            <div className="Input_Btn1">
              Send
              <SendIcon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InputModal;
