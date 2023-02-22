import { Box, Typography } from "@mui/material"

const ContentLayout = (props) => {
    return (
        <Box sx={{
            // border: 'solid brown ',
            color: '#fff',
            width: '100%',
            textAlign: 'center',

            // verticalAlign: 'center',
            // pt: '30vh',
            m: '0 auto',
            // ml: 'auto',
            // mr: 'auto',
        }}>

            {/* <Typography sx={{ fontSize: '20px', mb: '30px' }}><span style={{ color: '#19ebe0', }}>Why Buy Leage Of </span>Legends Account</Typography> */}

            {props.children}

        </Box>

    )
}
export default ContentLayout