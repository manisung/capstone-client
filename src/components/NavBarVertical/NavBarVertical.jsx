import "./NavBarVertical.scss";
import instagramLogo from "../../assets/icons/instagram-logo.svg";
import facebookLogo from "../../assets/icons/facebook-logo.svg";
import youtubeLogo from "../../assets/icons/youtube-logo.svg";
import { Link } from "react-router-dom";
import closeIcon from "../../assets/icons/close-circle.svg";

function NavBarVertical(props) {
  console.log("props", props);

  return (
    <div className={`navbar-vertical ${props.className}`}>
      <div onClick={props.onClick}>
        <img className="close-icon" src={closeIcon} alt="Close Icon" />
      </div>
      <div>
        <ul>
          <Link
            className="navbar-vertical__no-text-decoration"
            onClick={props.onClick}
            to="/about"
          >
            <li>about</li>
          </Link>
          <Link
            className="navbar-vertical__no-text-decoration"
            onClick={props.onClick}
            to="/videolist"
          >
            <li>videos</li>
          </Link>
          <Link
            className="navbar-vertical__no-text-decoration"
            onClick={props.onClick}
            to="/events"
          >
            <li>events</li>
          </Link>
          <Link
            className="navbar-vertical__no-text-decoration"
            onClick={props.onClick}
            to="/store"
          >
            <li>store</li>
          </Link>
          <Link
            className="navbar-vertical__no-text-decoration"
            onClick={props.onClick}
            to="/members"
          >
            <li>members</li>
          </Link>
          <Link
            className="navbar-vertical__no-text-decoration"
            onClick={props.onClick}
            to="/user"
          >
            <li>My Information</li>
          </Link>
       
        </ul>
      </div>
      <div className="logo-admins-wrapper">
      <div className="logo-wrapper">
      <a href="https://instagram.com/yumichung1221?igshid=MzRlODBiNWFlZA==">
          <img
            className="instagram-logo"
            src={instagramLogo}
            alt="Instagram Logo"
          />
        </a>
        <img className="facebook-logo" src={facebookLogo} alt="Facebook Logo" />
        <a href="https://youtube.com/@yumichung1221?si=v08ze49mA3KNPYSv">
          <img className="youtube-logo" src={youtubeLogo} alt="Youtube Logo" />
        </a>
        </div>
        <Link
            className="navbar-vertical__no-text-decoration navbar-vertical__admins"
            onClick={props.onClick}
            to="/admins/1"
          >
            Adminstrator Log In
      </Link>
      </div>
     
    </div>
  );
}

export default NavBarVertical;
