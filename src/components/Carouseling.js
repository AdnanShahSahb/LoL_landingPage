import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Button, ButtonGroup, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import zed from "../gifs/zedWppr.png"

const Carouseling = (props) => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    // const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    //     const { carouselState: { currentSlide } } = rest;
    //     return (
    //         <div style={{position:'abolute'}} className="carousel-button-group"> // remember to give it position:absolute
    //             <Button className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} />
    //             <Button onClick={() => next()} />
    //             <Button onClick={() => goToSlide(currentSlide + 1)}> Go to any slide </Button>
    //         </div>
    //     );
    // };


    return (

        <Carousel
            swipeable={false}
            draggable={false}
            // ssr={true} // means to render carousel on server-side.
            infinite={true}
            showDots={true}
            // autoPlay={props.deviceType !== "mobile" ? true : false}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            // removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType={props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            responsive={responsive}
        // arrows={true}
        // renderButtonGroupOutside={true}
        // customButtonGroup={<ButtonGroup />}
        >
            <div>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={zed}
                            alt="green iguana"
                        />
                        <Button sx={{ position: 'absolute', top: '10%', left: '0', height: '30px', borderTopLeftRadius: '0', borderBottomLeftRadius: '0' }} variant='contained'>
                            OCE
                        </Button>
                        <Typography position="absolute" color="#fff" top="20%" left="0" bottom="0" right="0" margin="auto auto" gutterBottom variant="h5" component="div">
                            <Typography>
                                Starting at 49.88 $
                            </Typography>
                            <Button sx={{ mt: "10px" }} variant='contained'>
                                asdf
                            </Button>
                        </Typography>
                        <CardContent>

                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
            <div>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={zed}
                            alt="green iguana"
                        />
                        <Button sx={{ position: 'absolute', top: '10%', left: '0', height: '30px', borderTopLeftRadius: '0', borderBottomLeftRadius: '0' }} variant='contained'>
                            OCE
                        </Button>
                        <Typography position="absolute" color="#fff" top="20%" left="0" bottom="0" right="0" margin="auto auto" gutterBottom variant="h5" component="div">
                            <Typography>
                                Starting at 49.88 $
                            </Typography>
                            <Button sx={{ mt: "10px" }} variant='contained'>
                                zxcv
                            </Button>
                        </Typography>
                        <CardContent>

                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
            <div>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={zed}
                            alt="green iguana"
                        />
                        <Button sx={{ position: 'absolute', top: '10%', left: '0', height: '30px', borderTopLeftRadius: '0', borderBottomLeftRadius: '0' }} variant='contained'>
                            OCE
                        </Button>
                        <Typography position="absolute" color="#fff" top="20%" left="0" bottom="0" right="0" margin="auto auto" gutterBottom variant="h5" component="div">
                            <Typography>
                                Starting at 49.88 $
                            </Typography>
                            <Button sx={{ mt: "10px" }} variant='contained'>
                                Lizard
                            </Button>
                        </Typography>
                        <CardContent>

                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
            
        </Carousel>
    )
}
export default Carouseling