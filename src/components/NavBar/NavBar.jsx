import NavBarVertical from "../NavBarVertical/NavBarVertical";
import "./NavBar.scss";
import { Link } from "react-router-dom";
import React from "react";
import { useState } from "react";

function NavBar() {

  const [isHidden, setIsHidden] = useState(true);

  function handleToggle() {
    setIsHidden(!isHidden);
  };

  console.log("state", isHidden);

  return (
    
    <>
      <div className="title-wrapper">
        <Link to="/" className="title"><div>yumi chung</div></Link>
        <div onClick={handleToggle} className="navigation-menu">
          <div className="first-bar"></div>
          <div className="second-bar"></div>
          <div className="third-bar"></div>
          <div className="fourth-bar"></div>
          <div className="fifth-bar"></div>
        </div>
        <NavBarVertical onClick={handleToggle} className={isHidden? "hidden" : ""}/>
      </div>
    </>
  );
}

export default NavBar;
