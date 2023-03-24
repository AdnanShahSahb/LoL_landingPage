import {
    Link,
    Typography
} from '@mui/material';
import { Box } from '@mui/system';
// import './App.css';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from "./Sidebar";
import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import LoL_icon from "../assets/icon/LoL_icon.svg"
import { useLocation } from 'react-router-dom';

const Navbar = () => {

    const [sidebarO, setSidebarO] = useState(false)



    const menuItemsArr = ["Home", "Accounts", "Why Us", "Why LoL", "About Us", "Subscribe"]
    const href_for_navbar = ["#home", "#accounts", "#whyUs", "#whyLoL", "#aboutUs", "#subscribe"]


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
        padding: '10px',
        borderBottom: '2px solid transparent',

        '&:hover': {
            color: '#19ebe0',
            borderBottom: '2px solid',
            cursor: 'pointer'

        }
    })


    const [activeLink, setActiveLink] = useState('home');

    const handleScroll = () => {
        // console.log(1);

        const sections = document.querySelectorAll('#mainSection')

        sections.forEach((eachSection) => {
            const top = eachSection.offsetTop - 20;
            const height = eachSection.clientHeight;
            const bottom = top + height;

            if (window.pageYOffset >= top && window.pageYOffset <= bottom) {

                setActiveLink(eachSection.children[0].id);
            }
        })
    }


    useEffect(() => {

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };


    }, [])

    return (
        <>

            <BoxContainer>

                {/* logo */}
                <Typography>
                    <img src={LoL_icon} height='30px' alt='icon' />
                </Typography>

                {/* pages */}
                <Box sx={{
                    display: { xs: 'none', sm: 'flex' },
                    // border: 'solid brown',
                }}>
                    {menuItemsArr.map((d, k) => {

                        // console.log(`#${activeLink}`, href_for_navbar[k]);

                        return (
                            <Link key={k} href={`${href_for_navbar[k] === '#home' ? '#' : href_for_navbar[k]}`} style={{ textDecoration: 'none' }} >
                                <StyledTypography sx={{
                                    color: `#${activeLink}` === `${href_for_navbar[k]}` ? '#19ebe0' : '#fff',
                                }}>
                                    {d}
                                </StyledTypography>
                            </Link>
                        )
                    })}
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