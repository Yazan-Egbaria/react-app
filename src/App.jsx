import { useState } from "react";
import CustomBtn from "./components/CustomBtn";

export default function App() {
  const [color, setColor] = useState("None");
  const colors = ["blue", "red", "yellow"];

  const handleBtnClick = (color) => {
    setColor(color);
  };

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-4">
      <label htmlFor="">{color}</label>
      <div className="flex gap-4">
        {colors.map((color) => {
          return (
            <CustomBtn key={color} color={color} listColor={handleBtnClick} />
          );
        })}
      </div>
    </div>
  );
}
