
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import CloseIcon from '@mui/icons-material/Close';

const Sidebar = (props) => {

    return (
        <Box sx={{
            // display: { xs: 'block', sm: 'none' },
            // display: { sm: 'none' },
            backgroundColor: 'red',
            position: 'absolute',
            height: '100vh',
            width: '75vw',
            right: props.sidebarO ? '0vw' : '-100vw',
            // right:'-100vw',
            transition: '0.5s',
            opacity: '0.7',
            zIndex: '1',

        }}>

            <Box
                // alignItems="center"
                sx={{
                    // border: 'solid',
                    height: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',

                }}>
                <Typography sx={{
                    position: 'absolute',
                    right: '0px',
                    top: '0px',
                    padding: '10px',
                    // backgroundColor:'black'
                    // zIndex: '20000'
                    '&:hover':{cursor:'pointer'}
                }}>
                    <CloseIcon onClick={() => { props.setSidebarO(false) }} />
                </Typography>
                <Typography sx={{ border: 'solid', padding: '10px' }}>
                    home
                </Typography>
                <Typography sx={{ border: 'solid', padding: '10px' }}>
                    about
                </Typography>
                <Typography sx={{ border: 'solid', padding: '10px' }}>
                    asdf
                </Typography>
                <br />
                <Typography sx={{ border: 'solid', padding: '10px' }}>
                    BLOG
                </Typography>
            </Box>

        </Box>
    )
}

export default Sidebar;