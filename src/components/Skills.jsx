import { Title } from "./Title";

export const Skills = () => {
  return (
    <>
      <section id="skills">
        <div className="skills">
          <div className="skills">
            <Title title="Skills" />
            <div className="container flex skills-container-frontend">
              <div>
                <i className="fa-brands fa-js" style={{ color: "yellow" }}></i>
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
                <i className="fa-brands fa-node" style={{ color: "green" }}></i>
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
                <i className="fa-brands fa-js" style={{ color: "yellow" }}></i>
                <span>JavaScript</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
