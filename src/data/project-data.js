import { ncNewsSnapshots, throughFogSnapshots } from "./snapshot-data";

import {
  DiJsBadge,
  DiReact,
  DiPostgresql,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import { TbBrandReactNative } from "react-icons/tb";
import { SiPassport, SiGooglemaps } from "react-icons/si";

export const projects = [
  {
    title: "Through the Fog",
    info: "",
    tech: [
      { name: "javascript logo", img: <DiJsBadge /> },
      { name: "react native logo", img: <TbBrandReactNative /> },
      { name: "html-logo", img: <DiHtml5 /> },
      { name: "css logo", img: <DiCss3 /> },
      { name: "passport.js logo", img: <SiPassport /> },
      { name: "google maps API logo", img: <SiGooglemaps /> },
    ],
    code: "https://github.com/leahbanks/FE-through-the-fog",
    snapshots: throughFogSnapshots,
    website:
      "https://user-images.githubusercontent.com/23381975/229468456-36d01223-2820-46d6-86a5-441aef5a1640.mp4",
  },
  {
    title: "NC News",
    info: "NC News is an interactive web application built using React. It serves as a news aggregation and comments board, allowing users to log in, browse the various articles by topic/popularity and get involved in the discussion. The app uses the NC News API to fetch the stories and allow the user to interact with them via comments and votes.",
    tech: [
      { name: "javascript logo", img: <DiJsBadge /> },
      { name: "react logo", img: <DiReact /> },
      { name: "html-logo", img: <DiHtml5 /> },
      { name: "css logo", img: <DiCss3 /> },
    ],
    code: "https://github.com/leahbanks/FE_nc_news",
    snapshots: ncNewsSnapshots,
    website: "https://nc-news-lb.netlify.app/",
  },
  {
    title: "Through the Fog API",
    info: "",
    tech: [
      { name: "javascript logo,", img: <DiJsBadge /> },
      { name: "posgresql logo", img: <DiPostgresql /> },
    ],
    code: "https://github.com/leahbanks/BE-through-the-fog",
    snapshots: [],
    website: "https://fog-of-war-auth.onrender.com/api-docs/",
  },
  {
    title: "NC News API",
    info: "NC News API is a RESTful API built using Javascript, Node.js, PostgreSQL and Express.js. It has been designed to provide the functionality behind and interactive web application, which will serve as a Reddit-style news aggregation and comments board.",
    tech: [
      { name: "javascript logo", img: <DiJsBadge /> },
      { name: "posgresql logo", img: <DiPostgresql /> },
      { name: "express.js", img: "" },
    ],
    code: "https://github.com/leahbanks/BE_nc_news",
    snapshots: [],
    website: "https://nc-news-81lq.onrender.com/api",
  },
  {
    title: "Portfolio",
    info: "",
    tech: [
      { name: "javascript logo", img: <DiJsBadge /> },
      { name: "react logo", img: <DiReact /> },
      { name: "html-logo", img: <DiHtml5 /> },
      { name: "css logo", img: <DiCss3 /> },
    ],
    code: "https://github.com/leahbanks/portfolio",
    snapshots: [],
    website: "",
  },
  {
    title: "Calculator",
    info: "",
    tech: [
      { name: "javascript logo", img: <DiJsBadge /> },
      { name: "react logo", img: <DiReact /> },
      { name: "html-logo", img: <DiHtml5 /> },
      { name: "css logo", img: <DiCss3 /> },
    ],
    code: "https://github.com/leahbanks/calculator",
    snapshots: [],
    website: "",
  },
];