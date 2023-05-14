import React from "react";
import "./Search.css";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
const SearchBar = () => {
    return (
        <>
            <div className="Note_Right_top_search_bar">
                <div className="Note_Right_top_search_bar_left">
                    <SearchOutlinedIcon />
                </div>
                <div className="Note_Right_top_search_bar_right">
                    <input type="text" placeholder="Search" className="InputBox" />
                </div>
            </div>
        </>
    );

}
export default SearchBar;