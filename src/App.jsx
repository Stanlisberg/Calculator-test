import CalculatorPage from "./components/CalculatorPage";
import { CalculatorProvider } from "./components/CalculatorContext";
function App() {
  return (
    <>
      <div>
        <CalculatorProvider>
          <CalculatorPage />
        </CalculatorProvider>
      </div>
    </>
  );
}

export default App;
