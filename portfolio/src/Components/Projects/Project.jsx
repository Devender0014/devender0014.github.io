import "./project.css";
import ScrollAnimation from "react-animate-on-scroll";
import dremstore from "../../images/Screenshot 2022-12-19 at 2.44.17 PM.png";
import bebo from "../../images/Screenshot 2022-12-19 at 2.37.50 PM.png";
import nedmeds from "../../images/Screenshot 2022-12-19 at 2.32.42 PM.png";
const Project = ({ elem }) => {
  return (
    <div ref={elem} className="project">
        <ScrollAnimation animateOnce={true} animateIn="fadeIn">
      <div className="piroject">
          <h1>Projects</h1>
      </div>
        </ScrollAnimation>
      <ScrollAnimation animateOnce={true} animateIn="fadeIn">
        <div className="box">
          <div className="imgdiv">
            <img className="projectimg" src={nedmeds} alt="" />
          </div>
          <div className="details">
            <div className="linkdiv">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://github.com/Devender0014/Netmeds.com.git"
                className="links"
              >
                GITHUB
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://netmeds-p8vzihywy-devender0014.vercel.app/"
                className="links"
              >
                LIVE
              </a>
            </div>
            <h3 className="heading">Netmeds.com</h3>
            <div className="description">
              <p>
                Netmeds web application gives you the perfect medicine and Skin Care Products of your
                choice. You can filter medicine and Skin Care Products.
              </p>
            </div>
            <div className="btndiv">
              <button>JAVASCRIPT</button>
              <button>CSS</button>
              <button>REACT</button>
            </div>
          </div>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateOnce={true} animateIn="fadeIn">
        <div className="box">
          <img className="projectimg" src={bebo} alt="" />
          <div className="details">
            <div className="linkdiv">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://github.com/Devender0014/Beauty-Bebo-Clone.git"
                className="links"
              >
                GITHUB
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://beauty-bebo-clone-theta.vercel.app/"
                className="links"
              >
                LIVE
              </a>
            </div>
            <h3 className="heading">Beautybebo.com</h3>
            <div className="description">
              <p>
                A web application which provides Cosmetics and Beauty Products
              </p>
            </div>
            <div className="btndiv">
              <button>HTML</button>
              <button>JAVASCRIPT</button>
              <button>CSS</button>
              <button>API</button>
            </div>
          </div>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateOnce={true} animateIn="fadeIn">
        <div className="box">
          {/* <div className="imgdiv"> */}
          <img className="projectimg" src={dremstore} alt="" />
          {/* </div> */}
          <div className="details">
            <div className="linkdiv">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://github.com/Devender0014/plausible-porter-6646.git"
                className="links"
              >
                GITHUB
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://startling-faun-c1e812.netlify.app/"
                className="links"
              >
                LIVE
              </a>
            </div>
            <h3 className="heading">DremStore</h3>
            <div className="description">
              <p>
              Dermstore is US web store which sells cosmetics and skin care products.
              </p>
            </div>
            <div className="btndiv">
              <button>REACT</button>
              <button>JAVASCRIPT</button>
              <button>CSS</button>
            </div>
          </div>
        </div>
      </ScrollAnimation>
      
    </div>
  );
};

export default Project;
