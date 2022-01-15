import React from "react";

import "./Options.css";

const Options = (props) => {
  const options = [
    {
      text: "FAQs",
      handler: props.actionProvider.handleFAQs,
      id: 1,
    },
    { 
      text: "PCOS detection", 
      handler: props.actionProvider.handleTest,  
      id: 2 
    },
    { 
      text: "Explore the website", 
      handler: props.actionProvider.handleSite, 
      id: 3 
    },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;
