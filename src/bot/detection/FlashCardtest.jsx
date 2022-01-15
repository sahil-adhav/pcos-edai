import React, { useState, useEffect } from "react";

import "./test.css";

const FlashCard = ({answer,yes,no,incrementIndex}) => {
  const [showAnswer, setShowAnswer] = useState(true);

  //useEffect(() => setShowAnswer(false), [question]);

  return (
    <>
      <div
        className="flashcard-container"
        //onClick={() => setShowAnswer(!showAnswer)}
      >
        {answer}
      </div>
      {showAnswer && (
        <button onClick={yes,incrementIndex} className="flashcard-button">
          Yes
        </button>
      )}
      {showAnswer && (
        <button onClick={no,incrementIndex} className="flashcard-button">
          No
        </button>
      )}
    </>
  );
};

export default FlashCard;
