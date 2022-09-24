import React, { useEffect, useState } from "react";

import { sortIntoPieces } from "../helpers/utilities";

import ProjectCard from "./ProjectCard";

import { ReactComponent as ChevronDown } from "../images/chevron-down.svg";

const Carousel = ({ data }) => {
  const [position, setPosition] = useState(0);

  const [maxPositions, setMaxPositions] = useState(1);

  const goNext = () => {
    if (position < maxPositions) {
      setPosition(position + 1);
    }
  };
  const goBack = () => {
    if (position > 0) {
      setPosition(position - 1);
    }
  };

  /*





*/

  //Detect screen resize
  const [windowWidth, setWindowWidth] = useState(null);

  const isWindow = typeof window !== "undefined";

  const getWidth = () => (isWindow ? window.visualViewport.width : windowWidth);

  const resize = () => setWindowWidth(getWidth());

  //Update screen size
  useEffect(() => {
    if (isWindow) {
      setWindowWidth(getWidth());

      window.addEventListener("resize", resize);

      return () => window.removeEventListener("resize", resize);
    }
    // eslint-disable-next-line
  }, [isWindow]);

  //Card Capacity
  const getCarouselSlots = () => {
    let w = getWidth();

    const largeScreenSize = 800;
    const mediumScreenSize = 500;

    if (w > largeScreenSize) {
      return 3;
    } else if (w > mediumScreenSize) {
      return 2;
    } else {
      return 1;
    }
  };

  const [carouselSlots, setCarouselSlots] = useState(getCarouselSlots());
  const [sortedData, setSortedData] = useState([]);

  useEffect(() => {
    setCarouselSlots(getCarouselSlots());
    // eslint-disable-next-line
  }, [windowWidth]);

  useEffect(() => {
    if (data.length > 0) {
      let array = sortIntoPieces(data, carouselSlots);
      setMaxPositions(array.length);

      setSortedData(array);
    }
  }, [data, carouselSlots]);

  return (
    <div className="carousel">
      <button
        className={`carousel-btn left ${position === 0 ? "hidden" : ""}`}
        onClick={goBack}
      >
        <img src={ChevronDown} className="rotated" alt="Back" />
      </button>
      <div className="carousel-container">
        <div className="inner-container">
          {sortedData.map((group, index) => {
            return (
              <div
                className={`group`}
                style={{ transform: `translateX(-${100 * position}%)` }}
                key={index}
              >
                {group.map((project, index) => {
                  return (
                    <ProjectCard
                      className="service-card"
                      project={project}
                      key={project.name + index}
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      <button
        className={`carousel-btn right  ${
          position === maxPositions ? "hidden" : ""
        }`}
        onClick={goNext}
      >
        <img src={ChevronDown} alt="Next" />
      </button>
    </div>
  );
};

export default Carousel;
