import { Box, Typography } from "@mui/material"
import WhyBuyUsCard from "../content/WhyBuyUs"
import { TypographyHeading } from "../App"
import styled from "@emotion/styled"
import zed from "../assets/whyus_imgs/zedWppr.png"
import poppy from "../assets/whyus_imgs/poppy.jpg"
import darius from "../assets/whyus_imgs/darius.jpg"
import ash from "../assets/whyus_imgs/ash.jpg"

const WhyBuyUsPage = ({ p1, p2 ,id}) => {
    const WBUPBox = styled(Box)({
        // border: 'solid',
        zIndex: '1'

    })

    const whyBuyUsContentTitleContent="Looking for a trustworthy source to buy League of Legends accounts? Look no further! Our verified accounts offer a secure and seamless transaction process, backed by lifetime support for your peace of mind."

    const whyBuyUsContent = [
        {
            no1: 'INSTATANT DELIVERY',
            para: 'Experience lightning-fast account delivery when you buy from us. Our automated system ensures that you receive your account details instantly, so you can jump right into the action.',
            img: ash
        },
        {
            no1: 'CUSTOMER SUPPORT',
            para: 'Rest easy knowing that our dedicated customer support team is here to assist you every step of the way. Whether you have a question or need help with your account, we are always here to provide prompt and friendly service.',
            img: poppy
        },
        {
            no1: 'ACCOUNT SECURITY',
            para: 'We take account security seriously. Our verified accounts are hand-leveled and come with a lifetime guarantee against bans or recalls. With us, you can trust that your account will be safe and secure.',
            img: darius
        },
        {
            no1: 'SAFE & SECURE PAYMENT',
            para: 'Protect your financial information with our safe and secure payment methods. We accept a variety of payment options, each processed through our encrypted and secure platform for your peace of mind.',
            img: zed
        }
    ]




    return (
        <WBUPBox id={id}>
            <TypographyHeading>
                <span style={{ color: '#19ebe0', }}>{p1} </span>{p2}
            </TypographyHeading>
            <Typography sx={{
                width: '80%', margin: 'auto',
                fontFamily: '"Roboto", "Helvetica", "Arial", sans - serif',
                fontWeight: '400',
                fontSize: '0.875rem',
                lineHeight: '1.43',
                letterSpacing: '0.01071em',
                color: '#fff',
            }}>
                {whyBuyUsContentTitleContent}
            </Typography>
            <br />
            <br />
            <Box sx={{
                // display: 'flex',
                display: { xs: 'block', sm: 'flex' },
                width: '80%',
                margin: 'auto',

                // border:'solid brown'

            }}>
                {whyBuyUsContent.map((d, k) => {
                    return (
                        <WhyBuyUsCard heading={d.no1} body={d.para} media={d.img} />
                    )
                })}
                {/* <WhyBuyUsCard />
                <WhyBuyUsCard /> */}
                {/* <WhyBuyUsCard /> */}
            </Box>
        </WBUPBox>
    )
}
export default WhyBuyUsPage