import firstNCNews from "/Users/leah/Desktop/coding/portfolio/src/photos/fe-ncnews/4.png";
import secondNCNews from "/Users/leah/Desktop/coding/portfolio/src/photos/fe-ncnews/3.png";
import thirdNCNews from "/Users/leah/Desktop/coding/portfolio/src/photos/fe-ncnews/2.png";
import fourthNCNews from "/Users/leah/Desktop/coding/portfolio/src/photos/fe-ncnews/1.png";

import "./Projects.css";
import ProjectCard from "../ProjectCard/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "NC News",
      info: "NC News is an interactive web application built using React. It serves as a news aggregation and comments board, allowing users to log in, browse the various articles by topic/popularity and get involved in the discussion. The app uses the NC News API to fetch the stories and allow the user to interact with them via comments and votes.",
      tech: ["Javascript", "React"],
      code: "https://github.com/leahbanks/FE_nc_news",
      snapshots: [firstNCNews, secondNCNews, thirdNCNews, fourthNCNews],
      website: "https://nc-news-lb.netlify.app/",
    },
    {
      title: "NC News API",
      info: "NC News API is a RESTful API built using Javascript, Node.js, PostgreSQL and Express.js. It has been designed to provide the functionality behind and interactive web application, which will serve as a Reddit-style news aggregation and comments board.",
      tech: ["Javascript", "PostgreSQL", "Express.js"],
      code: "https://github.com/leahbanks/BE_nc_news",
      snapshots: [],
      website: "https://nc-news-81lq.onrender.com/api",
    },
    {
      title: "Through the Fog",
      info: "",
      tech: [],
      code: "https://github.com/leahbanks/FE-through-the-fog",
      snapshots: [],
      website: ""
    },
    {
      title: "Through the Fog API",
      info: "",
      tech: [],
      code: "https://github.com/leahbanks/BE-through-the-fog",
      snapshots: [],
      website: "fog-of-war-auth.onrender.com/api-docs/",
    },
    {
      title: "Portfolio",
      info: "",
      tech: [],
      code: "https://github.com/leahbanks/portfolio",
      snapshots: [],
      website: "",
    },
  ];
  return (
    <section className="projects">
      <h2>Projects</h2>

      <div className="project-container">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
