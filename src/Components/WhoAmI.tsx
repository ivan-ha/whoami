import React from "react";

import Button from "./Button";
import Title from "./Title";

type PropsType = {
  onButtonClick: () => void;
};

const whoAmI = ({ onButtonClick }: PropsType) => (
  <div className="section section1">
    <Title text="Ivan Ha" />
    <Button onClick={onButtonClick} text="Move down" />
  </div>
);

export default whoAmI;
