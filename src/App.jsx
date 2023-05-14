import React from "react";
import "./App.css";
import SideBar from "./Components/SideBar/SideBar";
import SearchBar from "./Components/Seraching/Search";
import NoteDisplay from "./Components/NestsDisplay/NoteDisplay";


const App = () => {
  return (
    <>
      <div className="Notes_main">
        <div className="Notes_left_side">
          <SideBar />
        </div>
        <div className="Notes_Right_side">
          <div className="Notes_Right_top">
            <div className="Notes_Right_top_top">
              <SearchBar />
            </div>
            <NoteDisplay />
          </div>

        </div>
      </div>
    </>
  );
};
export default App;










// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';

// const darkTheme = createTheme({
//   palette: {
//     mode: 'dark',
//   },
// });

// function App() {
//   return (
//     <ThemeProvider theme={darkTheme}>
//       <CssBaseline />
//       <main>This app is using the dark mode</main>
//       {/* <main style={{color:black}}>This app is using the dark mode</main> */}
//     </ThemeProvider>
//   );
// }

// export default App;