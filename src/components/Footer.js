



import styled from "@emotion/styled";
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import LoL_icon from "../gifs/LoL_icon.svg"

const Footer = () => {
  const AppBarStyled = styled(AppBar)({
    backgroundColor: '#242625',
    color: '#ffffff',
    padding: '16px',
    marginTop: 'auto',
    // border: 'solid',
    position: 'absolute',
    top: 'auto',
    display: 'flex',
    flexDirection: 'row'
  })

  return (
    <Box sx={{ flexGrow: 1, backgroundColor: '#242625', zIndex: '40' }}>
      <AppBarStyled >
        <Typography sx={{  width: '62%', alignContent: 'space-around' }}>
          <img src={LoL_icon} height='50px' />
        </Typography>
        <Typography sx={{  display:'flex',justifyContent:'center',alignItems:'center' }}>
          Copyright 2019 Leauge of Legends & Maksim Danik
        </Typography>
        <Typography sx={{   display:'flex',justifyContent:'center',alignItems:'center'}}>
          <Button color="inherit" sx={{ border: 'solid rgb(25, 235, 224)', marginLeft: '20px', color: 'rgb(25, 235, 224)' }}>BLOG</Button>
        </Typography>
      </AppBarStyled>
    </Box>
  )
}
export default Footer;
