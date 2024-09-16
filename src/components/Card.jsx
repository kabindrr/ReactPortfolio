export const Card = ({ image, github, url, title, description }) => {
  return (
    <>
      <div className="project-card container">
        <div className="top">
          <img src={image} alt="" width="100%" />
        </div>
        <div className=" flex bottom container">
          <div className="links">
            <a href={github}>
              <i className="fa-brands fa-github" style={{ color: "gray" }}></i>
            </a>

            <a href={url}>
              <i
                className="fa-brands fa-chrome"
                style={{ color: "yellow" }}
              ></i>
            </a>
          </div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};
