import profile from "../assets/profile.png";

export const Hero = () => {
  return (
    <>
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
    </>
  );
};
