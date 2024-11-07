import { useState } from "react";

export default function App() {
  const [currentValue, setCurrentValue] = useState(0);

  const handleIncrement = () => {
    if (currentValue < 10) {
      setCurrentValue((prev) => {
        return prev + 1;
      });
    }
  };

  const handleDecrement = () => {
    if (currentValue > -10)
      setCurrentValue((prev) => {
        return prev - 1;
      });
  };

  const getLabelColor = () => {
    if (currentValue < 0) {
      return "text-red-500"; // Red for negative values
    } else if (currentValue > 0) {
      return "text-green-500"; // Green for positive values
    } else {
      return "text-black"; // Black for zero
    }
  };

  return (
    <div className="flex h-screen w-full items-center justify-center gap-10 bg-white text-black">
      <button
        className="rounded border px-2 py-1"
        onClick={handleDecrement}
        disabled={currentValue <= -10}
      >
        -
      </button>

      <label htmlFor="" className={`${getLabelColor()}`}>
        {currentValue}
      </label>

      <button
        className="rounded border px-2 py-1"
        onClick={handleIncrement}
        disabled={currentValue >= 10}
      >
        +
      </button>
    </div>
  );
}
