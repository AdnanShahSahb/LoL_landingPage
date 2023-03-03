
import styled from "@emotion/styled";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Carouseling from "../content/Carouseling";
import { TypographyHeading } from "../App";
import AddingMargin from "../components/AddingMargin";

const ChoseAccPage = ({ p1, p2 }) => {
    const CAPBox = styled(Box)({
        // border: 'solid',
        zIndex:'1'
    })
    return (
        <CAPBox>
            <AddingMargin />


            {/* <Typography sx={{ fontSize: '20px'}}><span style={{ color: '#19ebe0', }}>Choose Your </span>Account</Typography> */}
            <TypographyHeading>
                <span style={{ color: '#19ebe0', }}>{p1} </span>{p2}
            </TypographyHeading>
            <Carouseling />
        </CAPBox>

    )
}
export default ChoseAccPage;

// import { Button, Typography } from "@mui/material";
// import { Box } from "@mui/system";
// import Carouseling from "./Carouseling";

// const ChoseAccPage = () => {

//     return (
//         <>

//             <Box sx={{
//                 // border: 'solid',
//                 color: '#fff',
//                 width: '50vw',
//                 textAlign: 'center',
//                 mt: '8rem',
//                 ml: 'auto',
//                 mr: 'auto',
//             }}>

//                 <Typography sx={{ fontSize: '20px', mb: '30px' }}><span style={{ color: '#19ebe0', }}>Choose Your </span>Account</Typography>

//                 <Carouseling />
//             </Box>
//         </>

//     )
// }
// export default ChoseAccPage;