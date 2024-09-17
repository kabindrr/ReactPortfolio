import { Title } from "./Title";

export const ContactMe = () => {
  return (
    <>
      <section className="contact-me" id="contact-me">
        <Title title="Get In Touch" />
        <div className="contact container">
          <div className="social-icons flex-center">
            <a
              href="https://www.linkedin.com/in/kabindra-ranabhat-31845a92/"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/kabindrr" target="_blank">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.youtube.com/" target="_blank">
              <i className="fa-brands fa-square-youtube"></i>
            </a>
            <a href="https://x.com/kabindra_Rb" target="_blank">
              <i className="fa-brands fa-square-x-twitter"></i>
            </a>
          </div>

          <h3 className="flex-center">Or</h3>
          <div className="flex-center">
            <a
              href="mailto:your-email@gmail.com"
              target="_blank"
              className="email-section flex-center"
            >
              {" "}
              <span>your-email@gmail.com</span>
              <div className="email flex-center">
                <i className="fa-regular fa-paper-plane"></i>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
