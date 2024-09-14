import "./App.css";
import AboutMe from "./assets/AboutMe.png";
import profile from "./assets/profile.png";
import project1 from "./assets/project1.png";
import project2 from "./assets/project2.png";
import project3 from "./assets/project3.png";
import project4 from "./assets/project4.png";
import project5 from "./assets/project5.png";
import project6 from "./assets/project6.png";

const App = () => {
  return (
    <>
      <input type="checkbox" id="darkmode" />
      <div className="wrapper">
        {/* <!-- navbar --> */}
        <section className="MainNavBar">
          <div className="navBar">
            <div className="header">
              <h2 className="roboto-regular-italic">Kabindra</h2>
              <p className="roboto-thin-italic">Full Stack Software Engineer</p>
            </div>
            <label htmlFor="barmenu" className="">
              <i className="fa-solid fa-bars"></i>
            </label>
            <input type="checkbox" id="barmenu" />
            <div className="menu ">
              <ul className="navigation">
                <li>
                  <a href="#hero">Home</a>
                </li>
                <li>
                  <a href="#skills">Skills</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="#aboutMe">About</a>
                </li>
                <li>
                  <a href="#contact-me">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <label htmlFor="darkmode">
          <i className="fa-solid fa-circle-half-stroke"></i>
        </label>

        {/* <!-- hero --> */}
        <section id="hero">
          <div className="hero container ">
            <div className="left">
              <div>
                Hi I`m{" "}
                <span className="roboto-black-italic">Kabindra Ranabhat,</span>
                <div>
                  <h2>Full Stack Software Engineer</h2>
                </div>
                <p>
                  {" "}
                  I love to code,learn new technologies and develop awesome
                  applications
                </p>
                <div>
                  <button className="btn btn-danger">
                    Download CV <i className="fa-solid fa-cloud-arrow-down"></i>
                  </button>
                </div>
              </div>
            </div>

            <div className="right">
              <div className="img">
                <img src={profile} alt="" />
              </div>
            </div>
          </div>
        </section>
        {/* <!-- banner --> */}
        <section id="banner">
          <div className="banner container flex">
            <div className=" flex info-content">
              <div className="flex-center icon-container">
                <i className="fa-solid fa-award"></i>
              </div>
              <div>
                <span>IT</span>
                <p>Graduate</p>
              </div>
            </div>
            <div className="divider"></div>
            <div className=" flex info-content">
              <div className="flex-center icon-container">
                <i className="fa-solid fa-award"></i>
              </div>
              <div>
                <span>10+ Projects</span>
                <p>Completed</p>
              </div>
            </div>
            <div className="divider"></div>
            <div className=" flex info-content">
              <div className="flex-center icon-container">
                <i className="fa-solid fa-award"></i>
              </div>
              <div>
                <span>1+ Years</span>
                <p>Experience</p>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- skills --> */}
        <section id="skills">
          <div className="skills">
            <div className="skills">
              <h2 className="title">Skills</h2>
              <hr />
              <div className="container flex skills-container-frontend">
                <div>
                  <i
                    className="fa-brands fa-js"
                    style={{ color: "yellow" }}
                  ></i>
                  <span>JavaScript</span>
                </div>
                <div>
                  <i
                    className="fa-brands fa-html5"
                    style={{ color: "orangered" }}
                  ></i>
                  <span>HTML5</span>
                </div>

                <div>
                  <i
                    className="fa-brands fa-css3-alt"
                    style={{ color: "blue" }}
                  ></i>
                  <span>CSS3</span>
                </div>

                <div>
                  <i
                    className="fa-brands fa-github"
                    style={{ color: "gray" }}
                  ></i>
                  <span>GitHub</span>
                </div>
                <div>
                  <i
                    className="fa-brands fa-react"
                    style={{ color: "skyblue" }}
                  ></i>
                  <span>React</span>
                </div>

                <div>
                  <i
                    className="fa-brands fa-bootstrap"
                    style={{ color: "purple" }}
                  ></i>
                  <span>Bootstrap</span>
                </div>
              </div>
              <div className="container flex skills-container-backend">
                <div>
                  <i
                    className="fa-brands fa-node"
                    style={{ color: "green" }}
                  ></i>
                  <span>NodeJS</span>
                </div>
                <div>
                  <i className="fa-brands fa-npm" style={{ color: "red" }}></i>
                  <span>NPM</span>
                </div>

                <div>
                  <i className="fa-brands fa-aws" style={{ color: "gray" }}></i>
                  <span>AWS</span>
                </div>
                <div>
                  <i
                    className="fa-brands fa-docker"
                    style={{ color: "blue" }}
                  ></i>
                  <span>Docker</span>
                </div>

                <div>
                  <i
                    className="fa-solid fa-database"
                    style={{ color: "greenyellow" }}
                  ></i>
                  <span>MongoDB</span>
                </div>
                <div>
                  <i
                    className="fa-brands fa-js"
                    style={{ color: "yellow" }}
                  ></i>
                  <span>JavaScript</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- projects --> */}
        <section id="projects">
          <div className="projects ">
            <h2 className="title">Projects</h2>
            <hr />
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

        {/* <!-- aboutMe --> */}
        <section id="aboutMe">
          <h2 className="title">About Me</h2>
          <hr />
          <div className="aboutMe container">
            <div className="left container">
              <img src={AboutMe} alt="" />
            </div>

            <div className="right ">
              <div className="bio">
                <h3>Kabindra Ranabhat</h3>
                <p>
                  A skilled Full Stack Developer with a strong passion htmlFor
                  building dynamic, user-centric web applications. Proficient in
                  both front-end and back-end technologies, including
                  JavaScript, React, Node.js, and Python, this developer excels
                  in creating seamless, responsive interfaces and robust
                  server-side solutions. With a keen eye htmlFor design and user
                  experience, they are committed to continuous learning and
                  innovation, thriving on solving complex problems and
                  delivering impactful digital experiences.
                </p>
                <div className="hobbies">
                  <ul className="hobbies-menu">
                    <li>Coding</li>
                    <li>Traveling</li>
                    <li>Soccor</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- contact me --> */}
        <section className="contact-me" id="contact-me">
          <h2 className="title">Get In Touch</h2>
          <hr />
          <div className="contact container">
            <div className="social-icons flex-center">
              <a
                href="https://www.linkedin.com/in/kabindra-ranabhat-31845a92/

              "
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://github.com/kabindrr">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://www.youtube.com/">
                <i className="fa-brands fa-square-youtube"></i>
              </a>
              <a href="https://x.com/kabindra_Rb">
                <i className="fa-brands fa-square-x-twitter"></i>
              </a>
            </div>

            <h3 className="flex-center">Or</h3>
            <div className="flex-center">
              <a href="" className="email-section flex-center">
                {" "}
                <span>your-email@gmail.com</span>
                <div className="email flex-center">
                  <i className="fa-regular fa-paper-plane"></i>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* <!-- footer --> */}
        <section id="footer">
          <footer>
            <div className="footer flex-center">
              &copy; Copy right all reserved 2024
            </div>
          </footer>

          <a href="#hero" className="goUp">
            <i className="fa-solid fa-angle-up"></i>
          </a>
        </section>
      </div>
    </>
  );
};

export default App;
