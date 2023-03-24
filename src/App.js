
import Navbar from "./layout/Navbar";
import { CssBaseline, Link, Typography } from "@mui/material";

import styled from "@emotion/styled";
import Footer from "./layout/Footer";

import { useRef } from "react";
import Main from "./layout/Main";

import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';

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
      <div style={{ height: '50px' }}></div>   {/* because of the fixed position of navbar not taking height 50px */}
      <Link href='#accounts'>
        <ExpandCircleDownOutlinedIcon sx={{ color: '#19ebe0', fontSize: '50px', top: '85vh', right: '0px', left: '0px', marginLeft: 'auto', marginRight: 'auto', position: 'absolute', transition: '0.2s all', zIndex: 10, '&:hover': { cursor: 'pointer', color: '#fff' } }} />
      </Link>
      <Main />
      <Footer />
    </div >
  );
}

export default App;