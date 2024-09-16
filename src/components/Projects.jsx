import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";
import project7 from "../assets/project7.png";

import { Card } from "./Card";
import { Title } from "./Title";

export const Projects = () => {
  const projects = [
    {
      title: "Movie World",
      image: project2,
      github: "https://github.com/kabindrr/React-Movie_World.git",
      url: "https://react-movie-world-9sne.vercel.app",
      description: "TechStack: Html, Css, Figma,JavaScript",
    },
    {
      title: "Bucket List",
      image: project4,
      github: "https://github.com/kabindrr/BucketList.git",
      url: "https://bucket-list-sandy.vercel.app",
      description: "TechStack: Html, Css, Figma, Bootstrap",
    },
    {
      title: "Travel Blog",
      image: project1,
      github: "https://github.com/kabindrr/PersonalBlog.git",
      url: "https://personal-blog-ashy.vercel.app/",
      description: "TechStack: Html, Css, Figma",
    },
    {
      title: "Solar System",
      image: project5,
      github: "https://github.com/kabindrr/SolarSystem.git",
      url: "https://solar-system-topaz.vercel.app",
      description: "TechStack: Html, Css, Figma",
    },
    {
      title: "Contact List",
      image: project3,
      github: "https://github.com/kabindrr/RandomContactList.git",
      url: "https://random-contact-list-det6achv5-kabindras-projects.vercel.app",
      description: "TechStack: Html, Css, Figma",
    },
    {
      title: "Calculator",
      image: project6,
      github: "https://github.com/kabindrr/JsCalculator2.git",
      url: "https://js-calculator2-gbv4.vercel.app",
      description: "TechStack: Html, Css, Figma",
    },
    {
      title: "Js QUIZ",
      image: project7,
      github: "https://github.com/kabindrr/JsQuiz.git",
      url: "https://js-quiz-o4ir.vercel.app",
      description: "TechStack: Html, Css, JavaScript",
    },
  ];
  return (
    <>
      {" "}
      <section id="projects">
        <div className="projects ">
          <Title title="Projects" />
          <div className="project-container container">
            {projects.map((item, i) => (
              <Card key={i} {...item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
