import React from "react";

import { ReactComponent as Download } from "../images/download.svg";
import { ReactComponent as Arrow } from "../images/arrow-forward.svg";

import { ReactComponent as IconLinkedIn } from "../images/logo-linkedin.svg";
import { ReactComponent as IconGitHub } from "../images/logo-github.svg";
import { ReactComponent as IconTwitter } from "../images/logo-twitter.svg";

import Hypno from "./Hypno";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="inner-container">
          <div className="text">
            <p>Frontend web developer</p>
            <h1>Leonardo Meza</h1>
            <span>At your service!</span>
            <div className="cta">
              <a
                href="http://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download />
                <span>Resume</span>
              </a>
              <a href="#portfolio">
                <span>Take a look at my projects</span>
                <Arrow />
              </a>
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
          <div className="hypno">
            <Hypno />
          </div>
        </div>
      </div>
      <div className="ocean">
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
    </section>
  );
};

export default Hero;
