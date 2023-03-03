import { Box, Typography } from "@mui/material"
import WhyBuyCard from "../content/WhyBuy"
import { TypographyHeading } from "../App"
import styled from "@emotion/styled"
import AddingMargin from "../components/AddingMargin"

const WhyBuyPage = ({ p1, p2 }) => {
    const WBPBox = styled(Box)({
        // border: 'solid',
        zIndex: '4',
        marginBottom: '0px',
        // position:'absolute'

    })
    return (

        <WBPBox>

            {/* <Typography sx={{ fontSize: '20px'}}><span style={{ color: '#19ebe0', }}>Why Buy Leage Of </span>Legends Account</Typography> */}

            <TypographyHeading>
                <div style={{ zIndex: '3', position: 'absolute',right:'0',left:'0' }}>
                    <span style={{ color: '#19ebe0', }}>{p1} </span>{p2}
                </div>
            </TypographyHeading>

            <WhyBuyCard />
        </WBPBox>
    )
}
export default WhyBuyPage