
import styled from "@emotion/styled";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import gsap from "gsap";
import { useEffect, useLayoutEffect, useRef } from "react";

const HeroPage = (props) => {
    const HeroBox = styled(Box)({
        zIndex: '1',
        width:'90vw',
        margin:'auto'
    })

    const LoLUp = useRef()
    const LoLDown = useRef()
    const capitalLetterL = useRef()
    const capitalLetterA = useRef()
    const heroRef = useRef()


    // useLayoutEffect(() => {
    //     // gsap.to(LoLUp.current, { fontSize: '25px', duration: '2' })
    //     gsap.to(LoLDown.current, { fontSize: '25px', duration: '2' })
    //     gsap.to(capitalLetterL.current, { fontSize: '50px', delay: '1.6', duration: '1' })
    //     gsap.to(capitalLetterA.current, { fontSize: '50px', delay: '1.6', duration: '1' })




    // }, [])


    return (
        <HeroBox id={props.id}>


            <Typography ref={LoLUp} sx={{ fontSize: '25px', fontWeight: 'bold', }}><span style={{ color: '#19ebe0', }}>BUY </span>A LEAGUE OF</Typography>
            <Typography ref={LoLDown} sx={{ color: '#fff', fontSize: '25px', fontFamily: 'Century Gothic', letterSpacing: {xs:'5px',sm:'10px'}, fontWeight: 'bolder', textShadow: '0 0 10px #19ebe0, 0 0 20px #19ebe0, 0 0 30px #000, 0 0 40px #000, 0 0 50px #000, 0 0 60px #000, 0 0 70px #000' }}>
                <span ref={capitalLetterL} style={{ fontSize: '50px',}}>L</span>EGENDS
                <span ref={capitalLetterA} style={{ fontSize: '50px',marginLeft:'20px'  }}>A</span>CCOUNT
            </Typography>
            <div style={{ borderBottom: 'solid #fff', width: '30%', margin: '30px auto ' }}></div>
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