
import styled from "@emotion/styled";
import { Box } from "@mui/system";
import Carouseling from "../content/Carouseling";
import { TypographyHeading } from "../App";
import AddingMargin from "../components/AddingMargin";

const ChoseAccPage = ({ p1, p2 ,id}) => {
    const CAPBox = styled(Box)({
        // border: 'solid',
        zIndex:'1'
    })
    return (
        <CAPBox id={id}>
            <AddingMargin />

            <TypographyHeading>
                <span style={{ color: '#19ebe0', }}>{p1} </span>{p2}
            </TypographyHeading>

            
            <Carouseling />
        </CAPBox>

    )
}
export default ChoseAccPage;

