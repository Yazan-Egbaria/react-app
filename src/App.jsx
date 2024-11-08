import { useState } from "react";
import Question from "./components/Question";
import questions from "./data/data";

export default function App() {
  const [activeId, setActiveId] = useState(null);
  const toggleId = (id) => {
    setActiveId((prevId) => (prevId === id ? null : id));
  };
  return (
    <div
      id="mainContainer"
      className="flex h-screen w-full items-center justify-center bg-emerald-200"
    >
      <div
        id="accordionContainer"
        className="flex w-6/12 flex-col items-center justify-center gap-4 bg-white py-12"
      >
        <h1 className="text-4xl text-emerald-600">Questions</h1>

        <div id="questions" className="flex w-full flex-col items-center gap-4">
          {questions.map((question) => {
            return (
              <Question
                key={question.id}
                title={question.title}
                info={question.info}
                onToggle={() => {
                  toggleId(question.id);
                }}
                isActive={activeId === question.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
