import React from "react";
import styled from "styled-components";

type IconLinkProps = {
  src: string;
  href: string;
};

const Image = styled.img`
  height: 60px;
  width: 60px;
  margin: 0 8px;
`;

const IconLink = ({ src, href }: IconLinkProps) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <Image src={src} />
  </a>
);

export default IconLink;
