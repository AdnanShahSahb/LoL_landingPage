import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material"
import morde from "../gifs/mordekaiser.gif"

const WhyBuyCard = () => {
    return (
        <Card sx={{
            display: { xs: 'block', sm: 'flex' },
            // border:'solid yellow',
            width:'100%'



        }}>
            <CardMedia
                component="img"
                sx={{
                    width: { xs: '100%', sm: '50%' },
                    boxShadow: '0 0 80px 80px black inset',
                    // border:'solid brown',
                    boxShadow: '0 0 80px 80px black inset',


                }}
                image={`${morde}`}
                alt="Live from space album cover"
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'justify' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5" sx={{ fontSize: { xs: '12px', sm: '20px' } }} textAlign='center'>
                        Still Undecided
                    </Typography>
                    <Typography sx={{ lineHeight: { xs: '10px', sm: '15px' } }} fontSize='10px' variant="subtitle1" color="text.secondary" component="div">
                        Online Grammar and Writing Checker To Help You Deliver Impeccable, Mistake-free Writing. Grammarly Has a Tool For Just About Every Kind Of Writing You Do. Try It Out For Yourself! Find and Add Sources Fast. Eliminate Grammar Errors. Improve Word Choice.
                    </Typography>
                    <hr />
                    <Typography sx={{ lineHeight: { xs: '10px', sm: '15px' } }} fontSize='10px' variant="subtitle1" color="text.secondary" component="div">
                        A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs.
                    </Typography>
                </CardContent>

            </Box>

        </Card>
    )
}

export default WhyBuyCard;