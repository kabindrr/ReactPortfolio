export const Banner = () => {
  return (
    <>
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
    </>
  );
};
