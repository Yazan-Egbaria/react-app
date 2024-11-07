import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { useState } from "react";
import reviews from "./data/people";

import Member from "./components/Member";

export default function App() {
  const [index, setIndex] = useState(0);

  const handleNextIndex = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex + 1;
      return newIndex >= reviews.length ? 0 : newIndex;
    });
  };

  const handlePrevIndex = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex - 1;
      return newIndex < 0 ? reviews.length - 1 : newIndex;
    });
  };

  const handleSurprise = () => {
    setIndex(() => {
      let newIndex = Math.floor(Math.random() * reviews.length);
      if (newIndex === index) {
        newIndex += 1;
      }
      return newIndex;
    });
  };

  return (
    <div
      id="body"
      className="flex h-screen w-full items-center justify-center bg-slate-300"
    >
      <div
        id="container"
        className="flex h-[650px] w-1/2 flex-col items-center justify-evenly bg-white text-black"
      >
        <div id="members">
          <Member
            key={index}
            src={reviews[index].image}
            alt={reviews[index].alt}
            name={reviews[index].name}
            job={reviews[index].job}
            desc={reviews[index].text}
          />
        </div>

        <div id="arrows" className="flex gap-4 text-3xl">
          <FaArrowAltCircleLeft
            onClick={handlePrevIndex}
            className="cursor-pointer fill-blue-400 transition-all duration-300 hover:fill-blue-300"
          />
          <FaArrowAltCircleRight
            onClick={handleNextIndex}
            className="cursor-pointer fill-blue-400 transition-all duration-300 hover:fill-blue-300"
          />
        </div>

        <div id="surprise">
          <button
            className="rounded border border-transparent bg-blue-400 px-4 py-2 font-bold text-white transition-all duration-300 hover:border-blue-400 hover:bg-transparent hover:text-blue-400"
            onClick={handleSurprise}
          >
            Surprise Me
          </button>
        </div>
      </div>
    </div>
  );
}
