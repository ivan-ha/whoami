import React from "react";

import Title from "./Title";

type PropsType = {
  onButtonClick: () => void;
};

const whoAmI = ({ onButtonClick }: PropsType) => (
  <div className="section section1">
    <Title text="Ivan Ha" />
    <button onClick={onButtonClick}>Move down</button>
  </div>
);

export default whoAmI;
