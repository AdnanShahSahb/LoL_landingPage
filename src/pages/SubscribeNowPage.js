import { Box, Typography } from "@mui/material"
import SubscribeNowText from "../content/SubscribeNow"
import { TypographyHeading } from "../App"
import styled from "@emotion/styled"

const SubscribeNowPage = ({ p1, p2 }) => {
    const SubscribeBox = styled(Box)({
        // border: 'solid yellow',
        zIndex:'1',
        // backgroundColor: 'rgba(128,128,128,0)'

    })
    return (
        <SubscribeBox>
            <TypographyHeading>
                <span style={{ color: '#19ebe0', }}>{p1} </span>{p2}
            </TypographyHeading>

            <SubscribeNowText />
        </SubscribeBox>
    )
}
export default SubscribeNowPage;