import React from "react";
import "./Footer.css";
import ScrollAnimation from "react-animate-on-scroll";

const Footer = () => {
  return (
   <div className="wraping">
      <footer className="footer" id="contact">
      <h1>Contact</h1>
      <p><i className="fas fa-phone fa-spin fa-1x">  </i>   <a href="tel:9717390014">+919717390014</a></p>
      <ScrollAnimation
        animateIn="bounce"
        initiallyVisible={true}
        animateOnce={true}
      >
        <div className="social-links">
          <a  rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/devender0014/">
            <i className="fab fa-linkedin"></i>
          </a>
          <a  rel="noreferrer" target="_blank" href="https://www.instagram.com/dev_yadav0014/">
            <i className="fab fa-instagram"></i>
          </a>
          <a  rel="noreferrer" target="_blank" href="mailto: yadav0014dev@gmail.com">
            <i
              className="fa fa-envelope"
              style={{ fontSize: "34px", color: "white" }}
            ></i>
          </a>
          <a  rel="noreferrer" target="_blank" href="https://github.com/Devender0014">
            <i className="fab fa-github"></i>
          </a>
          <a  rel="noreferrer" target="_blank" href="https://www.facebook.com/devender.yadav.503645">
            <i style={{ fontSize: "32px", color: "white" }} className="fa fa-facebook-official"></i>
          </a>
        </div>
      </ScrollAnimation>
      <p style={{ color: "white", margin: "1rem", paddingTop: "2rem" }}>
        Devender Yadav &copy; 2022
      </p>
    </footer>
   </div>
  );
};

export default Footer;
