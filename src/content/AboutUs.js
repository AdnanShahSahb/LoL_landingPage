import styled from "@emotion/styled"
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import morde from "../gifs/mordekaiser.gif"
import PaginationLP from "../components/PaginationLP"

const AboutUs = () => {

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


    // User is currently on this page
    const [currentPage, setCurrentPage] = useState(1);
    // No of Records to be displayed on each page   
    const [recordsPerPage] = useState(2);

    // no of list of pagination no.s
    const [maxPaginLimit, setMaxPaginLimit] = useState(2);
    const [minPaginLimit, setMinPaginLimit] = useState(0);




    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

    // Records to be displayed on the current page
    let currentRecords = 0;
    let nPages = 0;

    currentRecords = content.slice(indexOfFirstRecord, indexOfLastRecord);
    nPages = Math.ceil(content.length / recordsPerPage)



    const TypographyLay = styled(Box)({

        padding: '10px',
        backgroundColor: "gray",
        color: "#fff",
        component: "div",
        fontSize: "10px",
        margin: '10px 0',
        borderRadius: '10px',

    })

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
            // border:'solid brown ',
            width: '80%',
            margin: 'auto',
            padding: '10px',
        }}>


            <Box width="100%">
                <Typography sx={{
                }}><span style={{ color: '#19ebe0', }}>What <br /> </span> People Say </Typography>
                <Typography sx={{
                    color: '#19ebe0',
                }}>About Us</Typography>
                <hr />
                <Typography p='10px' width='100%'>
                    A paragraph is a self - contained unit of discourse in writing dealing with a particular point or idea.Though not required by the orthographic conventions of any language with a writing system, paragraphs are a conventional means of organizing extended segments of prose.
                </Typography >
                    <PaginationLP setMaxPaginLimit={setMaxPaginLimit} setMinPaginLimit={setMinPaginLimit} maxPaginLimit={maxPaginLimit} minPaginLimit={minPaginLimit} nPages={nPages} currentPage={currentPage} setCurrentPage={setCurrentPage} totalT={content.length} />


            </Box >
            <Box sx={{
                display: 'flex', flexDirection: 'column',
                padding: '10px',
            }}>


                <CardContent sx={{
                    flex: '1 0 auto',
                    // border: 'solid brown'
                }}>
                    {currentRecords.map((d, k) => {
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

export default AboutUs;