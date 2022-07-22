import React, { useState } from "react";

import { ReactComponent as LogoSVG } from "../images/logo.svg";
import { ReactComponent as ChevronDown } from "../images/chevron-down.svg";

import LogoText from "../images/logo-text.png";

const Header = () => {
  const [langMenuIsOpen, setLangMenuIsOpen] = useState(false);
  const [langIsEnglish, setLangIsEnglish] = useState(true);

  const openMenu = (bool) => {
    setLangMenuIsOpen(bool);
  };
  const changeLang = () => {
    setLangIsEnglish(!langIsEnglish);

    setTimeout(() => {
      openMenu(false);
    }, 100);
  };

  return (
    <header id="home">
      <div className="fixed">
        <div className="container">
          <a href="#home" className="logo">
            <LogoSVG />
            <img src={LogoText} alt="Leonardo Meza" />
          </a>

          <div className="nav">
            <div
              className="lang"
              onMouseOver={() => {
                openMenu(true);
              }}
              onMouseOut={() => {
                openMenu(false);
              }}
            >
              <button className={langMenuIsOpen ? "active" : ""}>
                <p>{langIsEnglish ? "English" : "Español"}</p>
                <ChevronDown />
              </button>

              <div className={`lang-menu ${langMenuIsOpen ? "open" : ""}`}>
                <button onMouseUp={changeLang} tabIndex="-1">
                  {langIsEnglish ? "Spanish" : "Inglés"}
                </button>
              </div>
            </div>

            <ul>
              <li>
                <a href="#about-me">About Me</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li className="contact">
                <a href="#contact">Contact Me</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
