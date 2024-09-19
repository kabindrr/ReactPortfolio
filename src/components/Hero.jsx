import { useEffect, useState } from "react";
import profile from "../assets/profile.png";

export const Hero = () => {
  const [index, setIndex] = useState(0);

  const titles = [
    "Full Stack Software Engineer",
    "Full Stack Software Developer",
    "Front End Developer",
    "Back End Developer",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section id="hero">
        <div className="hero container ">
          <div className="left">
            <div>
              Hi I`m{" "}
              <span className="roboto-black-italic">Kabindra Ranabhat,</span>
              <div>
                <h2 className="animated-title">{titles[index]}</h2>
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
    </>
  );
};
