import React from "react";
import styled from "styled-components";

type PropsType = {
  text: string;
};

const StyledH3 = styled.h3`
  font-size: 5em;
  text-align: center;
  color: #fff;
  font-weight: 700;
`;

const Title = ({ text }: PropsType) => <StyledH3>{text}</StyledH3>;

export default Title;
