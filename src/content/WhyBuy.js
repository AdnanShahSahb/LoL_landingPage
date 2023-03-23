import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material"
import morde from "../assets/whyLoL_imgs/mordekaiser.gif"
import AddingShadowRel from "../components/AddingShadowRel"
import { useLayoutEffect, useRef } from "react"
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"

const WhyBuy = (props) => {

    // gsap.registerPlugin(ScrollTrigger);

    const mainRef = useRef()
    // useLayoutEffect(() => {

    //     const ctx = gsap.context((self) => {
    //         const boxes = self.selector('.box')
    //         boxes.forEach(element => {
    //             gsap.to(element, {
    //                 x: 190,
    //                 scrollTrigger: {
    //                     trigger: element,
    //                     start: 'center center',
    //                     end: 'top 20%',
    //                     scrub: true,
    //                     markers: true
    //                 }
    //             })
    //         });
    //     }, mainRef)



    //     return () => ctx.revert();
    // }, [])
    // console.log(props.content[1]);

    return (
        <>

            <Card sx={{
                display: { xs: 'block', sm: 'flex' },
                // border: 'solid yellow',

                // height:'100%',
                // marginTop:'50px',
                width: '100%',
                // zIndex:'3'


            }}>

                <div style={{
                    // border: 'solid blue',
                    width: '130%',
                    height: { xs: '33vh', sm: '50vh' },

                    //  width: { xs: '100%', sm: '130%' },
                }}>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <AddingShadowRel pos='right' />
                    </Box>
                    <AddingShadowRel pos='up' />
                    <CardMedia
                        component="img"
                        image={`${morde}`}
                        style={{
                            width: '100%', height: '100%',
                            objectPosition: 'center 40px'
                            // backgroundPosition:'center 500px',
                        }}
                        alt="Live from space album cover"
                    />

                    <AddingShadowRel pos='down' />
                </div>

                <Box ref={mainRef} sx={{ display: 'flex', flexDirection: 'column', backgroundColor: '#000', marginTop: 'auto', color: '#fff', textAlign: 'justify', padding: '30px 30px', paddingBottom: '10px' }}>
                    {/* <CardContent sx={{ flex: '1 0 auto', zIndex: '2'}}> */}
                    <CardContent sx={{ flex: '1 0 auto', zIndex: '2', marginLeft: { xs: 'auto', sm: 'auto', lg: '-70px', }, paddingRight: { xs: 'auto', sm: 'auto', lg: '100px', } }}>
                        <Typography className="box" component="div" variant="h5" marginBottom='10px' color='#19ebe0' sx={{ fontSize: { xs: '12px', sm: '20px' } }} textAlign='left'>
                            STILL UNDECIDED ?
                        </Typography>
                        <Typography className="box" sx={{ lineHeight: { xs: '10px', sm: '15px' } }} fontSize='10px' variant="subtitle1" component="div">
                            {props.content[0]}
                            <p></p>
                            <p>{props.content[1]}</p>
                        </Typography>
                        <div className="box" style={{ color: '', borderBottom: 'solid #19ebe0', margin: '20px 0', width: '36vw', height: '10px' }}></div>
                        <Typography className="box" sx={{ lineHeight: { xs: '10px', sm: '15px' } }} fontSize='10px' variant="subtitle1" component="div">
                            {props.content[2]}
                            <p></p>

                            <p>
                                {props.content[3]}
                            </p>
                            <p></p>

                            <p>
                                {props.content[5]}
                            </p>
                        </Typography>
                    </CardContent>

                </Box>


            </Card>
        </>

    )
}

export default WhyBuy;