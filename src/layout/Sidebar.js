
import { Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import CloseIcon from '@mui/icons-material/Close';
import { useLocation } from "react-router-dom";

const Sidebar = (props) => {

    const menuItemsArr = ["Home", "Accounts", "Why Us", "Why LoL", "About Us", "Subscribe"]
    const href_for_sidebar = ["", "#accounts", "#whyUs", "#whyLoL", "#aboutUs", "#subscribe"]

    const currLoc = useLocation()


    return (
        <Box
            backgroundColor="primary.main"
            color="#fff"
            sx={{
                // display: { xs: 'block', sm: 'none' },
                // display: { sm: 'none' },
                // backgroundColor: 'red',
                position: 'fixed',
                height: '100vh',
                width: '75vw',
                right: props.sidebarO ? '0vw' : '-100vw',
                // right:'-100vw',
                transition: '0.5s',
                opacity: '0.95',
                zIndex: '30',

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
                    '&:hover': { cursor: 'pointer' }
                }}>
                    <CloseIcon onClick={() => { props.setSidebarO(false) }} />
                </Typography>
                {menuItemsArr.map((d, k) => {


                    return (
                        <Link key={k} sx={{
                            padding: '10px',
                            color: currLoc.hash === `${href_for_sidebar[k]}` ? '#19ebe0' : '#fff',
                            

                        }} href={`${href_for_sidebar[k] === '' ? '#' : href_for_sidebar[k]}`} onClick={() => {
                            props.setSidebarO(false);
                        }}>
                            {d}
                        </Link>
                    )
                    // }
                })}
                <br />
                <Typography borderTop="solid 2px #19EBE0" padding='10px'>
                    BLOG
                </Typography>
            </Box>

        </Box >
    )
}

export default Sidebar;