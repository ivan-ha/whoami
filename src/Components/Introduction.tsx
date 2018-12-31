import randomColor from "randomcolor";
import React from "react";
import styled from "styled-components";

import Title from "./Title";

type TagProps = {
  background: string;
};

const Tag = styled.div`
  background: ${(props: TagProps) => props.background};
  border-radius: 4px;
  color: #0a0a0a;
  display: inline-block;
  font-size: 20px;
  font-weight: 400;
  height: 30px;
  line-height: 28px;
  list-style: none;
  margin-right: 8px;
  margin: 5px;
  opacity: 1;
  padding: 2px 10px;
  white-space: nowrap;
`;

const TagWrapper = styled.div`
  margin: auto;
  width: 70%;
`;

const tagList = [
  "web development",
  "frontend",
  "javascript",
  "typescript",
  "flow",
  "react",
  "react-native",
  "next.js",
  "redux",
  "redux-saga",
  "immutable.js",
  "reselect",
  "styled-components",
  "storybook",
  "jest",
  "ramda",
  "lodash",
  "git",
  "husky",
  "import-sort",
  "lint-staged",
  "prettier",
  "eslint",
  "danger-js",
];

const Introduction = () => (
  <div className="section">
    <Title text="What I Do" />
    <TagWrapper>
      {tagList.map(tag => (
        <Tag key={tag} background={randomColor({ luminosity: "light" })}>
          {tag}
        </Tag>
      ))}
    </TagWrapper>
  </div>
);

export default Introduction;
