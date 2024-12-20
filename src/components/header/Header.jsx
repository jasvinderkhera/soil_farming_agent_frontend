import React, { useState } from "react";
import "./Header.css";
import { images } from "../../constants/imagePath";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSelector } from "react-redux";
import { auth } from "../../firebase/firebase";

function Header() {
  const [user] = useAuthState(auth);
  const [display, setDisplay] = useState("hide");
  const toggleMenu = () => {
    if (display === "hide") {
      setDisplay("show");
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
      setDisplay("hide");
    }
  };

  return (
    <div>
      <div className="header-outer-container d-none d-md-block">
        <div className="center-container container header py-3 px-3 ">
          <div className="upperNav w-100 d-flex justify-content-between align-items-center">
            <div className="logo">
              <Link to="/" className="nav-link">
                <img src={images.vectorLogo} alt="" className=" logoImage" />
              </Link>
            </div>
            <div className="menus d-flex gap-3">
              
              <div className="menuItem">
                <Link to="/contact" className="p-3 nav-link">
                  Contact Us
                </Link>
              </div>
              <div className="menuItem">
                <a href="#features" className="p-3 nav-link">
                  Features
                </a>
              </div>
            </div>
          </div>
          <div className="container d-flex justify-content-center gap-5 p-2 align-items-center lowerNav light-bg">
            <a href="" className="nav-link">
              Notice
            </a>
            <Link to="login" className="nav-link">
              {!user ? "Login/Register" : "Dashboard"}
            </Link>
            <Link to="login" className="nav-link">
              Schemes
            </Link>
            <Link to="crop" className="nav-link">
              Crops
            </Link>
            <Link to="act-rules" className="nav-link">
              Act & Rules
            </Link>
            <a href="https://agriwelfare.gov.in/" target="_blank" className="nav-link">
              Related Links
            </a>
            <a href="" className="nav-link">
              About
            </a>
          </div>
        </div>
      </div>
      <div className="homepage_mobileMenu align-items-center d-flex justify-content-between d-md-none">
        <img src={images.vectorLogo} alt="" className="img-fluid mobileLogo" />
        <img
          src={images.mobileMenu}
          alt=""
          className="img-fluid menuLogo"
          onClick={toggleMenu}
        />
      </div>
      <div
        className="mobileMenuItems"
        style={display === "show" ? { display: "block" } : { display: "none" }}
      >
        <div className="menuItems mt-5">

        <a href="" className="nav-link p-3 text-white fs-5 fw-bold">
            Notice
          </a>
          <Link to="login" className="nav-link p-3 text-white fs-5 fw-bold">
            {!user ? "Login/Register" : "Dashboard"}
          </Link>
          <Link to="login" className="nav-link p-3 text-white fs-5 fw-bold">
            Schemes
          </Link>
          <a href="" className="nav-link p-3 text-white fs-5 fw-bold">
            Crops
          </a>
          <Link to="act-rules" className="nav-link p-3 text-white fs-5 fw-bold">
            Act & Rules
          </Link>
          <Link to="/contact" className="nav-link p-3 text-white fs-5 fw-bold">
            Contact Us
          </Link>
          <Link to="#features" className="nav-link p-3 text-white fs-5 fw-bold">
            Features
          </Link>
         
        </div>
      </div>
    </div>
  );
}

export default Header;
