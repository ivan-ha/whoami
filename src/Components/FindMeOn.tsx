import React from "react";
import styled from "styled-components";

import IconLink from "./IconLink";
import Title from "./Title";

const data = [
  {
    src: "/images/github.svg",
    href: "https://github.com/ivan-ha",
  },
  {
    src: "/images/linkedin.svg",
    href: "https://www.linkedin.com/in/ivan-ha",
  },
  {
    src: "/images/medium.svg",
    href: "https://medium.com/@ivan.ha",
  },
  {
    src: "/images/twitter.svg",
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
