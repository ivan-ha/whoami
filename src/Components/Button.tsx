import React from "react";
import styled from "styled-components";

type PropsType = {
  onClick: () => void;
  text: string;
};

const StyledButton = styled.button`
  padding: 0.93em 1.87em;
  background: #35495e;
  border-radius: 5px;
  border-color: transparent;
  display: block;
  color: #fff;
  margin: 0 auto;
  cursor: pointer;
  font-size: 0.85em;
`;

const Button = ({ onClick, text }: PropsType) => (
  <StyledButton onClick={onClick}>{text}</StyledButton>
);

export default Button;
