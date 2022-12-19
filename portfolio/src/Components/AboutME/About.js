import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import proficePic from "../../images/IMG_2262.png"
const AboutMe = () => {
  return (
    <div className="wraping">
      <div className="about-me" id="about">
      <div className="about-me-info">
        <ScrollAnimation animateOnce={true} animateIn="fadeIn">
          <h1>About Me </h1>
        </ScrollAnimation>

        <ScrollAnimation animateOnce={true} animateIn="fadeIn">
        <p>
          I am a FullStack Developer and a curious person who loves to know how
          different things work together. I love to BUILD STUFF and connect with
          people smarter than me!
        </p>
        <p>
          When I am not smashing the keyboard, you will find me playing
          pubg, reading or watching netflix.
        </p>
        <p>Currently I am a student at Masai School.</p>
        </ScrollAnimation>

      </div>
      <div className="profilePic">
        <img
          src={proficePic}
          alt=""
        />
      </div>
    </div>
    </div>
  );
};

export default AboutMe;
