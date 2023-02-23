
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

import PageBreaker from "./components/PageBreaker"

function App() {
  const styling = {
    // backgroundImage: `url(${asdf})`,
    // backgroundSize: "cover",
    height: '2000px',

  }

  const contentsInBlue = ['Choose your ', 'Why You Should', 'Why Buy Leauge ', 'What People Say', 'Subscribe']
  const contentsInWhite = ['Account', ' Buy From Us', 'Of Legends Account', 'About Us', 'Now']
  // const contentsInBlue = ['Choose your ', 'Why You Should', 'What People Say', 'Subscribe']
  // const contentsInWhite = ['Account', ' Buy From Us', 'About Us', 'Now']

  // const gifs = [`${jhin}`]
  const gifs = [`${jhin}`, `${mordekaiser}`, `${pykeG}`, `${thresh}`]

  const TypographyHeading = styled(Typography)({
    fontSize: '22px',
    padding: '15px',

    // border:'solid white',
  })

  const comps = [
    <ChoseAccPage />,
    <WhyBuyUsPage />,
    <WhyBuyPage />,
    <AboutUsPage />,
    <SubscribeNowPage />,]

  return (
    <div style={styling}>
      <CssBaseline />

      <Navbar />

      <div style={{ background: 'blue', height: '50px' }}></div> {/* because of the fixed position of navbar not taking height 50px */}

      <LandingPageCard gifs={illoi} heighting={true}>
        <ContentLayout>
          <Typography sx={{ fontSize: '20px' }}><span style={{ color: '#19ebe0', }}>Buy </span>A Leage of</Typography>
          <Typography sx={{ color: '#19ebe0', fontSize: '20px' }}>Legends Account</Typography>
          <HeroPage />
        </ContentLayout>
      </LandingPageCard>

      <PageBreaker />

      {
        comps.map((d, k) => {
          console.log(k);
          return (
            <>
              <LandingPageCard gifs={k == 1 && mordekaiser} >
                <ContentLayout >
                  {k !== 3 ?
                    <TypographyHeading>
                      <span style={{ color: '#19ebe0', }}>{contentsInBlue[k]} </span>{contentsInWhite[k]}
                    </TypographyHeading>
                    :
                    <TypographyHeading>
                    </TypographyHeading>
                  }
                  {comps[k]}
                </ContentLayout>
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
