import "./NavBarVertical.scss"
import instagramLogo from "../../assets/icons/instagram-logo.svg"
import facebookLogo from "../../assets/icons/facebook-logo.svg"
import youtubeLogo from "../../assets/icons/youtube-logo.svg"
import { Link } from "react-router-dom";

function NavBarVertical() {
    return (
        <div className="navbar-vertical">
        <div>
            <ul>
                <Link><li>about</li></Link>
                <Link><li>videos</li></Link>
                <Link><li>events</li></Link>
                <Link><li>store</li></Link>
                <Link to="/members"><li>members</li></Link>
            </ul>
        </div>
        <div className="logo-wrapper">
        <img className="instagram-logo" src={instagramLogo} alt="Instagram Logo" />
        <img className="facebook-logo" src={facebookLogo} alt="Facebook Logo" />
        <img className="youtube-logo" src={youtubeLogo} alt="Youtube Logo" />
        </div>
        </div>
    )
}

export default NavBarVertical;