import React from "react";
import styled from "styled-components";

type PropsType = {
  onClick: () => void;
  text: string;
};

const StyledButton = styled.button`
  padding: 0.93em 1.87em;
  background: #caff45;
  border-radius: 5px;
  border-color: transparent;
  display: block;
  color: #262626;
  margin: 0 auto;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
  outline: none;
`;

const Button = ({ onClick, text }: PropsType) => (
  <StyledButton onClick={onClick}>{text}</StyledButton>
);

export default Button;
