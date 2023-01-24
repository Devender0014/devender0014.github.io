import React, { useState } from "react";
import NavLink from "./NavLink/NavLink";
import { MdMenu } from "react-icons/md";
import "./Navbar.css";
import resume from '../../images/Devender_Yadav_Resume.pdf'


const Navbar = ({ elem,skillRef }) => {
  let [expanded, setExpanded] = useState(false);
  const toggleNavbar = () => {
    setExpanded((prevState) => (expanded = !prevState));
  };

  const hideNavbar = () => {
    setExpanded(false);
  };

  const navLinksState = expanded ? " expanded" : "";
  // const handleResume = () => {
  //   window.location.href =
  //     "https://drive.google.com/file/d/1xCH7iP01UyJZiL6x8yAzBKky1bBDZOON/view?usp=sharing";
  // };
  return (
    <div className="navbar">
      <div className="navbar__content content-container-fluid">
        <a className="navbar__title" href="/">
          <h1>DEVENDER</h1>
        </a>
        <button
          className="navbar__menu"
          onClick={toggleNavbar}
          aria-label="Toggle nav bar"
        >
          <MdMenu />
        </button>
        <div className={`navbar-links${navLinksState}`}>
          <NavLink link="#home" hide={hideNavbar}>
            Home
          </NavLink>
          <NavLink link="#about" hide={hideNavbar}>
            About
          </NavLink>
          <a
            onClick={() => {
              hideNavbar(true);
              elem.current.scrollIntoView({
                behavior: "smooth",
              });
            }}
            href="/#projects"
          >
            Projects
          </a>
          <a onClick={()=>{
              hideNavbar(true);
              skillRef.current.scrollIntoView({
                behavior: "smooth",
              });
          }} href="/#skills" hide={hideNavbar}>
            Skills
          </a>
          <NavLink link="/#contact" hide={hideNavbar}>
            Contact
          </NavLink>
          <a className="resume" download="Devender_Yadav_Resume.pdf" href={resume}>
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
