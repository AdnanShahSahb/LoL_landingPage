import { Box } from "@mui/system";
import HeroContent from "../components/contents/HeroContent";
import asdf from "../gifs/illoi.gif"
import VideoHero from "../videos/VideoHero";

const Hero = (props) => {

    return (
        <Box sx={{
            // backgroundColor: '#242625',

            // height: `calc(100vh - 50px)`,
            height: props.heighting && 'calc(100vh - 50px)',

            // backgroundImage:'linear-gradient(to right, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73))',
            // backgroundPosition: 'center',

            // backgroundImage: `linear-gradient(to right, black,  black),url(${asdf})`,
            backgroundImage: `url(${props.gifs})`,
            backgroundSize: "cover",
            backgroundBlendMode: 'lighten',
            // boxShadow: 'inset 0px 70px 8px -10px #000,inset 0px -70px 8px -10px #000; ',
            // boxShadow: '-8px 80px 80px 8px black inset',
            boxShadow: '0 0 80px 80px black inset',

            backgroundColor: '#000',
            // backgroundColor: '#242625',
            // opacity: '0.4'

            display: 'grid',
            alignItems: 'center',

        }}>

            {/* <VideoHero /> */}


            {props.children}

        </Box >
    )
}
export default Hero;