import React, { useState,useEffect } from "react";
import { useHistory, Redirect, Route } from "react-router-dom";
import "./Header.css";
import logoIcon from "../../assets/logo/Logo.svg";

function Header(props) {
  const [activeStatus, setActiveStatus] = useState(true);
  const navSelected=window.sessionStorage.getItem("nav")
  const history = useHistory();
  return (
    <nav className="navbar renix-nav navbar-expand-lg bg-color">
      <div className="container-fluid">
        <a className="navbar-brand" href="/" onClick={()=>{
           window.sessionStorage.setItem("nav","")
           setActiveStatus(prev=>"");
        }}>
          <img src={logoIcon} />
        </a>
        <form className="d-flex form-header-section" role="search">
          <div className="navbar-nav collapse" id="navbarToggleExternalContent">
            <a className="nav-link" aria-current="page" href="/"  onClick={()=>{
              window.sessionStorage.setItem("nav","Work")
              setActiveStatus(prev=>"Work");
              history.push("/")
            }}>
              Work
            </a>
            <a className="nav-link" href="/" 
            onClick={()=>{
              window.sessionStorage.setItem("nav","Services")
              setActiveStatus(prev=>"Services");
              history.push("/")
            }}
            >
              Services
            </a>
            <a
              className={`nav-link ${
                navSelected == "Aboutus" ? "isActive" : ""
              }`}
              href="/aboutus"
              onClick={() => {
                window.sessionStorage.setItem("nav","Aboutus")
                setActiveStatus(prev=>"Aboutus");
              }}
            >
              About us
            </a>
            <a className="nav-link " onClick={()=>{
              window.sessionStorage.setItem("nav","Blog")
              setActiveStatus(prev=>"Blog");
              history.push("/")
            }}
            >Blog</a>
            <a
              className={`nav-link ${
                navSelected == "Contact" ? "isActive" : ""
              }`}
              onClick={() => {
                // history.push("/")
                props.scrollClicked();
                window.sessionStorage.setItem("nav","Contact")
                setActiveStatus(prev=>"Contact");
              }}
            >
              Contact
            </a>
          </div>
        </form>

        {/* </div> */}
      </div>
    </nav>
  );
}

export default Header;
