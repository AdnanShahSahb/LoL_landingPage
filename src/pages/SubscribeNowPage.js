import { Box, Typography } from "@mui/material"
import SubscribeNowText from "../content/SubscribeNow"
import { TypographyHeading } from "../App"
import styled from "@emotion/styled"

const SubscribeNowPage = ({ p1, p2,id }) => {
    const SubscribeBox = styled(Box)({
        // border: 'solid yellow',
        zIndex:'1',
        // backgroundColor: 'rgba(128,128,128,0)'

    })

    const subscribeNowContent="Don't miss out on exclusive offers and promotions! Subscribe now to stay up-to-date on the latest deals and discounts."

    return (
        <SubscribeBox id={id}>
            <TypographyHeading>
                <span style={{ color: '#19ebe0', }}>{p1} </span>{p2}
            </TypographyHeading>

            <SubscribeNowText subscribeNowContent={subscribeNowContent}/>
        </SubscribeBox>
    )
}
export default SubscribeNowPage;