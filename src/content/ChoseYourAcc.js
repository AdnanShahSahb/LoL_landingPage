import { Button, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const ChoseYourAcc = (props) => {


    // console.log(props.pic);

    if (props.data == undefined) { }
    else {

        return (
            <Card className="fontingStandard" sx={{
                width: 345, margin: '10px', backgroundColor: '#242625',

            }
            }>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={props.data.pic}
                        alt="green iguana"
                    />
                    <Button sx={{ position: 'absolute', backgroundColor: 'rgb(25, 235, 224)', top: '10%', left: '0', height: '30px', borderTopLeftRadius: '0', borderBottomLeftRadius: '0', fontWeight: 'bold' }} variant='contained'>
                        {props.data && props.data.server}
                    </Button>
                    <Typography position="absolute" color="#fff" top="20%" left="0" bottom="0" right="0" margin="auto auto" gutterBottom variant="h5" component="div">
                        <Typography>
                            {props.data && props.data.price}
                        </Typography>
                        <Button sx={{ mt: "10px", backgroundColor: '#AA336A' }} variant='contained'>
                            Order Now
                        </Button>
                    </Typography>
                    <CardContent>

                        <Typography variant="body2" color="#fff" textAlign='left' display="flex">
                            <Typography sx={{
                                margin: ' 0',
                                fontFamily: '"Roboto", "Helvetica", "Arial", sans - serif',
                                fontWeight: '400',
                                fontSize: '0.875rem',
                                lineHeight: '1.43',
                                letterSpacing: '0.01071em',
                                color: '#fff',
                                border: 'solid #242625'
                            }} >
                                {props.data && props.data.para}
                            </Typography>
                            <KeyboardArrowRightIcon sx={{ color: 'rgb(25, 235, 224)' }} />
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card >
        )
    }

}
export default ChoseYourAcc;