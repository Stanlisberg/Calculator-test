import React, { useState, useEffect, useContext } from "react";
import { Switch } from "antd";
import CalculatorContext from "./CalculatorContext";

function CalculatorPage() {
  const [switchState, setSwitchState] = useState("Serious");
  const [answer, setAnswer] = useState("");
  const [disableButton, setDisableButton] = useState();
  const { fetchMovies, fetchJokes, fetchMemes, movies, jokes, memes } =
    useContext(CalculatorContext);

  useEffect(() => {
    fetchJokes();
    fetchMovies();
    fetchMemes();
  }, []);

  console.log(memes);
  console.log(movies);
  console.log(jokes);

  //---- For switch-----
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);

    if (checked === true) {
      setDisableButton(true);
      setSwitchState("Fun");
    } else if (checked == false) {
      setSwitchState("Serious");
      setDisableButton(false);
    }
  };

  const clickButton = (e) => {
    setAnswer(answer.concat(e.target.value));
  };

  const clearButton = () => {
    setAnswer("");
  };

  const backSpace = () => {
    setAnswer(answer.slice(0, -1));
  };

  const evaluate = () => {
    setAnswer(eval(answer).toString());
  };

  return (
    <>
      <div className="div-container">
        <div className="switch">
          <p>My Calc</p>
          <Switch
            size="default"
            onChange={onChange}
            className="switch-button"
          />
        </div>
        <div className="switch-state">{switchState}</div>
        {/* <input type="text" value={answer} /> */}
        <div className="text">
          {answer}
          <div>
            {/* {jokes?.map((item) => (
            <div id={item.id}>
                {item.setup}
                {answer}
            </div>
        ))} */}
          </div>
        </div>
        <div className="button">
          <button
            className="change-color"
            id="clear-button"
            onClick={clearButton}
          >
            Reset
          </button>
          <button className="change-color" id="back-space" onClick={backSpace}>
            Del
          </button>
          <button
            className="change-color"
            value="/"
            disabled={disableButton === true ? true : false}
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
            disabled={disableButton === true ? true : false}
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
            disabled={disableButton === true ? true : false}
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
            disabled={disableButton === true ? true : false}
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
            =
          </button>
        </div>
      </div>
    </>
  );
}

export default CalculatorPage;
