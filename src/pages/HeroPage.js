
import styled from "@emotion/styled";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";

const HeroPage = () => {
    const HeroBox = styled(Box)({
        // border: 'solid',
        zIndex: '1',
        // width:'90vw'
    })
    return (
        <HeroBox>


            <Typography sx={{ fontSize: '25px', fontWeight: 'bold' }}><span style={{ color: '#19ebe0', }}>BUY </span>A LEAGUE OF</Typography>
            <Typography sx={{ color: '#fff', fontSize: '30px', fontFamily: 'Century Gothic', letterSpacing: '10px', fontWeight: 'bolder', textShadow: '0 0 10px #19ebe0, 0 0 20px #19ebe0, 0 0 30px #000, 0 0 40px #000, 0 0 50px #000, 0 0 60px #000, 0 0 70px #000' }}><span style={{fontSize:'50px'}}>L</span>EGENDS <span style={{fontSize:'50px'}}>A</span>CCOUNT</Typography>
            <div style={{borderBottom:'solid #fff',width:'30%',margin:'30px auto '}}></div>
            <Button sx={{
                // mt: '25px',
                backgroundColor: '#AA336A',
                color: '#fff',
                fontSize: '20px',

            }}>Order Now</Button>
        </HeroBox>

    )
}
export default HeroPage;
// import styled from "@emotion/styled";
// import { Button, Typography } from "@mui/material";
// import { Box } from "@mui/system";

// const HeroPage = () => {

//     return (
//         <>

//             <Box sx={{
//                 // border: 'solid',
//                 color: '#fff',
//                 width: '50vw',
//                 textAlign: 'center',
//                 mt: '13rem',
//                 ml: 'auto',
//                 mr: 'auto',
//             }}>

//                 <Typography sx={{ fontSize: '20px' }}><span style={{ color: '#19ebe0', }}>Buy </span>A Leage of</Typography>
//                 <Typography sx={{ color: '#19ebe0', fontSize: '20px' }}>Legends Account</Typography>
//                 <Button sx={{
//                     // mt: '25px',
//                     backgroundColor: '#19ebe0',
//                     color: '#fff',
//                     fontSize: '20px',

//                 }}>Order Now</Button>
//             </Box>
//         </>

//     )
// }
// export default HeroPage;