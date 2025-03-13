import { useState } from "react";
import "./App.css";

const createEmptyArray = (length: number) => Array.from({ length });

function App() {
  const [currentValue, updateCurrent] = useState<number | undefined>(undefined);
  const [chiffre, updateChiffre] = useState<number | undefined>(undefined);
  const [operation, updateOp] = useState<string | undefined>(undefined);

  const sum = (a: number, b: number) => a + b;
  const multiplication = (a: number, b: number) => a * b;
  const soustraction = (a: number, b: number) => a - b;

  const operations: {
    [key: string]: {
      func: (a: number, b: number) => number;
      symbol: string;
    };
  } = {
    sum: { func: sum, symbol: "+" },
    soustraction: { func: soustraction, symbol: "-" },
    multiplication: { func: multiplication, symbol: "x" },
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>TITLE Calculator</h1>
        <div>
          {`${currentValue || 0} ${
            currentValue && operation ? operations[operation].symbol : ""
          } ${
            currentValue && operation && (chiffre || chiffre === 0)
              ? chiffre
              : ""
          }
        `}
        </div>
        <div>
          {Object.keys(operations).map((opName) => (
            <button onClick={() => updateOp(opName)}>{opName}</button>
          ))}
        </div>
        <div className="numbers">
          {createEmptyArray(10)
            .map((_, i) => i)
            .map((e) => (
              <button
                onClick={() =>
                  currentValue
                    ? operation && updateChiffre(e)
                    : updateCurrent(e)
                }
              >
                {e}
              </button>
            ))}
        </div>
        <button
          onClick={() => {
            if ((currentValue !== undefined && operation && chiffre !== undefined) || chiffre === 0) {
              if (operation && currentValue) {
                const res = operations[operation].func(currentValue, chiffre);
                updateCurrent(res);
                updateChiffre(undefined);
                updateOp(undefined);
              }
            }
          }}
        >
          =
        </button>
      </header>
    </div>
  );
}

export default App;