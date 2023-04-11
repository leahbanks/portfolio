import {
  calculatorSnapshots,
  ncNewsSnapshots,
  throughFogSnapshots,
} from "./snapshot-data";

import {
  DiJsBadge,
  DiReact,
  DiPostgresql,
  DiHtml5,
  DiCss3,
  DiNodejs,
} from "react-icons/di";
import { TbBrandReactNative } from "react-icons/tb";
import { SiPassport, SiGooglemaps, SiExpress } from "react-icons/si";

export const projects = [
  {
    title: "Through the Fog",
    type: "Group Project",
    info: "Through the Fog is a mobile app and interactive game built using React Native. The app uses the Google Maps API and geolocational data from your phone to unveil the areas you have visited in real time, allowing you to see which parts of the world you have discovered in detail. With help from the Through the Fog API, a user is able to create an account, store their progress/data, view scoreboards and post photo markers to document their travels. A demo and presentation of the app can be viewed by clicking the link in the top right corner of this card.",
    tech: [
      { name: "javascript logo", img: <DiJsBadge /> },
      { name: "react native logo", img: <TbBrandReactNative /> },
      { name: "html-logo", img: <DiHtml5 /> },
      { name: "css logo", img: <DiCss3 /> },
      { name: "google maps API logo", img: <SiGooglemaps /> },
    ],
    code: "https://github.com/leahbanks/FE-through-the-fog",
    snapshots: throughFogSnapshots,
    website:
      "https://user-images.githubusercontent.com/23381975/229468456-36d01223-2820-46d6-86a5-441aef5a1640.mp4",
  },
  {
    title: "NC News",
    type: "Solo Project",
    info: "NC News is an interactive web application built using React. It serves as a news aggregation and comments board, allowing users to log in, browse the various articles by topic/popularity and get involved in the discussion. The app uses the NC News API to fetch the stories and allow the logged in user to interact with them via comments and votes.",
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
    type: "Group Project",
    info: "Through the Fog API was built to serve as a back end to our React Native app. We used a framework we were familiar with (JS, Node, Express) in addition to new technologies that we taught ourselves along the way (Google Auth and Bcrypt) to ensure the security of user data. The endpoints can be viewed on Swagger Docs via the link in the top right corner of this card.",
    tech: [
      { name: "javascript logo,", img: <DiJsBadge /> },
      { name: "postgresql logo", img: <DiPostgresql /> },
      { name: "passport.js logo", img: <SiPassport /> },
      { name: "google maps API logo", img: <SiGooglemaps /> },
      { name: "express.js logo", img: <SiExpress /> },
      { name: "node.js logo", img: <DiNodejs /> },
    ],
    code: "https://github.com/leahbanks/BE-through-the-fog",
    snapshots: [],
    website: "https://fog-of-war-auth.onrender.com/api-docs/",
  },
  {
    title: "NC News API",
    type: "Solo Project",
    info: "NC News API is a RESTful API built using Javascript, Node.js, PostgreSQL and Express.js. It has been designed to provide the functionality behind and interactive web application, which will serve as a Reddit-style news aggregation and comments board.",
    tech: [
      { name: "javascript logo", img: <DiJsBadge /> },
      { name: "postgresql logo", img: <DiPostgresql /> },
      { name: "express.js logo", img: <SiExpress /> },
      { name: "node.js logo", img: <DiNodejs /> },
    ],
    code: "https://github.com/leahbanks/BE_nc_news",
    snapshots: [],
    website: "https://nc-news-81lq.onrender.com/api",
  },
  {
    title: "Portfolio",
    type: "Solo Project",
    info: "The page you are currently viewing! My porfolio site was built with a mobile-first mindset, using React, HTML and CSS. I have also integrated EmailJS so that I am able to receive emails from visitors who use the contact form.",
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
    type: "Solo Project",
    info: "A mini calculator project built in React that is able to perform simple calculations. This is an example of many mini React/React Native apps that I plan to create in order to practice and refine my use of HTML, CSS, React Hooks and soon - Typescript and SASS.",
    tech: [
      { name: "javascript logo", img: <DiJsBadge /> },
      { name: "react logo", img: <DiReact /> },
      { name: "html-logo", img: <DiHtml5 /> },
      { name: "css logo", img: <DiCss3 /> },
    ],
    code: "https://github.com/leahbanks/calculator",
    snapshots: calculatorSnapshots,
    website: "",
  },
  {
    title: "NC Marketplace",
    type: "Paired Project",
    info: "",
    tech: [
      { name: "javascript logo", img: <DiJsBadge /> },
      { name: "react logo", img: <DiReact /> },
      { name: "html-logo", img: <DiHtml5 /> },
      { name: "css logo", img: <DiCss3 /> },
    ],
    code: "",
    snapshots: [],
    website: "",
  },
  {
    title: "Virtual Bookshelf",
    type: "Solo Project",
    info: "",
    tech: [
      { name: "javascript logo", img: <DiJsBadge /> },
      { name: "react logo", img: <DiReact /> },
      { name: "html-logo", img: <DiHtml5 /> },
      { name: "css logo", img: <DiCss3 /> },
    ],
    code: "",
    snapshots: [],
    website: "",
  },
];
