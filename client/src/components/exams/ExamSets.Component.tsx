import React, { useState } from "react";
import MCQForm from "../mcq/MCQForm.Component";
import "./css/ExamSets.css";
function ExamSets() {
  const [activeButton, setActiveButton] = useState<string>("setA");
  const handleActiveButton = (buttonValue: string) => {
    setActiveButton(buttonValue);
  };
  return (
    <div>
      <div className="all-set">
        <button
          className={activeButton === "setA" ? "active set" : "set"}
          onClick={() => handleActiveButton("setA")}
        >
          Set A
        </button>
        <button
          className={activeButton === "setB" ? "active set" : "set"}
          onClick={() => handleActiveButton("setB")}
        >
          Set B
        </button>
        <button
          className={activeButton === "setC" ? "active set" : "set"}
          onClick={() => handleActiveButton("setC")}
        >
          Set C
        </button>
        <button
          className={activeButton === "setD" ? "active set" : "set"}
          onClick={() => handleActiveButton("setD")}
        >
          Set D
        </button>
      </div>
      <div className="mcq-form">
        {activeButton === "setA" && (
          <div className="mcq-form-set">
            <div>Set A</div>
            <MCQForm />
          </div>
        )}
        {activeButton === "setB" && (
          <div>
            <div>Set B</div>
            <MCQForm />
          </div>
        )}
        {activeButton === "setC" && (
          <div>
            <div>Set C</div>
            <MCQForm />
          </div>
        )}
        {activeButton === "setD" && (
          <div>
            <div>Set D</div>
            <MCQForm />
          </div>
        )}
      </div>
    </div>
  );
}

export default ExamSets;
