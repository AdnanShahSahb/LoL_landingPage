import { Box, Card } from "@mui/material"
import WhyBuyUsCard from "../content/WhyBuyUs"

const WhyBuyUsPage = () => {
    return (
        <>

            Online Grammar and Writing Checker To Help You Deliver Impeccable, Mistake-free Writing. Grammarly Has a Tool For Just About Every Kind Of Writing You Do. Try It Out For Yourself! Find and Add Sources Fast. Eliminate Grammar Errors. Improve Word Choice.
            <br />
            <br />
            <Box sx={{
                // display: 'flex',
                display:{xs:'block',sm:'flex'},
                width:'80%',
                margin:'auto',
                
                // border:'solid brown'

            }}>
                <WhyBuyUsCard />
                <WhyBuyUsCard />
                <WhyBuyUsCard />
                <WhyBuyUsCard />
            </Box>
        </>
    )
}
export default WhyBuyUsPage