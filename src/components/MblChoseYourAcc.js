import { useEffect } from "react";
import ChoseYourAcc from "../content/ChoseYourAcc";

const MblChoseYourAcc = (props) => {
    
    return (

        props.deskContents.map((d, k) => {
            return (
                <div key={k} id="swipingCard" className={`carousel-item ${k == 0 && 'active'}`}>
                    <div className={`row d-flex justify-content-center `}>
                        <ChoseYourAcc data={props.deskContents[k]} />
                    </div>
                </div>
            )

        })
    )

}
export default MblChoseYourAcc;