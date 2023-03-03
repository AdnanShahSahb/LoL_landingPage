import { Button, ButtonGroup, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import zed from "../gifs/zedWppr.png"
const ChoseYourAcc = (props) => {

    
    console.log(props);
    
    if (props.data == undefined) { }
    else {

        return (
            <Card sx={{ width: 345, margin: '10px', }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={zed}
                        alt="green iguana"
                    />
                    <Button sx={{ position: 'absolute', top: '10%', left: '0', height: '30px', borderTopLeftRadius: '0', borderBottomLeftRadius: '0' }} variant='contained'>
                        {props.data && props.data.server}
                    </Button>
                    <Typography position="absolute" color="#fff" top="20%" left="0" bottom="0" right="0" margin="auto auto" gutterBottom variant="h5" component="div">
                        <Typography>
                            {props.data && props.data.price}
                        </Typography>
                        <Button sx={{ mt: "10px" }} variant='contained'>
                            Order Now
                        </Button>
                    </Typography>
                    <CardContent>

                        <Typography variant="body2" color="text.secondary">
                            {props.data && props.data.para}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        )
    }

}
export default ChoseYourAcc;