import { Box, Typography } from "@mui/material"
import illoi from "../gifs/illoi.gif"

const ContentLayout = (props) => {
    console.log(props);

    return (
        <Box sx={{
            border: 'solid brown ',
            color: '#fff',
            width: '100%',
            textAlign: 'center',

            marginTop: props.nth == 4 && '-140px',
            // zIndex: props.nth == 3 && '1',
            // background: props.nth == 3 && 'transparent',
            // border: props.nth == 4 && 'solid',
            // backgroundImage: props.nth == 0 && `url(${illoi})`,
            // height: props.nth == 0 && '100vh',
            backgroundImage: props.nth == 4 && `url(${illoi})`,
            // backgroundImage: `linear-gradient(to right, black,  black),url(${asdf})`,

            // backgroundBlendMode: props.nth == 4 && 'lighten',
            opacity: props.nth == 4 && '0.9',
            // backgroundColor: props.nth == 4 && 'rgba(180, 180, 180, 0.5)',
            // backgroundSize: "cover",
            backgroundSize: props.nth == 4 && 'cover',
            // boxShadow: '-8px 80px 80px 8px black inset',


            // zIndex: props.nth == 3 && '0',
            // zIndex: props.nth == 4 && '10',
            // background: props.nth == 3 && 'transparent',
            // backgroundColor: props.nth == 3 && 'red',
            // background: props.nth == 3 && 'transparent',
            // verticalAlign: 'center',
            // pt: '30vh',
            // margin: '0 auto',
            // ml: 'auto',
            // mr: 'auto',
        }}>

            {/* <Typography sx={{ fontSize: '20px', mb: '30px' }}><span style={{ color: '#19ebe0', }}>Why Buy Leage Of </span>Legends Account</Typography> */}

            {props.children}

        </Box>

    )
}
export default ContentLayout