import React from "react";

import { ReactComponent as LogoGithub } from "../images/logo-github.svg";
import { ReactComponent as Open } from "../images/open.svg";

const ProjectCard = ({ project }) => {
  const { name, description, img, repository, deploy, tags } = project;

  return (
    <div className="project-card">
      <img src={img} alt="Preview" />

      <div className="text">
        <h3>{name}</h3>

        <div className="tags">
          {tags.map((tag, i) => {
            return <span key={tag + " " + i}>{tag}</span>;
          })}
        </div>

        <p className="description">{description}</p>

        <div className="links">
          <a href={repository} target="_blank" rel="noopener noreferrer">
            {/* <p>Repository</p> */}
            <LogoGithub />
          </a>
          <a href={deploy} target="_blank" rel="noopener noreferrer">
            <p>View Deploy</p>
            <Open />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
