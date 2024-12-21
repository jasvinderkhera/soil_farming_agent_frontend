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
                <Link to="features" className="p-3 nav-link">
                  Features
                </Link>
              </div>
            </div>
          </div>
          <div className="container d-flex justify-content-center gap-5 p-2 align-items-center lowerNav light-bg">
            <Link to="notice" className="nav-link">
              Notice
            </Link>
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
            <Link to="about" className="nav-link">
              About
            </Link>
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
        <div className="menuItems mt-5 pt-5">

        <Link to="notice" className="nav-link p-3 text-white fs-5 fw-bold" onClick={toggleMenu}>
            Notice
          </Link>
          <Link to="login" className="nav-link p-3 text-white fs-5 fw-bold" onClick={toggleMenu}>
            {!user ? "Login/Register" : "Dashboard"}
          </Link>
          <Link to="login" className="nav-link p-3 text-white fs-5 fw-bold" onClick={toggleMenu}>
            Schemes
          </Link>
          <a href="" className="nav-link p-3 text-white fs-5 fw-bold" onClick={toggleMenu}>
            Crops
          </a>
          <Link to="act-rules" className="nav-link p-3 text-white fs-5 fw-bold" onClick={toggleMenu}>
            Act & Rules
          </Link>
          <Link to="/contact" className="nav-link p-3 text-white fs-5 fw-bold" onClick={toggleMenu}>
            Contact Us
          </Link>
          <Link to="features" className="nav-link p-3 text-white fs-5 fw-bold" onClick={toggleMenu}>
            Features
          </Link>
         
        </div>
      </div>
    </div>
  );
}

export default Header;
