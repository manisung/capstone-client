import NavBarVertical from "../NavBarVertical/NavBarVertical";
import "./NavBar.scss";
import { Link } from "react-router-dom";
import React from "react";

function NavBar() {
  return (
    <>
      <div className="title-wrapper">
        <Link to="/" className="title"><div>yumi chung</div></Link>
        <div onClick="" className="navigation-menu">
          <div className="first-bar"></div>
          <div className="second-bar"></div>
          <div className="third-bar"></div>
          <div className="fourth-bar"></div>
          <div className="fifth-bar"></div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
