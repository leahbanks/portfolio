import firstNCNews from "/Users/leah/Desktop/coding/portfolio/src/assets/fe-ncnews/4.png";
import secondNCNews from "/Users/leah/Desktop/coding/portfolio/src/assets/fe-ncnews/3.png";
import thirdNCNews from "/Users/leah/Desktop/coding/portfolio/src/assets/fe-ncnews/2.png";
import fourthNCNews from "/Users/leah/Desktop/coding/portfolio/src/assets/fe-ncnews/1.png";  

import firstThroughFog from "/Users/leah/Desktop/coding/portfolio/src/assets/through-the-fog/1.png";
import secondThroughFog from "/Users/leah/Desktop/coding/portfolio/src/assets/through-the-fog/2.png";
import thirdThroughFog from "/Users/leah/Desktop/coding/portfolio/src/assets/through-the-fog/3.png";
import fourthThroughFog from "/Users/leah/Desktop/coding/portfolio/src/assets/through-the-fog/4.png";
import fifthThroughFog from "/Users/leah/Desktop/coding/portfolio/src/assets/through-the-fog/5.png";
import sixthThroughFog from "/Users/leah/Desktop/coding/portfolio/src/assets/through-the-fog/6.png";
import seventhThroughFog from "/Users/leah/Desktop/coding/portfolio/src/assets/through-the-fog/7.png";
import eighthThroughFog from "/Users/leah/Desktop/coding/portfolio/src/assets/through-the-fog/8.png";
import ninthThroughFog from "/Users/leah/Desktop/coding/portfolio/src/assets/through-the-fog/9.png";

import "./Projects.css";
import ProjectCard from "../ProjectCard/ProjectCard";

import { DiJsBadge, DiReact, DiPostgresql, DiHtml5, DiCss3 } from "react-icons/di";
import { TbBrandReactNative } from "react-icons/tb"
import { SiPassport, SiGooglemaps } from "react-icons/si"

export default function Projects() {
  const projects = [
    {
      title: "Through the Fog",
      info: "",
      tech: [<DiJsBadge />, <TbBrandReactNative/>, <DiHtml5 />, <DiCss3 />, <SiPassport />, <SiGooglemaps/>],
      code: "https://github.com/leahbanks/FE-through-the-fog",
      snapshots: [firstThroughFog, secondThroughFog, thirdThroughFog, fourthThroughFog, fifthThroughFog, sixthThroughFog, seventhThroughFog, eighthThroughFog, ninthThroughFog],
      website: "https://user-images.githubusercontent.com/23381975/229468456-36d01223-2820-46d6-86a5-441aef5a1640.mp4"
    },
    {
      title: "NC News",
      info: "NC News is an interactive web application built using React. It serves as a news aggregation and comments board, allowing users to log in, browse the various articles by topic/popularity and get involved in the discussion. The app uses the NC News API to fetch the stories and allow the user to interact with them via comments and votes.",
      tech: [<DiJsBadge />, <DiReact />, <DiHtml5 />, <DiCss3 />],
      code: "https://github.com/leahbanks/FE_nc_news",
      snapshots: [firstNCNews, secondNCNews, thirdNCNews, fourthNCNews],
      website: "https://nc-news-lb.netlify.app/",
    },
    {
      title: "Through the Fog API",
      info: "",
      tech: [<DiJsBadge />, <DiPostgresql />],
      code: "https://github.com/leahbanks/BE-through-the-fog",
      snapshots: [],
      website: "https://fog-of-war-auth.onrender.com/api-docs/",
    },
    {
      title: "NC News API",
      info: "NC News API is a RESTful API built using Javascript, Node.js, PostgreSQL and Express.js. It has been designed to provide the functionality behind and interactive web application, which will serve as a Reddit-style news aggregation and comments board.",
      tech: [<DiJsBadge />, <DiPostgresql />, "Express.js"],
      code: "https://github.com/leahbanks/BE_nc_news",
      snapshots: [],
      website: "https://nc-news-81lq.onrender.com/api",
    },
    {
      title: "Portfolio",
      info: "",
      tech: [<DiJsBadge />, <DiReact />, <DiHtml5 />, <DiCss3 />],
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
