import React, { useState, useEffect, useContext } from "react";
import CalculatorContext from "./CalculatorContext";

function FunPage() {
  const [answer, setAnswer] = useState("");
  const { displayResponse, movieData, jokeData, memeData } = useContext(CalculatorContext);

  useEffect(() => {
    displayResponse(753);
    displayResponse(172);
    displayResponse(112);
  }, []);

  const clickButton = (e) => {
    setAnswer(answer.concat(e.target.value));
  };

  const backSpace = () => {
    setAnswer(answer?.slice(0, -1));
  };

  const evaluate = () => {
    if (answer?.includes("753")) {
      setAnswer(movieData);
    } else if (answer?.includes("172")) {
      setAnswer(jokeData);
    } else if (answer?.includes("112")) {
      setAnswer(memeData);
    }
  };

  return (
    <>
      <div className="div-container">
        <input type="text" value={answer} onChange={() => {}} />
        <div className="button">
          <button
            className="change-color"
            id="clear-button"
            onClick={() => {
              setAnswer("");
              displayResponse(753);
              displayResponse(172);
              displayResponse(112);
            }}
          >
            Reset
          </button>
          <button className="change-color" id="back-space" onClick={backSpace}>
            Del
          </button>
          <button
            className="change-color"
            value="/"
            disabled={true}
            onClick={clickButton}
          >
            &divide;
          </button>
          <button value="7" onClick={clickButton}>
            7
          </button>
          <button value="8" onClick={clickButton}>
            8
          </button>
          <button value="9" onClick={clickButton}>
            9
          </button>
          <button
            className="change-color"
            value="*"
            onClick={clickButton}
            disabled={true}
          >
            &times;
          </button>
          <button value="4" onClick={clickButton}>
            4
          </button>
          <button value="5" onClick={clickButton}>
            5
          </button>
          <button value="6" onClick={clickButton}>
            6
          </button>
          <button
            disabled={true}
            className="change-color"
            value="-"
            onClick={clickButton}
          >
            -
          </button>
          <button value="1" onClick={clickButton}>
            1
          </button>
          <button value="2" onClick={clickButton}>
            2
          </button>
          <button value="3" onClick={clickButton}>
            3
          </button>
          <button
            disabled={true}
            className="change-color"
            value="+"
            onClick={clickButton}
          >
            +
          </button>
          <button value="0" onClick={clickButton}>
            0
          </button>
          <button value="." onClick={clickButton}>
            .
          </button>
          <button className="change-color" id="answer" onClick={evaluate}>
            Send
          </button>
        </div>
      </div>
    </>
  );
}

export default FunPage;
