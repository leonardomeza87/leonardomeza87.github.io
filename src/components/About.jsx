import React from "react";

import { ReactComponent as IconHTML } from "../images/logo-html5.svg";
import { ReactComponent as IconCSS } from "../images/logo-css3.svg";
import { ReactComponent as IconSASS } from "../images/logo-sass.svg";
import { ReactComponent as IconFigma } from "../images/logo-figma.svg";
import { ReactComponent as IconJavascript } from "../images/logo-javascript.svg";
import { ReactComponent as IconReact } from "../images/logo-react.svg";
import { ReactComponent as IconGit } from "../images/logo-git.svg";
import { ReactComponent as IconGithub } from "../images/logo-github.svg";

import Editor from "./Editor";

const About = () => {
  return (
    <section className="about" id="about-me">
      <h2>About Me</h2>

      <div className="content">
        <div className="container">
          <div className="editor-container">
            <Editor data="Hola, esta es una prueba customizada de mi pequeño editor de texto, en el que no puedes escribir; Es más como una pizarra, que muestra, o debería mostrar, una bio sobre mí, obviamente como estamos en fases de pruebas pues todavía no he redactado esa bio xD" />
          </div>
          <div className="skills">
            <h3>I've worked with all of this:</h3>
            <div className="tech">
              <IconHTML />
              <span>HTML5</span>
            </div>
            <div className="tech">
              <IconCSS />
              <span>CSS3</span>
            </div>
            <div className="tech">
              <IconSASS />
              <span>SASS</span>
            </div>
            <div className="tech">
              <IconFigma />
              <span>Figma</span>
            </div>
            <div className="tech">
              <IconJavascript />
              <span>JS</span>
            </div>
            <div className="tech">
              <IconReact />
              <span>ReactJS</span>
            </div>
            <div className="tech">
              <IconGit />
              <span>GIT</span>
            </div>
            <div className="tech">
              <IconGithub />
              <span>GitHub</span>
            </div>
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

export default About;
