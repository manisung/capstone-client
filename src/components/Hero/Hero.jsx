import "./Hero.scss";
import landingVideo from "../../assets/videos/landingvideo-v.MOV"
// import landingVideo from "../../assets/videos/landing-video.MP4"





function Hero() {

    return(
        <div className="hero">
        {/* <img className="hero__image" src={heroPhoto} alt="Yumi Chung Cover Photo"/> */}
        <video src={landingVideo}  id="landing-video" className="hero__video" type="video/mp4" controls muted autoPlay playsinline loop preload="auto"></video>
        <div id="text" className="hero__video--welcome">Welcome to <br/>Yumi Chung<br/>Official Website</div>
        </div>
    )
}

export default Hero;