import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
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
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="skills">Skills</Link>
              </li>
              <li>
                <Link to="projects">Projects</Link>
              </li>
              <li>
                <Link to="about">About</Link>
              </li>
              <li>
                <Link to="contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
