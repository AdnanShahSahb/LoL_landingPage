
import ChoseYourCard from "./ChoseYourAcc";
import zed from "../gifs/zedWppr.png"

const Carouseling = (props) => {

    // const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    //     const { carouselState: { currentSlide } } = rest;
    //     return (
    //         <div style={{position:'abolute'}} className="carousel-button-group"> // remember to give it position:absolute
    //             <Button className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} />
    //             <Button onClick={() => next()} />
    //             <Button onClick={() => goToSlide(currentSlide + 1)}> Go to any slide </Button>
    //         </div>
    //     );
    // };

    return (

        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner ">

                <div className="carousel-item active ">
                    <div className="row d-flex justify-content-center ">
                        <ChoseYourCard />
                        <ChoseYourCard />
                        <ChoseYourCard />
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="row d-flex justify-content-center">
                        <ChoseYourCard />
                        <ChoseYourCard />
                        <ChoseYourCard />
                    </div>
                </div>
                <div className="carousel-item ">
                    <div className="row d-flex justify-content-center">
                        <ChoseYourCard />
                        <ChoseYourCard />
                        <ChoseYourCard />
                    </div>
                </div>
            </div>
            <br />
            <br />
            <ol className="carousel-indicators position-relative">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <a className="carousel-control-prev  " style={{width:'4%'}}  href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon " aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" style={{width:'4%'}} href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon " aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}
export default Carouseling