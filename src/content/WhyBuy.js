import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material"
import morde from "../gifs/mordekaiser.gif"
import yasuo from "../gifs/Yassuo.png"
import AddingMargin from "../components/AddingMargin"
import AddingShadowRel from "../components/AddingShadowRel"

const WhyBuy = () => {
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
                    height: { xs: '33vh', sm: '50vh' }
                    //  width: { xs: '100%', sm: '130%' },
                }}>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <AddingShadowRel pos='right' />
                    </Box>
                    <AddingShadowRel pos='up' />
                    <CardMedia
                        component="img"
                        sx={{
                            // width: { xs: '100%', sm: '130%' },
                            width: '100%', height: '100%',
                            // height: '450px',
                            // boxShadow: '0 0 80px 80px black inset',
                            // border: 'solid brown',
                            // boxShadow: '0 0 80px 80px black inset',
                        }}
                        image={`${morde}`}
                        alt="Live from space album cover"
                    />

                    <AddingShadowRel pos='down' />
                </div>

                <Box sx={{ display: 'flex', flexDirection: 'column', backgroundColor: '#000', color: '#fff', textAlign: 'justify', padding: '14px 30px', }}>
                    <CardContent sx={{ flex: '1 0 auto',zIndex:'2' }}>
                        <Typography component="div" variant="h5" marginBottom='10px' color='#19ebe0' sx={{ fontSize: { xs: '12px', sm: '20px' } }} textAlign='left'>
                            STILL UNDECIDED ?
                        </Typography>
                        <Typography sx={{ lineHeight: { xs: '10px', sm: '15px' } }} fontSize='10px' variant="subtitle1" component="div">
                            Online Grammar and Writing Checker To Help You Deliver Impeccable, Mistake-free Writing. Grammarly Has a Tool For Just About Every Kind Of Writing You Do. Try It Out For Yourself! Find and Add Sources Fast. Eliminate Grammar Errors. Improve Word Choice.
                            <p></p>   <p>Online Grammar and Writing Checker To Help You Deliver Impeccable, Mistake-free Writing. Grammarly Has a Tool For Just About Every Kind Of Writing You Do. Try It Out For Yourself! Find and Add Sources Fast. Eliminate Grammar Errors. Improve Word Choice.
                            </p>
                        </Typography>
                        <div style={{ color: '', borderBottom: 'solid #19ebe0', margin: '20px 0', width: '36vw', height: '10px' }}></div>

                        <Typography sx={{ lineHeight: { xs: '10px', sm: '15px' } }} fontSize='10px' variant="subtitle1" component="div">
                            A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs.
                            <p></p>
                            <p>Online Grammar and Writing Checker To Help You Deliver Impeccable, Mistake-free Writing. Grammarly Has a Tool For Just About Every Kind Of Writing You Do. Try It Out For Yourself! Find and Add Sources Fast. Eliminate Grammar Errors. Improve Word Choice. </p>
                            <p></p>
                            <p>A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs.</p> </Typography>
                    </CardContent>

                </Box>


            </Card>
        </>

    )
}

export default WhyBuy;