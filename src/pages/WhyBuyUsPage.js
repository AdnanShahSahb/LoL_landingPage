import { Box, Card, Typography } from "@mui/material"
import WhyBuyUsCard from "../content/WhyBuyUs"
import { TypographyHeading } from "../App"
import styled from "@emotion/styled"
import zed from "../gifs/zedWppr.png"
import poppy from "../gifs/poppy.jpg"
import darius from "../gifs/darius.jpg"
import ash from "../gifs/ash.jpg"

const WhyBuyUsPage = ({ p1, p2 }) => {
    const WBUPBox = styled(Box)({
        // border: 'solid',
        zIndex: '1'

    })

    const whyBuyUsContent = [
        {
            no1: 'INSTATANT DELIVERY',
            para: 'Upon purchase, you get the account details instantly in your specified e-mail address, with instructions on how to change the passwrd and attach your own e-email address.',
            img:ash
        },
        {
            no1: 'CUSTOMER SUPPORT',
            para: 'Come say hello! We have a            friendly and helpful support team            ready to answer your questions            about our services and            everything about League of            Legends accounts!',
            img:poppy
        },
        {
            no1: 'ACCOUNT SECURITY',
            para: 'Our LOL accounts get the hans-processed treatment. We create the accounts manually and make sure they are level up and treated with utmost care.',
            img:darius
        },
        {
            no1: 'SAFE & SECURE PAYMENT',
            para: 'We provide full recovery details with our League of Legends accounts and smurfs. Our site is secure using SSL technology anses Paypal for payment processing.',
            img:zed
        }
    ]

    return (
        <WBUPBox>
            <TypographyHeading>
                <span style={{ color: '#19ebe0', }}>{p1} </span>{p2}
            </TypographyHeading>
            <Typography sx={{ width: '80%', margin: 'auto' }}>
                Online Grammar and Writing Checker To Help You Deliver Impeccable, Mistake-free Writing. Grammarly Has a Tool For Just About Every Kind Of Writing You Do. Try It Out For Yourself! Find and Add Sources Fast. Eliminate Grammar Errors. Improve Word Choice.
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
                        <WhyBuyUsCard heading={d.no1} body={d.para} media={d.img}/>
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