import { useState } from "react";
import Checkbox from "./components/Checkbox";

export default function App() {
  const [checkboxes, setCheckboxes] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: true,
    checkbox4: true,
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [name]: checked,
    }));
  };

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-4">
      {Object.keys(checkboxes).map((checkbox, index) => (
        <Checkbox
          key={index}
          label={`Checkbox ${index + 1}`}
          name={checkbox}
          checked={checkboxes[checkbox]}
          onChange={handleCheckboxChange}
        />
      ))}
    </div>
  );
}
