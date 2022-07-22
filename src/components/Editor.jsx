import { useEffect, useState } from "react";

import json from "../test/data.json";

const Editor = () => {
  const [data, setData] = useState("");
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [ininitializer, setIninitializer] = useState(0);
  const [pause, setPause] = useState(20);
  const [skipAnimation, setSkipAnimation] = useState(false);
  const [ready, setReady] = useState(true);

  useEffect(() => {
    setData(json.bio);
    setIninitializer(1);
  }, []);

  const [timerID, setTimerID] = useState(0);

  useEffect(() => {
    if (data.length > 0) {
      if (index !== data.length) {
        let char = data[index];
        let newText = "";

        if (char === `;`) {
          char = `. \n`;
          setPause(2000);
        } else if (char === `.`) {
          setPause(1000);
        } else if (char === `,`) {
          setPause(500);
        } else {
          setPause(20);
        }

        if (!skipAnimation) {
          setReady(false);

          const timeoutID = setTimeout(() => {
            newText = text + char;
            setText(newText);
            setReady(true);
          }, pause);

          setTimerID(timeoutID);
          // console.log(`inicia actualizacion del timer: ${timer}`);

          if (index < data.length) setIndex(index + 1);
        } else {
          // replaceAll method is new, so is incompatible with older versions, use regexp instead

          let newData = data.replace(/;/g, ". \n");
          setText(newData);
        }
      }
    }
    //eslint-disable-next-line
  }, [ininitializer, text]);

  const handleClick = () => {
    setSkipAnimation(true);
    clearTimeout(timerID);
    let newData = data.replace(/;/g, ". \n");
    setText(newData);
  };

  const handleReset = () => {
    setText("");
    setIndex(0);
    setPause(20);
    setSkipAnimation(false);
  };

  const [line, setLine] = useState(1);

  useEffect(() => {
    if (text) {
      let p = document.querySelector("p");
      let words = p.textContent.split(" ");
      let text = "";

      words.forEach((word) => {
        text = text + "<span>" + word + "</span> ";
      });

      p.innerHTML = text;

      const resize = () => {
        let line = 0;
        let prevTop = -15;

        p.querySelectorAll("span").forEach((word) => {
          let rect = word.getBoundingClientRect();
          let win = word.ownerDocument.defaultView;

          let top = rect.top + win.pageYOffset;

          if (top !== prevTop) {
            prevTop = top;
            line++;
          }

          // word.setAttribute("class", "line" + line);
        }); //each

        setLine(line);
      };

      window.addEventListener("resize", resize); //resize

      resize();
    }
  }, [text]);

  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    setNumbers(Array.from({ length: line }, (_, i) => i + 1));
  }, [line]);

  const [loader, setLoader] = useState("/");

  useEffect(() => {
    setTimeout(() => {
      if (loader === "/") setLoader("\\");
      else setLoader("/");
    }, 200);
  }, [loader]);

  return (
    <>
      <div
        className={
          // index !== data.length
          //   ? skipAnimation
          //     ? "editor"
          //     : "editor active"
          //   : "editor"
          "editor"
        }
      >
        <div className="tab">
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
            {/* {text.split("\n").map((str, index) => (
              <p key={index}>{str}</p>
            ))} */}
            <div
              className="highlight"
              style={{
                transform: `translateY(${(line - 1) * 23}px)`,
              }}
            ></div>
            <p className="text">{text}</p>
          </div>
        </div>
        <div className="console">
          <ul className="tabs">
            <li>Problems</li>
            <li>Output</li>
            <li>Terminal</li>
            <li>Debug</li>
          </ul>
          <div
            className="text-container"
            onClick={
              index !== data.length
                ? skipAnimation
                  ? handleReset
                  : handleClick
                : handleReset
            }
          >
            {index !== data.length ? (
              !skipAnimation ? (
                <>
                  <span>event</span>
                  <p>- running animation... {loader}</p>
                  <span>info</span>
                  <p>- click or tap here to skip the animation</p>
                </>
              ) : (
                <>
                  <span>event</span>
                  <p>- animation finished</p>
                  <span>info</span>
                  <p>- click or tap here to replay the animation</p>
                </>
              )
            ) : (
              <>
                <span>event</span>
                <p>- animation finished</p>
                <span>info</span>
                <p>- click or tap here to replay the animation</p>
              </>
            )}
          </div>
        </div>
      </div>
      {/* <button
        onClick={(e) => {
          handleReset();
          e.target.classList.add("loading");
        }}
        className={ready ? undefined : "yes"}
      >
        {ready ? "Reset" : "Skip Animation"}
      </button> */}
    </>
  );
};

export default Editor;
