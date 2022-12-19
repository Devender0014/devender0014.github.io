import React from "react";
import ReactLogo from "../../images/react.png"
import cssLogo from "../../images/css.png"
import expressLogo from "../../images/express.png"
import htmlLogo from "../../images/html.png"
import materialui from "../../images/mui.png"
import mongodbLogo from "../../images/mongodb.png"
import javascriptLogo from "../../images/javascript.png"
import nodeLogo from "../../images/node-js.png"
import gitLogo from "../../images/git.png"
import ScrollAnimation from "react-animate-on-scroll";
import "./Skills.css";
import tailwind from "../../images/tailwind.png";
import redux from "../../images/redux.png";
const Skills = ({ elem }) => {
  return (
    <>
      <ScrollAnimation animateIn="bounceInLeft" animateOnce={true} animateOut="bounceOutRight">
        <h1 ref={elem}>SKILLS AND TOOLS</h1>
        <div className="skillSection">
          <div className="section">
            <img src={redux} alt="" />
            <h3>REDUX</h3>
          </div>
          <div className="section">
            <img src={tailwind} alt="" />
            <h3>TAILWIND</h3>
          </div>
          <div className="section">
            <img src={ReactLogo} alt="" />
            <h3>REACT</h3>
          </div>
          <div className="section">
            <img src={expressLogo} alt="" />
            <h3>EXPRESS</h3>
          </div>
          <div className="section">
            <img src={nodeLogo} alt="" />
            <h3>NODE</h3>
          </div>
          <div className="section">
            <img src={htmlLogo} alt="" />
            <h3>HTML</h3>
          </div>
          <div className="section">
            <img src={cssLogo} alt="" />
            <h3>CSS</h3>
          </div>
          <div className="section">
            <img src={javascriptLogo} alt="" />
            <h3>JAVASCRIPT</h3>
          </div>
          <div className="section">
            <img src={mongodbLogo} alt="" />
            <h3>MONGODB</h3>
          </div>
          <div className="section">
            <img src={materialui} alt="" />
            <h3>MATERIALUI</h3>
          </div>
          <div className="section">
            <img src={gitLogo} alt="" />
            <h3>GIT</h3>
          </div>
        </div>
      </ScrollAnimation>
    </>
  );
};

export default Skills;
