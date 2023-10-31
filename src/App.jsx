import { useState } from "react";
import SeriousPage from "./components/SeriousPage";
import FunPage from "./components/FunPage";
import { CalculatorProvider } from "./components/CalculatorContext";
import { Switch } from "antd";

function App() {
  const [switchState, setSwitchState] = useState("Serious");
  const [changeComponent, setChangeComponent] = useState(true);

  //---- For switch-----
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);

    // ---Disable button when switch to fun
    if (checked === true) {
      setSwitchState("Fun");
      setChangeComponent(false);
    } else if (checked == false) {
      setSwitchState("Serious");
      setChangeComponent(true);
    }
  };
  return (
    <>
      <div className="app">
        <div className="switch">
          <p className="cac-name">My Calc</p>
          <Switch
            size="default"
            onChange={onChange}
            className="switch-button"
          />
        </div>
        <div className="switch-state">{switchState}</div>
        <CalculatorProvider>
          {changeComponent === false ? <FunPage /> : <SeriousPage />}
        </CalculatorProvider>
      </div>
    </>
  );
}

export default App;
