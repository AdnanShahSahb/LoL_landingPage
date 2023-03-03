import { Box, Typography } from "@mui/material";
import AboutUsCard from "../content/AboutUs";
import { TypographyHeading } from "../App"
import styled from "@emotion/styled";
import AddingShadow from "../components/AddingShadow";


const AboutUsPage = ({ p1, p2 }) => {
    const AboutBox = styled(Box)({
        // border: 'solid',
        width:'100vw',
        marginTop:'40px'
        // zIndex:'10',
        // background: 'rgba(10, 10, 10, 0.5)',
        // opacity:'0.1'

    })
    return (

        <AboutBox>
            {/* <TypographyHeading>
                <span style={{ color: '#19ebe0', }}>{p1} </span>{p2}
            </TypographyHeading> */}

            <AboutUsCard />

        </AboutBox>

    )
}
export default AboutUsPage;