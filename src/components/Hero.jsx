import React from "react";

import { ReactComponent as IconLinkedIn } from "../images/logo-linkedin.svg";
import { ReactComponent as IconGitHub } from "../images/logo-github.svg";
import { ReactComponent as IconTwitter } from "../images/logo-twitter.svg";

import Hypno from "./Hypno";

const Hero = () => {
  return (
    <section className="hero" id="top">
      <div className="container">
        <div className="content">
          <p>Frontend web development solutions</p>
          <h1>Leonardo Meza</h1>
          <span>At your service! (⸃ ◡ ⸂)</span>
          <div className="downloads">
            <button>Resume (ENG)</button>
            <button>CV (ESP)</button>
          </div>
          <div className="social">
            <a
              href="https://www.linkedin.com/in/leonardomeza87/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconLinkedIn />
            </a>

            <a
              href="https://github.com/leonardomeza87"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconGitHub />
            </a>
            <a
              href="https://twitter.com/leonardomeza87"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconTwitter />
            </a>
          </div>
        </div>
        <div className="canvas">
          <Hypno />
        </div>

        <div className="ocean">
          <div className="wave"></div>
          <div className="wave"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
