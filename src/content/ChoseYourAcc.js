import { Button, ButtonGroup, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import zed from "../gifs/zedWppr.png"
const ChoseYourAcc = () => {
    return (
        <Card sx={{ width: 345, border:'solid brown', margin:'10px'}}>
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
    )
}
export default ChoseYourAcc;