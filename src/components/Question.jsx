// import { useState } from "react";

const Question = ({ title, info, onToggle, isActive }) => {
  //   const [showInfo, setShowInfo] = useState(false);

  //   const handleInfo = () => {
  //     setShowInfo(!showInfo);
  //   };
  return (
    <div
      className="flex w-3/4 cursor-pointer flex-col gap-2 rounded border p-4 shadow-md transition-all duration-300"
      onClick={onToggle}
    >
      <div id="question">
        <h2 className="text-left text-xl font-bold text-emerald-600">
          {title}
        </h2>
      </div>
      {isActive && (
        <div id="answer">
          <p className="text-md">{info}</p>
        </div>
      )}
    </div>
  );
};

export default Question;
