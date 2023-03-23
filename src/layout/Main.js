import React from 'react'
import LandingPageCard from "./LandingPageCard";

import thresh from "../assets/background_imgs/thresh.gif"
import mordekaiser from "../assets/background_imgs/mordekaiser.gif"
import jhin from "../assets/background_imgs/jhin.gif"

import HeroPage from "../pages/HeroPage"
import ChoseAccPage from "../pages/ChoseAccPage"
import WhyBuyPage from "../pages/WhyBuyPage"
import AboutUsPage from "../pages/AboutUsPage"
import SubscribeNowPage from "../pages/SubscribeNowPage"
import WhyBuyUsPage from "../pages/WhyBuyUsPage"

const Main = (props) => {


    const contentsInBlue = ['Choose your ', 'Why You Should', 'Why Buy Leauge ', 'What People Say', 'Subscribe']
    const contentsInWhite = ['Account', ' Buy From Us', 'Of Legends Account', 'About Us', 'Now']
  
    
  const comps = [
    <HeroPage id={'home'} />,
    <ChoseAccPage id={'accounts'} p1={contentsInBlue[0]} p2={contentsInWhite[0]} />,
    <WhyBuyUsPage id={'whyUs'} p1={contentsInBlue[1]} p2={contentsInWhite[1]} />,
    <WhyBuyPage id={'whyLoL'} p1={contentsInBlue[2]} p2={contentsInWhite[2]} />,
    <AboutUsPage id={'aboutUs'} p1={contentsInBlue[3]} p2={contentsInWhite[3]} />,
    <SubscribeNowPage id={'subscribe'} p1={contentsInBlue[4]} p2={contentsInWhite[4]} />
  ]

  const gifs = [`${thresh}`, '', `${mordekaiser}`, '', '', `${jhin}`]
  const heighting = [100, , 100, , , 140]
  const heightingForMbl = [100, , 0, , , 80]
  const imgPosforMbl = ['center 50px', , , , , 'center 50px']
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
        <>

            {
                comps.map((d, k) => {
                    return (
                        <LandingPageCard imgPosforMbl={imgPosforMbl[k]} heightingForMbl={heightingForMbl[k]} key={k} nth={k} gifs={gifs[k]} heighting={heighting[k]} marginBotting={marginBotting[k]} boxShadowing={boxShadowing[k]} >  {/* nth==0 for Hero Page for height 100vh*/}
                            {comps[k]}
                        </LandingPageCard>
                    )
                })
            }
        </>
    )
}

export default Main