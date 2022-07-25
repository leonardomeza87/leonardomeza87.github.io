import { useEffect, useRef, useState } from "react";

import { ReactComponent as LogoMD } from "../images/logo-markdown.svg";

const Editor = ({ data }) => {
  const [displayedText, setDisplayedText] = useState("");

  const [letterIndex, setLetterIndex] = useState(0);

  const [pauseTimeMS, setPauseTimeMS] = useState(20);

  const [skipAnimation, setSkipAnimation] = useState(false);

  const [animationTimer, setAnimationTimer] = useState(0);
  const [loaderTimer, setLoaderTimer] = useState(0);

  const [loader, setLoader] = useState("/");

  const textRef = useRef(null);

  useEffect(() => {
    if (!skipAnimation) {
      setLoaderTimer(
        setTimeout(() => {
          if (loader === "/") setLoader("\\");
          else setLoader("/");
        }, 200)
      );
    } else {
      clearTimeout(loaderTimer);
    }
    // eslint-disable-next-line
  }, [loader, skipAnimation]);

  const skip = () => {
    //Cancel the timeout
    clearTimeout(animationTimer);

    //Convert semicolons to periods
    let translatedData = data.replace(/;/g, ". \n");
    setDisplayedText(translatedData);
  };

  useEffect(() => {
    //Data have content
    if (data.length > 0) {
      //Letter index is less than data length
      if (letterIndex !== data.length) {
        //Current letter
        let char = data[letterIndex];
        let newText = "";

        if (char === `;`) {
          char = `. \n`;
          setPauseTimeMS(2000);
        } else if (char === `.`) {
          setPauseTimeMS(1000);
        } else if (char === `,`) {
          setPauseTimeMS(500);
        } else {
          setPauseTimeMS(20);
        }

        if (!skipAnimation) {
          setAnimationTimer(
            setTimeout(() => {
              newText = displayedText + char;
              setDisplayedText(newText);
            }, pauseTimeMS)
          );

          if (letterIndex < data.length) setLetterIndex(letterIndex + 1);
        } else {
          skip();
        }
      } else {
        setSkipAnimation(true);
      }
    }
    // eslint-disable-next-line
  }, [displayedText]);

  const handleSkip = () => {
    setSkipAnimation(true);
    skip();
  };

  const handleReset = () => {
    setDisplayedText("");
    setLetterIndex(0);
    setPauseTimeMS(20);
    setSkipAnimation(false);
  };

  //Highlight Line ------------------------------------------

  const [linePosition, setLinePosition] = useState(0);

  useEffect(() => {
    if (displayedText) {
      const p = textRef.current;

      const lineHeight = 24;
      let height = p.offsetHeight;

      setLinePosition(height / lineHeight - 1);
    }
  }, [displayedText]);

  //Numbers -----------------------------------

  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    setNumbers(Array.from({ length: linePosition + 1 }, (nothing, i) => i + 1));
  }, [linePosition]);

  return (
    <div className="editor">
      <div className="tab">
        <LogoMD />
        <p>bio.md</p>
      </div>
      <div className="code">
        <div className="line-numbers">
          {numbers.map((num) => {
            return (
              <span className="number" key={num}>
                {num}
              </span>
            );
          })}
        </div>
        <div className="text-container">
          <div
            className="highlight"
            style={{
              transform: `translateY(${linePosition * 24}px)`,
            }}
          ></div>
          <p className="text" ref={textRef}>
            {displayedText}
            <span></span>
          </p>
        </div>
      </div>
      <div className="console">
        <div
          className="text-container"
          onClick={skipAnimation ? handleReset : handleSkip}
        >
          {!skipAnimation ? (
            <>
              <p>running animation... {loader}</p>
            </>
          ) : (
            <>
              <p>animation finished</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Editor;
