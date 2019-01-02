import React from "react";
import styled from "styled-components";

type ImageProps = {
  src: string;
  small?: boolean;
};

// FIXME: define type more cleverly
type IconLinkProps = {
  src: string;
  href: string;
  small?: boolean;
};

const Image = styled.img`
  height: ${(props: ImageProps) => (props.small ? "30px" : "60px")};
  margin: ${(props: ImageProps) => (props.small ? "-6px 8px" : "0 8px")};
`;

const IconLink = ({ src, href, small }: IconLinkProps) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <Image src={src} small={small} />
  </a>
);

export default IconLink;
