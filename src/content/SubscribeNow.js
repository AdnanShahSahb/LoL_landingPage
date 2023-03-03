import { Box, Button, FormControl, IconButton, Input, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from "@mui/material"
import './subscribeNow.css'

const SubscribeNow = () => {
    return (

        <Box sx={{
            // border: 'solid yellow',
            color: '#fff',
            width: {xs:'90vw',sm:'40vw'},
            textAlign: 'center',
            ml: 'auto',
            mr: 'auto',
            mb: '150px',
            // opacity:'1'
        }}>

            <Typography sx={{ padding: '10px', color: '#fff', fontSize: '12px', textAlign: ' center', margin: '10px auto ', }}>
                A paragraph is a series of related sentences developing a central idea, called the topic.
                <br />
                Try to think about paragraphs in terms of thematic unity
            </Typography>
            <Typography sx={{ fontSize: '15px', color: '#19ebe0', textTransform: 'uppercase', fontFamily: 'monospace' }}>
                Subscribe To Our New Letter And Be The First To Know
            </Typography>

            <Box sx={{
                display: 'flex',
                m: '50px auto ',
                // border: 'solid brown',
                // background: 'transparent',
                // padding: '40px',
                // boxShadow: ' 0 1px 4px #fff, 0 0 40px rgba(0, 0, 0, 0.1) inset',
                color: 'primary',
                height: '40px'

            }}>


                {/* <TextField id="outlined-search" label="Search field" type="search" sx={{ background: 'transparent', width: '35vw' }} /> */}
                <input type='text' style={{ width: '80%' }} />
                <Button sx={{
                    // mt: '25px',
                    backgroundColor: '#AA336A',
                    color: '#fff',
                }}>Subscribe</Button>
                {/* <Button variant="contained" sx={{ width: '15vw', }}>Subscribe</Button> */}
            </Box>
        </Box>
    )

}
export default SubscribeNow