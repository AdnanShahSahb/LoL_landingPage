import styled from "@emotion/styled"
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material"
import morde from "../gifs/mordekaiser.gif"

const AboutUsCard = () => {


    const TypographyLay = styled(Box)({

        padding: '10px',
        backgroundColor: "gray",
        color: "#fff",
        component: "div",
        fontSize: "10px",

    })

    const content = [{
        heading: 'Rick Gosling',
        para: 'A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116).Length and appearance do not determine'
    }, {
        heading: 'Ryan Gosling',
        para: 'A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116).Length and appearance do not determine'
    }, {
        heading: 'Brad Pitting',
        para: 'A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116).Length and appearance do not determine'
    }]


    return (
        <Card sx={{
            display: { xs: 'block', sm: 'flex' },
            background: 'rgba(0, 0, 0, 0.5)',
            WebkitBackdropFilter: ' blur(10px)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(0,0,0,0.25)',
            color: '#fff',
            borderRadius: '10px',
            textAlign: 'justify',
            padding: '10px',
        }}>

            <Box width="100%">
                <Typography sx={{
                }}><span style={{ color: '#19ebe0', }}>What  </span> People Say </Typography>
                <Typography sx={{
                    color: '#19ebe0',
                }}>About Us</Typography>
                <hr />
                <Typography p='10px' width='100%'>
                    A paragraph is a self - contained unit of discourse in writing dealing with a particular point or idea.Though not required by the orthographic conventions of any language with a writing system, paragraphs are a conventional means of organizing extended segments of prose.
                </Typography >

            </Box >
            <Box sx={{
                display: 'flex', flexDirection: 'column',
                padding: '10px',
            }}>


                <CardContent sx={{
                    flex: '1 0 auto',
                    border: 'solid brown'
                }}>
                    {content.map((d, k) => {
                        console.log(d, k);
                        return (
                            < TypographyLay >
                                <Typography sx={{ textAlign: { xs: 'center', md: 'left' } }} component="div" variant="h5">
                                    {content[k].heading}
                                </Typography>
                                {content[k].para}
                            </TypographyLay>
                        )
                    })}

                </CardContent>

            </Box>

        </Card >
    )
}

export default AboutUsCard;