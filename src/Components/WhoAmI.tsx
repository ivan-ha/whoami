import React from "react";

type PropsType = {
  onButtonClick: () => void;
};

const WhoAmI = ({ onButtonClick }: PropsType) => (
  <div className="section section1">
    <h3>Section 1</h3>
    <button onClick={onButtonClick}>Move down</button>
  </div>
);

export default WhoAmI;
