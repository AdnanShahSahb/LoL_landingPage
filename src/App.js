
import Navbar from "./layout/Navbar";
import { CssBaseline, Typography } from "@mui/material";

import styled from "@emotion/styled";
import Footer from "./layout/Footer";

import { useRef } from "react";
import Main from "./layout/Main";



export const TypographyHeading = styled(Typography)({
  fontSize: '32px',
  padding: '65px',
  // border: 'solid brown',
  fontWeight: 'bold',
  zIndex: '3',
  // border:'solid white',
})

function App() {


  const styling = {
    // backgroundImage: `url(${asdf})`,
    // backgroundSize: "cover",
    height: '2000px',
    width: '100vw',

  }




  return (
    <div style={styling}>
      <CssBaseline />
      <Navbar />
      <div style={{  height: '50px' }}></div>   {/* because of the fixed position of navbar not taking height 50px */}
      <Main />
      <Footer />
    </div >
  );
}

export default App;