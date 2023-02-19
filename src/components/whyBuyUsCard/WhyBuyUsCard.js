import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"
import zed from "../../gifs/zedWppr.png"
const WhyBuyUsCard = () => {
    return (
        <Card sx={{
            maxWidth: 345,
            border: 'solid blue',
            borderRadius: '0px',


        }}>
            <CardActionArea sx={{
            }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={zed}
                    alt="green iguana"

                />
                <CardContent sx={{
                    border: 'solid yellow',
                    background: 'rgba(0, 0, 0, 0.5)',
                    WebkitBackdropFilter: ' blur(20px)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(0,0,0,0.25)',
                    color: '#fff',
                    borderRadius: '10px',
                    textAlign: 'justify',
                    padding: '10px',
                }}>
                    <Typography variant="body2" color="text.secondary">
                        <Typography variant="h5">asdf</Typography>
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
export default WhyBuyUsCard