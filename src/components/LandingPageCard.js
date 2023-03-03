import { Box } from "@mui/system";
import HeroContent from "../pages/HeroPage";
// import asdf from "./gifs/illoi.gif"
import VideoHero from "../videos/VideoHero";

const LandingPageCard = (props) => {
    // console.log(props.heighting);
    return (
        <Box sx={{



            // backgroundColor: '#242625',


            height: props.nth == 0 ? 'calc(100vh - 50px)' : 'auto',   // if props.heighting=0, then (is hero page and 100vh); else auto
            // height: !props.heighting && '100vh',

            // backgroundImage:'linear-gradient(to right, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73))',
            // backgroundPosition: 'center',

            // backgroundImage: `linear-gradient(to right, black,  black),url(${asdf})`,    //evi
            // backgroundImage: `url(${props.gifs})`,
            // backgroundSize: "cover",
            // backgroundBlendMode: 'lighten',
            // boxShadow: 'inset 0px 70px 8px -10px #000,inset 0px -70px 8px -10px #000; ', //for wybylgue
            // boxShadow: '-8px 80px 80px 8px black inset', //for upperonly
            // boxShadow: '0 0 80px 80px black inset', //overall

            backgroundColor: '#000',
            // backgroundColor: '#242625',
            // opacity: '0.4'
            // innerWidth:'90vw',
            // width:'99vw',
            // border: 'solid brown',

            display: 'grid',
            alignItems: 'center',
            textAlign: 'center',
            color: '#fff',


        }}>

            {/* <VideoHero /> */}


            {props.children}
            <Box sx={{
                position: 'absolute',
                backgroundImage: `url(${props.gifs})`,
                backgroundSize: "cover",
                height: { xs: '90vh', sm: `${props.heighting}vh` },
                // height: `${props.heighting}vh`,
                width: '100vw',
                marginBottom: { xs: '50px', sm: `${props.marginBotting}px` },
                // marginBottom: `${props.marginBotting}px`,

                boxShadow: `${props.boxShadowing}`,

                opacity: '0.6',
            }}>
            </Box>
        </Box >
    )
}
export default LandingPageCard;