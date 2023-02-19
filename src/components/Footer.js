import styled from "@emotion/styled";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Footer = () => {
  const AppBarStyled = styled(AppBar)({
    backgroundColor: '#242625',
    color: '#ffffff',
    padding: '16px',
    marginTop: 'auto',
    
  })
  return (
    <AppBarStyled position="static" className="footer" >
      <Toolbar>
        <Typography variant="body1" >
          © 2023 My Website Name. All rights reserved.
        </Typography>
      </Toolbar>
    </AppBarStyled>
  )
}
export default Footer;