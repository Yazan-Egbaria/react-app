import { useState } from "react";

export default function App() {
  const [currValue, setCurrValue] = useState(0);

  const handleIncrement = () => {
    setCurrValue((prevValue) => prevValue + 1);
  };
  return (
    <div>
      <button onClick={handleIncrement}>Increment</button>
      <p>{currValue}</p>
    </div>
  );
}
