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
    </>
  );
};
