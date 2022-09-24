import React from "react";

import PreviewIMG from "../images/preview.png";
import Carousel from "./Carousel";

const data = [
  {
    name: "Rest Countries API",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor laudantium enim, provident praesentium quo hic fugit a earum aliquam.",
    img: PreviewIMG,
    repository: "",
    deploy: "",
    tags: ["HTML", "CSS"],
  },
  {
    name: "axie-tracker",
    description: "",
    img: "",
    repository: "",
    deploy: "",
    tags: ["HTML", "CSS"],
  },
  {
    name: "easybank-landing-page",
    description: "",
    img: "",
    repository: "",
    deploy: "",
    tags: ["HTML", "CSS"],
  },
  {
    name: "to-do-list",
    description: "",
    img: "",
    repository: "",
    deploy: "",
    tags: ["HTML", "CSS"],
  },
  {
    name: "calculator",
    description: "",
    img: "",
    repository: "",
    deploy: "",
    tags: ["HTML", "CSS"],
  },
  {
    name: "color-game",
    description: "",
    img: "",
    repository: "",
    deploy: "",
    tags: ["HTML", "CSS"],
  },
  {
    name: "nautic-rose",
    description: "",
    img: "",
    repository: "",
    deploy: "",
    tags: ["HTML", "CSS"],
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="container">
        <Carousel data={data} />
      </div>
    </section>
  );
};

export default Projects;
