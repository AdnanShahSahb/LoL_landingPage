import { Box } from "@mui/material";
import AboutUsCard from "../content/AboutUs";
import styled from "@emotion/styled";


const AboutUsPage = ({ p1, p2, id }) => {

    const aboutUsContent = "We are a trusted provider of League of Legends accounts, offering hand-leveled accounts with a lifetime guarantee against recalls or bans. Our instant delivery system and secure payment options make purchasing an account from us a hassle-free experience. With our dedicated customer support team available 24/7, we are committed to providing the best service to our customers."

    const userContent = [
        {
            heading: 'Rick Gosling',
            para: 'I couldnt be happier with my purchase. The account was delivered instantly, and their customer service was top-notch'
        }, {
            heading: 'Ryan Gosling',
            para: "I've bought several accounts from them, and they always come through with quality and security."
        }, {
            heading: 'Shakuntla Gosling',
            para: "Their lifetime guarantee gave me the confidence to make my purchase. I haven't had any issues with my account and would recommend them to anyone."
        }, {
            heading: 'Rick Dosling',
            para: "Their payment process was simple and secure. I had my account details in minutes and was able to start playing right away."
        }, {
            heading: 'Gick Rosling',
            para: "Their customer service team was patient and helpful with all of my questions. I'll definitely be using them again in the future."
        }, {
            heading: 'Ramp Gosling',
            para: "I've bought several accounts from them, and they always come through with quality and security."
        },
    ]

    // window.location.href='#aboutUs'


    const AboutBox = styled(Box)({
        // border: 'solid',
        width: '100vw',
        marginTop: '40px',

    })
    return (

        <AboutBox id={id}>

            <AboutUsCard aboutContent={aboutUsContent} userContent={userContent} />

        </AboutBox>

    )
}
export default AboutUsPage;