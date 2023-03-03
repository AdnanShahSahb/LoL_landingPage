import {
    Typography
} from '@mui/material';
import { Box } from '@mui/system';
// import './App.css';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from "./Sidebar";
import { useState } from 'react';
import styled from '@emotion/styled';
import LoL_icon from "../gifs/LoL_icon.svg"

// navbar
// sidebar
// home page
// hero section

const BoxContainer = styled(Box)({
    // border: 'solid',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#242625',
    height: '50px',
    innerWidth: '100vw',
    color: '#19ebe0',
    padding: '10px',
    position: 'fixed',
    left: '0',
    right: '0',
    zIndex: '30'
})

const StyledTypography = styled(Typography)({
    // flex: '1',
    // backgroundColor: 'blue',
    // border: 'solid',
    padding: '10px',
    borderBottom: '2px solid transparent',
    color: '#fff',
    '&:hover': {
        color: '#19ebe0',
        borderBottom: '2px solid',
        cursor: 'pointer'

    }
})




const Navbar = () => {
    console.log(BoxContainer);

    const [sidebarO, setSidebarO] = useState(false)

    return (
        <>

            <BoxContainer>

                {/* logo */}
                <Typography>
                    <img src={LoL_icon} height='30px' />
                </Typography>

                {/* pages */}
                <Box sx={{
                    display: { xs: 'none', sm: 'flex' },
                    // border: 'solid brown',
                }}>
                    <StyledTypography >
                        Home
                    </StyledTypography>
                    <StyledTypography >
                        Accounts
                    </StyledTypography>
                    <StyledTypography >
                        About
                    </StyledTypography>
                    <StyledTypography >
                        Feedbacks
                    </StyledTypography>
                    <StyledTypography >
                        News
                    </StyledTypography>
                </Box>

                {/* blog */}
                <Box sx={{
                    display: { xs: 'none', sm: 'flex' },
                    borderLeft: 'solid #19ebe0',
                    pl: '10px'
                    // backgroundColor: 'yellow',
                }}>
                    BLOG

                </Box>

                {/* burger */}
                <Box sx={{
                    display: { xs: 'block', sm: 'none' },
                    '&:hover': { cursor: 'pointer' }
                }}>

                    {!sidebarO &&
                        <MenuIcon onClick={() => { setSidebarO(true) }} />
                    }

                </Box>
            </BoxContainer >

            <Sidebar setSidebarO={setSidebarO} sidebarO={sidebarO} />



        </>
    )
}
export default Navbar;