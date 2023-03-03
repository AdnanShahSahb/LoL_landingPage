import styled from "@emotion/styled"
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import morde from "../gifs/mordekaiser.gif"
import PaginationLP from "../components/PaginationLP"
import AddingShadow from "../components/AddingShadow"

const AboutUs = () => {

    const content = [
        {
            heading: 'Rick Gosling',
            para: 'A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116).Length and appearance do not determine'
        }, {
            heading: 'Ryan Gosling',
            para: 'A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116).Length and appearance do not determine'
        }, {
            heading: 'Shakuntla Gosling',
            para: 'A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116).Length and appearance do not determine'
        }, {
            heading: 'Rick Dosling',
            para: 'A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116).Length and appearance do not determine'
        }, {
            heading: 'Gick Rosling',
            para: 'A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116).Length and appearance do not determine'
        }, {
            heading: 'Ramp Gosling',
            para: 'A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116).Length and appearance do not determine'
        },
    ]


    // User is currently on this page
    const [currentPage, setCurrentPage] = useState(1);
    // No of Records to be displayed on each page   
    const [recordsPerPage, setRecordsPerPage] = useState(3);

    // no of list of pagination no.s
    const [maxPaginLimit, setMaxPaginLimit] = useState(10);
    const [minPaginLimit, setMinPaginLimit] = useState(0);




    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

    // Records to be displayed on the current page
    let currentRecords = 0;
    let nPages = 0;

    currentRecords = content.slice(indexOfFirstRecord, indexOfLastRecord);
    nPages = Math.ceil(content.length / recordsPerPage)

    useEffect(() => {
        if (window.innerWidth < 600)
            setRecordsPerPage(1)
        else
            setRecordsPerPage(3)
    }, [window.innerWidth])


    const TypographyLay = styled(Box)({

        padding: '10px',
        backgroundColor: "gray",
        color: "#fff",
        component: "div",
        width: '100%',
        fontSize: "10px",
        margin: '30px 0',
        borderRadius: '10px',
        // height: '90px',
        // border:'solid brown',
        backgroundColor: 'rgba(100, 100, 100, 0.5)',

    })

    const [mblMode, setMblMode] = useState("off")
    useEffect(() => {
        if (window.innerWidth < 600)
            setMblMode("on")
        else
            setMblMode("off")

    }, [window.innerWidth])

    return (
        <Card sx={{
            display: { xs: 'block', sm: 'flex' },
            // background: 'rgba(0, 0, 0, 0.5)',
            backgroundColor: 'black',
            // WebkitBackdropFilter: ' blur(10px)',
            // backdropFilter: 'blur(10px)',
            // border: '1px solid rgba(0,0,0,0.25)',
            color: '#fff',
            // borderRadius: '10px',
            textAlign: 'justify',
            // border:'solid brown ',
            width: '80%',
            margin: 'auto',
            marginTop: '40px',
            padding: '10px',
            // paddingBottom:'100px',
        }}>


            <Box width="100%" sx={{
                zIndex: '4',
                // border:'solid',
                marginTop: '40px',
            }}>

                <Typography sx={{
                    // border: 'solid',
                    marginBottom: '40px',
                }}>
                    <span style={{
                        // color: '#19ebe0',
                        fontSize: '30px',
                    }}>
                        What
                    </span>
                    <br />
                    <span style={{
                        fontSize: '15px',
                        // color: '#19ebe0',
                    }}>
                        PEOPLE SAY
                    </span>
                    <br />
                    <span style={{
                        // color: '#19ebe0',
                        fontSize: '30px',
                        borderBottom: 'solid 5px #AA336A',
                        paddingBottom: '20px',
                        // borderRadius:'10px'
                    }}>
                        About Us
                    </span>
                </Typography>

                <Typography width='100%' sx={{ paddingRight: { xs: '0px', sm: '50px' } }} >
                    A paragraph is a self - contained unit of discourse in writing dealing with a particular point or idea.Though not required by the orthographic conventions of any language with a writing system, paragraphs are a conventional means of organizing extended segments of prose.
                </Typography >

                {mblMode=="off" &&
                    <PaginationLP setMaxPaginLimit={setMaxPaginLimit} setMinPaginLimit={setMinPaginLimit} maxPaginLimit={maxPaginLimit} minPaginLimit={minPaginLimit} nPages={nPages} currentPage={currentPage} setCurrentPage={setCurrentPage} totalT={content.length} />
                }

            </Box >
            <Box sx={{
                display: 'flex', flexDirection: 'column',
                padding: '10px',
                zIndex: '1',
                // border:'solid'

            }}>


                <CardContent sx={{
                    flex: '1 0 auto',

                    // border: 'solid brown'
                }}>
                    {currentRecords.map((d, k) => {
                        // console.log(d, k);
                        return (
                            < TypographyLay >
                                <Typography sx={{ textAlign: { xs: 'center', md: 'left' }, color: 'rgb(25, 235, 224)' }} component="div" variant="h5">
                                    {d.heading}
                                </Typography>
                                {d.para}
                            </TypographyLay>
                        )
                    })}

                </CardContent>
                {mblMode=="on" &&
                    <PaginationLP setMaxPaginLimit={setMaxPaginLimit} setMinPaginLimit={setMinPaginLimit} maxPaginLimit={maxPaginLimit} minPaginLimit={minPaginLimit} nPages={nPages} currentPage={currentPage} setCurrentPage={setCurrentPage} totalT={content.length} />
                }
            </Box>

        </Card >
    )
}

export default AboutUs;