import { useState, useEffect } from "react";
import { handleAnswer, restartCalculator } from "./Helper";
function App() {
  const [instruction, setInstruction] = useState("");
  const [answer, setAnswer] = useState("");
  const [isFinished, setIsFinished] = useState(false);
  const [isRestart, setIsRestart] = useState(false);
  const startOver = () => {
    setIsRestart(true);
    setIsFinished(false);
    setAnswer("");
  };
  useEffect(() => {
    return () => {
      restartCalculator();
    };
  }, [isRestart]);

  return (
    <div className="App">
      <input
        type="text"
        value={instruction}
        onChange={(e) => setInstruction(e.target.value)}
        disabled={isFinished}
      />
      <button
        onClick={() =>
          handleAnswer(instruction, setInstruction, setAnswer, setIsFinished)
        }
        disabled={isFinished}
      >
        Submit
      </button>
      <span style={{ marginLeft: "30px" }}>The Answer is - </span>
      <span>{answer}</span>
      <button onClick={() => startOver()}>Start Over</button>
    </div>
  );
}

export default App;
