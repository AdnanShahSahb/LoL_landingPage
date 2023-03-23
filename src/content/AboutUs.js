import styled from "@emotion/styled"
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import PaginationLP from "../components/PaginationLP"

const AboutUs = (props) => {




    // User is currently on this page
    const [currentPage, setCurrentPage] = useState(1);
    // No of Records to be displayed on each page   
    const [recordsPerPage, setRecordsPerPage] = useState(4);

    // no of list of pagination no.s
    const [maxPaginLimit, setMaxPaginLimit] = useState(10);
    const [minPaginLimit, setMinPaginLimit] = useState(0);




    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

    // Records to be displayed on the current page
    let currentRecords = 0;
    let nPages = 0;

    currentRecords = props.userContent.slice(indexOfFirstRecord, indexOfLastRecord);
    nPages = Math.ceil(props.userContent.length / recordsPerPage)

    useEffect(() => {
        if (window.innerWidth < 600)
            setRecordsPerPage(1)
        else
            setRecordsPerPage(4)
    }, [window.innerWidth])


    const TypographyLay = styled(Box)({

        padding: '10px',
        backgroundColor: "gray",
        color: "#fff",
        component: "div",
        width: '100%',
        fontSize: "12px",
        margin: '10px 0',
        borderRadius: '10px',
        // height: '107px',
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
            // border: 'solid brown ',
            width: '80%',
            margin: 'auto',
            marginTop: '40px',
            padding: '10px',
            // paddingBottom:'100px',
        }}>


            <Box width="100%" sx={{
                zIndex: '4',
                // border: 'solid',
                // marginTop: '40px',
                padding:'40px'
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

                <Typography width='100%' sx={{
                    paddingRight: { xs: '0px', sm: '50px' }, margin: ' 0',
                    fontFamily: '"Roboto", "Helvetica", "Arial", sans - serif',
                    fontWeight: '400',
                    fontSize: '12px',
                    lineHeight: '1.43',
                    letterSpacing: '0.01071em',
                    color: '#fff',
                }} >
                    {props.aboutContent}
                </Typography >

                {mblMode == "off" &&
                    <PaginationLP setMaxPaginLimit={setMaxPaginLimit} setMinPaginLimit={setMinPaginLimit} maxPaginLimit={maxPaginLimit} minPaginLimit={minPaginLimit} nPages={nPages} currentPage={currentPage} setCurrentPage={setCurrentPage} totalT={props.userContent.length} />
                }

            </Box >
            <Box sx={{
                display: 'flex', flexDirection: 'column',
                padding: '10px',
                zIndex: '1',
                // border: 'solid'

            }}>


                <CardContent sx={{
                    flex: '1 0 auto',

                    // border: 'solid brown'
                }}>
                    {currentRecords.map((d, k) => {
                        // console.log(d, k);
                        return (
                            < TypographyLay key={k}>
                                <Typography sx={{ textAlign: { xs: 'center', md: 'left' }, color: 'rgb(25, 235, 224)' }} component="div" variant="h5">
                                    {d.heading}
                                </Typography>
                                {d.para}
                            </TypographyLay>
                        )
                    })}

                </CardContent>
                {mblMode == "on" &&
                    <PaginationLP setMaxPaginLimit={setMaxPaginLimit} setMinPaginLimit={setMinPaginLimit} maxPaginLimit={maxPaginLimit} minPaginLimit={minPaginLimit} nPages={nPages} currentPage={currentPage} setCurrentPage={setCurrentPage} totalT={props.userContent.length} />
                }
            </Box>

        </Card >
    )
}

export default AboutUs;