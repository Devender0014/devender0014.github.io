import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
const MainSection = () => {
	return (
		<div className="main-section">
			<ScrollAnimation animateOnce={true}  animateIn="fadeIn">
			<h2 style={{ color: "white" }}>Hii, I Am</h2>
			<ul>
				<li>D</li>
				<li>E</li>
				<li>V</li>
				<li>E</li>
				<li>N</li>
				<li>D</li>
				<li>E</li>
				<li>R</li>
			</ul>
			<h3 className="main-heading">
				I Love <span></span>
			</h3>
			</ScrollAnimation>
		</div>
	);
};

export default MainSection;
