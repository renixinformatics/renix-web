import React from "react";
import "./Header.css";
import logoIcon from "../../assets/logo/Logo.svg"

function Header(props) {
  return (
    <nav className="navbar renix-nav navbar-expand-lg bg-color">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logoIcon} />
        </a>
        <form className="d-flex form-header-section" role="search">
          <div className="navbar-nav collapse" id="navbarToggleExternalContent">
            <a className="nav-link" aria-current="page" href="#">
              Work
            </a>
            <a className="nav-link" href="#">
              Services
            </a>
            <a className="nav-link" href="#">
              About us
            </a>
            <a className="nav-link ">Blog</a>
            <a className="nav-link " onClick={()=>{props.scrollClicked()}}>Contact</a>
          </div>
        </form>

        {/* </div> */}
      </div>
    </nav>
  );
}

export default Header;
