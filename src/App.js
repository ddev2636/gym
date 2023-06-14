import React from "react";

import "./App.css";
import Homepage from "./pages/Homepage";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import BodyPartSpecific from "./pages/BodyPartSpecific";
import Exercise from "./pages/Exercise";

const theme = createTheme({
  palette: {
    primary: {
      main: "#070A52", // Replace with your desired primary color
      alternate: "#D21312",
    },
    secondary: {
      main: "#ED2B2A",
      alternate: "#F15A59",
      alt: "#FFC26F",
    },
  },
});

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          {/* <ResponsiveNavbar /> */}
          <ThemeProvider theme={theme}>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/:bodyPart" element={<BodyPartSpecific />} />
              <Route path="exercises/:exerciseId" element={<Exercise />} />
            </Routes>
          </ThemeProvider>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
