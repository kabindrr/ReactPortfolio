import aboutMeProfile from "../assets/AboutMe.png";
export const AboutMe = () => {
  return (
    <>
      <section id="aboutMe">
        <h2 className="title">About Me</h2>
        <hr />
        <div className="aboutMe container">
          <div className="left container">
            <img src={aboutMeProfile} alt="" />
          </div>

          <div className="right ">
            <div className="bio">
              <h3>Kabindra Ranabhat</h3>
              <p>
                A skilled Full Stack Developer with a strong passion htmlFor
                building dynamic, user-centric web applications. Proficient in
                both front-end and back-end technologies, including JavaScript,
                React, Node.js, and Python, this developer excels in creating
                seamless, responsive interfaces and robust server-side
                solutions. With a keen eye htmlFor design and user experience,
                they are committed to continuous learning and innovation,
                thriving on solving complex problems and delivering impactful
                digital experiences.
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
    </>
  );
};
