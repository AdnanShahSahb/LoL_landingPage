import { Box } from "@mui/system";

const LandingPageCard = (props) => {
    return (
        <Box id='mainSection' sx={{
            height: props.nth === 0 ? 'calc(100vh - 50px)' : 'auto',   // if props.heighting=0, then (is hero page and 100vh); else auto
            backgroundColor: '#000',
            display: 'grid',
            alignItems: 'center',
            textAlign: 'center',
            color: '#fff',
        }}>

            {props.children}

            <Box sx={{
                position: 'absolute',
                backgroundImage: `url(${props.gifs})`,
                backgroundSize: "cover",
                backgroundPosition: `${props.imgPosforMbl}`,
                height: { xs: `${props.heightingForMbl}vh`, sm: `${props.heighting}vh` },
                width: '100vw',
                marginBottom: { xs: '50px', sm: `${props.marginBotting}px` },
                boxShadow: `${props.boxShadowing}`,
                opacity: '0.6',
            }}>
            </Box>
        </Box >
    )
}
export default LandingPageCard;