
import DeskChoseYourAcc from "../components/DeskChoseYourAcc";
import MblChoseYourAcc from "../components/MblChoseYourAcc";
import { useEffect, useState } from "react";
import "./carouseling.css"
// import "./ccc"       //TODO
import useSliding from "../components/addingSlidingMbl";
import yasuo from "../assets/carousel_imgs/yasuo.png"
import fiora from "../assets/carousel_imgs/Fiora.png"
import leesin from "../assets/carousel_imgs/leesin.png"
import wukong from "../assets/carousel_imgs/wukong.jpg"
import zed from "../assets/carousel_imgs/zed.png"
import ww from "../assets/carousel_imgs/ww.webp"


const Carouseling = (props) => {

    const [view, setView] = useState('desk')
    useEffect(() => {
        if (window.innerWidth < 600)
            setView('mbl')
        else
            setView('desk')
    }, [window.innerWidth])


    const contents = [
        { pic: yasuo, server: 'OCE', price: 'Starting at 22.99$', para: 'Detailed Information ' },
        { pic: fiora, server: 'NA', price: 'Starting at 13.99$', para: 'Detailed Information ' },
        { pic: wukong, server: 'EUW', price: 'Starting at 23.99$', para: 'Detailed Information ' },
        { pic: leesin, server: 'EUNE', price: 'Starting at 44.99$', para: 'Detailed Information ' },
        { pic: zed, server: 'LAS', price: 'Starting at 44.99$', para: 'Detailed Information ' },
        { pic: ww, server: 'LAN', price: 'Starting at 44.99$', para: 'Detailed Information ' },
        { pic: wukong, server: 'SNG', price: 'Starting at 44.99$', para: 'Detailed Information ' },
    ]

    const deskhighlightingBar = contents.map((d, k) => {
        if (k < contents.length / 3) {
            return (
                <li key={k} data-target="#carouselExampleIndicators" data-slide-to={k} className={`${k === 0 && 'active'}`}></li>
            )
        }
    })

    const mblhighlightingBar = contents.map((d, k) => {
        if (k < contents.length) {
            return (
                <li key={k} data-target="#carouselExampleIndicators" data-slide-to={k} className={`${k === 0 && 'active'}`}></li>
            )
        }
    })



    useSliding();   //added touch for mbl



    return (

        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" data-touch="true">
            <div className="carousel-inner ">
                {
                    view === 'desk' ? <DeskChoseYourAcc deskContents={contents} /> : <MblChoseYourAcc deskContents={contents} />
                }
            </div>
            <br />
            <br />
            <ol className="carousel-indicators position-relative">


                {
                    view === 'desk' ? deskhighlightingBar : mblhighlightingBar
                }

            </ol>


            <a id="swipeR" className="carousel-control-prev  " style={{ width: '4%', height: '220px', display: view === 'mbl' && 'none' }} href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon " aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a id="swipeL" className="carousel-control-next" style={{ width: '4%', height: '220px', display: view === 'mbl' && 'none' }} href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon " aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div >
    )
}
export default Carouseling