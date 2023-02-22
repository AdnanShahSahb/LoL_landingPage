import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"
import zed from "../../gifs/zedWppr.png"
const WhyBuyUsCard = () => {
    return (
        <Card sx={{
            maxWidth: 345,
            // border: 'solid blue',
            borderRadius: '0px',
            background:'transparent',


        }}>

            <CardActionArea sx={{
                textAlign: 'center'
            }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={zed}
                    alt="green iguana"
                    sx={{
                        //    border:'solid',
                        borderRadius: '100px',
                        width: '140px',
                        // border: 'solid',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        padding:'10px'
                    }}

                />
                <CardContent sx={{
                    // border:'solid'
                    backgroundColor: 'gray',

                    background: 'rgba(255, 255, 255, 0.5)',
                    WebkitBackdropFilter: 'blur(1px)',
                    backdropFilter: 'blur(1px)',
                    // border: '1px solid rgba(255,255,255,0.25)',
                }}>
                    <Typography variant="body2" color="text.secondary">
                        <Typography variant="h5">asdf</Typography>
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card >
    )
}
export default WhyBuyUsCard