import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"
const WhyBuyUs = (p) => {
    return (
        <Card sx={{
            maxWidth: 345,
            margin:'auto',
            borderRadius: '0px',
            background:'transparent',


        }}>

            <CardActionArea sx={{
                textAlign: 'center',
            }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={p.media}
                    alt="green iguana"
                    sx={{
                        //    border:'solid',
                        borderRadius: '100px',
                        width: '140px',
                        // border: 'solid',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        padding:'10px',
                    }}

                />
                <CardContent sx={{
                    // border:'solid',
                    // backgroundColor: 'gray',

                    height:{xs:'auto',sm:'35vh'},
                    background: 'rgba(60, 60, 60, 0.5)',
                    WebkitBackdropFilter: 'blur(1px)',
                    backdropFilter: 'blur(1px)',
                    // border: '1px solid rgba(255,255,255,0.25)',
                    overflowY:'auto',
                    
                }}>
                    <Typography variant="body2" color="#fff" >
                        <Typography color="rgb(25, 235, 224)" fontWeight='bold' marginBottom='10px'>{p.heading}</Typography>

                        {p.body}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card >
    )
}
export default WhyBuyUs