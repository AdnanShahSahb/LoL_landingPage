import { Box } from "@mui/material"
import WhyBuyCard from "../content/WhyBuy"
import { TypographyHeading } from "../App"
import styled from "@emotion/styled"

const WhyBuyPage = ({ p1, p2,id }) => {

    const whyBuyContent = [
        'Buying a League of Legends account can provide you with numerous benefits. Whether you are a new player looking to avoid the grind or an experienced player wanting to try out a new role, buying an account can save you time and effort.',
        'Additionally, purchasing an account can give you access to champions, skins, and runes that would otherwise take months or even years to unlock. With our verified accounts, you can enjoy all of these benefits and more. ',
        'When you buy a League of Legends account from us, you can rest assured that you are getting a high-quality, hand-leveled account. ',
        'Our accounts are verified and come with a lifetime guarantee against recalls or bans, giving you peace of mind. Plus, our instant delivery system ensures that you all receive your account details right away, so you can start playing immediately. ',
        'We also offer a variety of payment options, each processed through our secure and encrypted platform. With our dedicated customer support team available 24/7 to assist you, buying a League of Legends account from us is a hassle-free experience. ',
    ]

    const WBPBox = styled(Box)({
        // border: 'solid',
        zIndex: '4',
        marginBottom: '0px',
        // position:'absolute'

    })
    return (

        <WBPBox id={id}>

            {/* <Typography sx={{ fontSize: '20px'}}><span style={{ color: '#19ebe0', }}>Why Buy Leage Of </span>Legends Account</Typography> */}

            <TypographyHeading>
                <div style={{ zIndex: '3', position: 'absolute', right: '0', left: '0' }}>
                    <span style={{ color: '#19ebe0', }}>{p1} </span>{p2}
                </div>
            </TypographyHeading>

            <WhyBuyCard content={whyBuyContent} />
        </WBPBox>
    )
}
export default WhyBuyPage