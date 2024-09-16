import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";
import { Title } from "./Title";

export const Projects = () => {
  return (
    <>
      {" "}
      <section id="projects">
        <div className="projects ">
          <Title title="Projects" />
          <div className="project-container container">
            <div className="project-card container">
              <div className="top">
                <img src={project2} alt="" />
              </div>
              <div className=" flex bottom container">
                <div className="links">
                  <a href="https://github.com/kabindrr/React-Movie_World.git">
                    <i
                      className="fa-brands fa-github"
                      style={{ color: "gray" }}
                    ></i>
                  </a>

                  <a href="https://react-movie-world-9sne.vercel.app/">
                    <i
                      className="fa-brands fa-chrome"
                      style={{ color: "yellow" }}
                    ></i>
                  </a>
                </div>
                <h3>Movie World</h3>
                <p>TechStack: Html, Css, Figma, JavaScript</p>
              </div>
            </div>
            <div className="project-card container">
              <div className="top">
                <img src={project4} alt="" width="100%" />
              </div>
              <div className=" flex bottom container">
                <div className="links">
                  <a href="https://github.com/kabindrr/Beer-count-app.git">
                    <i
                      className="fa-brands fa-github"
                      style={{ color: "gray" }}
                    ></i>{" "}
                  </a>

                  <a href="https://beer-count-app.vercel.app">
                    <i
                      className="fa-brands fa-chrome"
                      style={{ color: "yellow" }}
                    ></i>
                  </a>
                </div>
                <h3>Count Your Beer</h3>
                <p>TechStack: Html, Css, Figma, JavaScript</p>
              </div>
            </div>
            <div className="project-card container">
              <div className="top">
                <img src={project1} alt="" width="100%" />
              </div>
              <div className=" flex bottom container">
                <div className="links">
                  <a href="https://github.com/kabindrr/PersonalBlog.git">
                    <i
                      className="fa-brands fa-github"
                      style={{ color: "gray" }}
                    ></i>
                  </a>

                  <a href="https://personal-blog-ashy.vercel.app/">
                    <i
                      className="fa-brands fa-chrome"
                      style={{ color: "yellow" }}
                    ></i>
                  </a>
                </div>
                <h3>Trave Blog</h3>
                <p>TechStack: Html, Css, Figma</p>
              </div>
            </div>
            <div className="project-card container">
              <div className="top">
                <img src={project3} alt="" width="100%" />
              </div>
              <div className=" flex bottom container">
                <div className="links">
                  <a href="https://github.com/kabindrr/RandomContactList.git">
                    <i
                      className="fa-brands fa-github"
                      style={{ color: "gray" }}
                    ></i>
                  </a>

                  <a href="https://random-contact-list-three.vercel.app/">
                    <i
                      className="fa-brands fa-chrome"
                      style={{ color: "yellow" }}
                    ></i>
                  </a>
                </div>
                <h3>Random Contact List</h3>
                <p>TechStack: Html, Css, Figma, JavaScript</p>
              </div>
            </div>
            <div className="project-card container">
              <div className="top">
                <img src={project6} alt="" width="100%" />
              </div>
              <div className=" flex bottom container">
                <div className="links">
                  <a href="https://github.com/kabindrr/ReactPrankCalculator.git">
                    <i
                      className="fa-brands fa-github"
                      style={{ color: "gray" }}
                    ></i>
                  </a>

                  <a href="https://react-prank-calculator-tau.vercel.app/">
                    <i
                      className="fa-brands fa-chrome"
                      style={{ color: "yellow" }}
                    ></i>
                  </a>
                </div>
                <h3>Prank Calculator</h3>
                <p>TechStack: Html, Css, Figma, JavaScript</p>
              </div>
            </div>
            <div className="project-card container">
              <div className="top">
                <img src={project5} alt="" width="100%" />
              </div>
              <div className=" flex bottom container">
                <div className="links">
                  <a href="https://github.com/kabindrr/SolarSystem.git">
                    <i
                      className="fa-brands fa-github"
                      style={{ color: "gray" }}
                    ></i>
                  </a>

                  <a href="https://solar-system-topaz.vercel.app/">
                    <i
                      className="fa-brands fa-chrome"
                      style={{ color: "yellow" }}
                    ></i>
                  </a>
                </div>
                <h3>Solar System</h3>
                <p>TechStack: Html, Css, Figma</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
