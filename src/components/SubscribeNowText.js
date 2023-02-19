import { Box, Button, FormControl, IconButton, Input, InputAdornment, InputLabel, OutlinedInput, Typography } from "@mui/material"

const SubscribeNowText = () => {
    return (

        <Box sx={{
            // border: 'solid',
            color: '#fff',
            width: '50vw',
            textAlign: 'center',
            ml: 'auto',
            mr: 'auto',
        }}>

            <Typography sx={{ color: '#fff', fontSize: '10px' }}>A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity</Typography>
            <Typography sx={{ fontSize: '10px' }}><span style={{ color: '#19ebe0', }}>Subscribe To Our New Letter And </span>Be The First To Know</Typography>

            <Box sx={{
                display: 'flex', width: '400px', m: 'auto',
                // boxShadow: ' 0 1px 4px #fff, 0 0 40px rgba(0, 0, 0, 0.1) inset',
                color: 'primary',
            }}>
                <FormControl sx={{ m: 1, width: '25ch', }} variant="outlined">

                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    edge="end"
                                >
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Email"
                    />

                </FormControl>
                <Button variant="contained" sx={{ m: 1 }}>Subscribe</Button>
            </Box>
        </Box>
    )

}
export default SubscribeNowText