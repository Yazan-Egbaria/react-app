import { useState } from "react";

export default function App() {
  const [isShown, setIsShown] = useState(false);
  return (
    <div className="mx-auto my-12 block w-fit text-center">
      <button
        onClick={() => {
          setIsShown((prev) => !prev);
        }}
      >
        {isShown ? "Hide Box" : "Show Box"}
      </button>
      {isShown && (
        <div className="mx-auto mt-4 h-12 w-12 rounded bg-slate-600"></div>
      )}
    </div>
  );
}
