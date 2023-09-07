import "./Hero.scss";
import landingVideo from "../../assets/videos/landingvideo-v.MOV"

function Hero() {

    return(
        <div className="hero">
        <video src={landingVideo}  id="landing-video" className="hero__video" type="video/mp4" controls muted autoPlay playsInline loop preload="auto"></video>
        <div id="text" className="hero__video--welcome">Welcome to <br/>Yumi Chung<br/>Official Website</div>
        </div>
    )
}

export default Hero;