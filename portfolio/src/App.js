import "./App.css";
import Project from "./Components/Projects/Project";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import AboutMe from "./Components/AboutME/About";
import React, { useRef } from "react";
import { BrowserRouter } from "react-router-dom";
import Skills from "./Components/Skills/Skills";
import BackgroundAnimation from "./Components/Background/Background";
import MainSection from "./Components/MainSection/MainSection";
// import GitHubCalendar from "react-github-calendar";
import { GithubCalender } from "./Components/GithubCalender/GithubClaender";
function App() {
	const elemRef = useRef(false)
	const skillRef = useRef(false)
	return (
		<BrowserRouter>
			<div className="App">
				<Navbar elem={elemRef} skillRef={skillRef} />
				<div className="animation-container" id="home">
					<BackgroundAnimation />
				</div>
				<MainSection />
				<AboutMe />
				<Project elem={elemRef} />
				<Skills elem={skillRef} />
				<GithubCalender/>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
