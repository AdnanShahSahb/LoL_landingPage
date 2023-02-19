import { Box, Card } from "@mui/material"
import WhyBuyUsCard from "./whyBuyUsCard/WhyBuyUsCard"

const WhyBuyUsContent = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <WhyBuyUsCard />
            <WhyBuyUsCard />
            <WhyBuyUsCard />
            <WhyBuyUsCard />
        </Box>
    )
}
export default WhyBuyUsContent