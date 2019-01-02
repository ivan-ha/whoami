import React from "react";
import styled from "styled-components";

import github from "../Images/github.svg";
import linkedin from "../Images/linkedin.svg";
import medium from "../Images/medium.svg";
import twitter from "../Images/twitter.svg";
import IconLink from "./IconLink";
import Title from "./Title";

const data = [
  {
    src: github,
    href: "https://github.com/ivan-ha",
  },
  {
    src: linkedin,
    href: "https://www.linkedin.com/in/ivan-ha",
  },
  {
    src: medium,
    href: "https://medium.com/@ivan.ha",
  },
  {
    src: twitter,
    href: "https://twitter.com/ivanhahk",
  },
];

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const FindMeOn = () => (
  <div className="section">
    <Title text="Find Me On" />
    <IconWrapper>
      {data.map(item => (
        <IconLink {...item} key={item.src} />
      ))}
    </IconWrapper>
  </div>
);

export default FindMeOn;
