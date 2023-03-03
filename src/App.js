
import LandingPageCard from "./components/LandingPageCard";
// import asdf from "./gifs/landingPage2W.jpg"
import Navbar from "./components/Navbar";
import { CssBaseline, Typography } from "@mui/material";
import illoi from "./gifs/illoi.gif"
import thresh from "./gifs/thresh.gif"
import pykeG from "./gifs/pykeG.gif"
import mordekaiser from "./gifs/mordekaiser.gif"
// import LoLN from "./gifs/LoLN.gif"
import jhin from "./gifs/jhin.gif"
import ContentLayout from "./components/ContentLayout";

import HeroPage from "./pages/HeroPage"
import ChoseAccPage from "./pages/ChoseAccPage"
import WhyBuyPage from "./pages/WhyBuyPage"
import AboutUsPage from "./pages/AboutUsPage"
import SubscribeNowPage from "./pages/SubscribeNowPage"
import WhyBuyUsPage from "./pages/WhyBuyUsPage"

import styled from "@emotion/styled";
import "./glitching.css"
import Footer from "./components/Footer";

import AddingShadow from "./components/AddingShadow";



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

  const contentsInBlue = ['Choose your ', 'Why You Should', 'Why Buy Leauge ', 'What People Say', 'Subscribe']
  const contentsInWhite = ['Account', ' Buy From Us', 'Of Legends Account', 'About Us', 'Now']
  // const contentsInBlue = ['Choose your ', 'Why You Should', 'What People Say', 'Subscribe']
  // const contentsInWhite = ['Account', ' Buy From Us', 'About Us', 'Now']

  // const gifs = [`${jhin}`]



  const comps = [
    <HeroPage p1={contentsInBlue[0]} p2={contentsInWhite[0]} />,
    <ChoseAccPage p1={contentsInBlue[0]} p2={contentsInWhite[0]} />,
    <WhyBuyUsPage p1={contentsInBlue[1]} p2={contentsInWhite[1]} />,
    <WhyBuyPage p1={contentsInBlue[2]} p2={contentsInWhite[2]} />,
    <AboutUsPage p1={contentsInBlue[3]} p2={contentsInWhite[3]} />,
    <SubscribeNowPage p1={contentsInBlue[4]} p2={contentsInWhite[4]} />,]

  const gifs = [`${thresh}`, '', `${mordekaiser}`, '', '', `${jhin}`]
  const heighting = [100, , 100, , , 140]
  const marginBotting = [, , , , , 200]
  const boxShadowing = [
    ' 4px 2px -2px gray',
    ,
    '0 0 80px 80px black inset',
    ,
    ,
    '-8px 80px 80px 8px black inset'
  ]

  return (
    <div style={styling}>
      <CssBaseline />

      <Navbar />

      <div style={{ background: 'blue', height: '50px' }}></div>   {/* because of the fixed position of navbar not taking height 50px */}


      {/* <AddingShadow /> */}

      {
        comps.map((d, k) => {
          // console.log(k);
          return (
            <>
              <LandingPageCard nth={k} gifs={gifs[k]} heighting={heighting[k]} marginBotting={marginBotting[k]} boxShadowing={boxShadowing[k]} >  {/* nth==0 for Hero Page for height 100vh*/}
                {comps[k]}
              </LandingPageCard>
            </>
          )
        })
      }
      <Footer />
    </div >
  );
}

export default App;
