import ChoseYourAcc from "../content/ChoseYourAcc";

const DeskChoseYourAcc = (props) => {

    return (

        props.deskContents.map((d, k) => {
            const newK = k * 3;
            if (newK < props.deskContents.length) {
                // console.log(props.deskContents[0]);
                console.log(props.deskContents[newK]);
                console.log(newK);
                return (
                    <div className={`carousel-item ${k == 0 && 'active'}`}>
                        <div className={`row d-flex justify-content-center `}>
                            <ChoseYourAcc data={props.deskContents[newK]} />
                            <ChoseYourAcc data={props.deskContents[newK + 1]} />
                            <ChoseYourAcc data={props.deskContents[newK + 2]} />
                        </div>
                    </div>
                )
            }

        })
    )

}
export default DeskChoseYourAcc;