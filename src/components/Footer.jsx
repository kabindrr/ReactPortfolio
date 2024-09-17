import { useEffect, useState } from "react";

export const Footer = () => {
  const [scrollYPosition, setScrollYPosition] = useState(0);

  const handleOnScrollY = () => {
    setScrollYPosition(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleOnScrollY);
    return () => {
      window.removeEventListener("scroll", handleOnScrollY);
    };
  }, []);

  return (
    <>
      <section id="footer">
        <footer>
          <div className="footer flex-center">
            &copy; Copy right all reserved 2024
          </div>
        </footer>
        {scrollY > 800 && (
          <a href="#hero" className="goUp">
            <i className="fa-solid fa-angle-up"></i>
          </a>
        )}
      </section>
    </>
  );
};
