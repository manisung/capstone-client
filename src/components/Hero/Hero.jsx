import "./Hero.scss";
import heroPhoto from "../../assets/images/hero.jpg"

function Hero() {
    return(
        <div className="hero">
        <img className="hero__image" src={heroPhoto} alt="Yumi Chung Cover Photo"/>
        </div>
    )
}

export default Hero;