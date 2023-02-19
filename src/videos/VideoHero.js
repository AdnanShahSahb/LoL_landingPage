
import { useEffect } from "react";
// import asdf from "../videos/LoL.gif"
import "../videos/videoHero.css"

const VideoHero = () => {

    useEffect(() => {
        document.getElementById("myVideo").play();
    }, [])

    return (
        <video className="video" autoPlay muted loop id="myVideo" width='80%' >
            {/* <source src={asdf} type="video/mp4" /> */}
        </video>
    )
}
export default VideoHero