import React from "react";

import "./test.css";

const Test = (props) => {
  const options = [
    {
      text: "Take a test",
      handler: props.actionProvider.handleTest,
      id: 1,
    },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Test;