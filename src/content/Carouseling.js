
import ChoseYourAcc from "./ChoseYourAcc";
import zed from "../gifs/zedWppr.png"
import DeskChoseYourAcc from "../components/DeskChoseYourAcc";
import MblChoseYourAcc from "../components/MblChoseYourAcc";
import { useEffect, useState } from "react";
import "./carouseling.css"
import "./ccc"
import useSliding from "../components/addingSlidingMbl";

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
    let inc = 0;

    const contents = [
        { server: 'OCE', price: 'Starting at 22.99$', para: 'We understand the real feedback matters.' },
        { server: 'NA', price: 'Starting at 13.99$', para: 'We understand the real feedback matters.' },
        { server: 'EUW', price: 'Starting at 23.99$', para: 'We understand the real feedback matters.' },
        { server: 'EUNE', price: 'Starting at 44.99$', para: 'We understand the real feedback matters.' },
        { server: 'LAS', price: 'Starting at 44.99$', para: 'We understand the real feedback matters.' },
        { server: 'LAN', price: 'Starting at 44.99$', para: 'We understand the real feedback matters.' },
        { server: 'SNG', price: 'Starting at 44.99$', para: 'We understand the real feedback matters.' },
    ]

    const deskhighlightingBar = contents.map((d, k) => {
        if (k < contents.length / 3) {
            return (
                <li data-target="#carouselExampleIndicators" data-slide-to={k} className={`${k == 0 && 'active'}`}></li>
            )
        }
    })

    const mblhighlightingBar = contents.map((d, k) => {
        if (k < contents.length) {
            return (
                <li data-target="#carouselExampleIndicators" data-slide-to={k} className={`${k == 0 && 'active'}`}></li>
            )
        }
    })

    const [view, setView] = useState('desk')
    useEffect(() => {
        if (window.innerWidth < 600)
            setView('mbl')
        else
            setView('desk')
    }, [window.innerWidth])


    useSliding();   //added touch for mbl



    return (

        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" data-touch="true">
            <div className="carousel-inner ">
                {
                    view == 'desk' ? <DeskChoseYourAcc deskContents={contents} /> : <MblChoseYourAcc deskContents={contents} />
                }
            </div>
            <br />
            <br />
            <ol className="carousel-indicators position-relative">


                {
                    view == 'desk' ? deskhighlightingBar : mblhighlightingBar
                }

            </ol>


            <a id="swipeR" className="carousel-control-prev  " style={{ width: '4%',  height: '220px', display: view == 'mbl' && 'none' }} href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon " aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a id="swipeL" className="carousel-control-next" style={{ width: '4%',  height: '220px', display: view == 'mbl' && 'none' }} href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon " aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div >
    )
}
export default Carouseling