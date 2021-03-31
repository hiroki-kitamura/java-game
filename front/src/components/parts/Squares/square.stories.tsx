import React from "react";
import styled from "styled-components";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Squares as SquaresFC, SquaresProps } from "src/components/parts/Squares/Squares";
import { config } from "src/config";

export const createBlankSquare = () => {
  let squares: { [index: string]: "blank" | "white" | "black" | "ready" } = {};
  for (let i = 0; i < config.colNum * config.rowNum - 1; i++) {
    let colNum = i % config.colNum;
    let rowNum = Math.floor(i / config.rowNum);
    squares[colNum + "-" + rowNum] = "blank";
  }
  return squares;
};

export default {
  title: "Components/Squares",
  component: SquaresFC,
} as Meta;

const Template: Story<SquaresProps> = (args) => {
  return <SquaresFC {...args} />;
};
export const Squares = Template.bind({});
Squares.args = {
  squares: createBlankSquare(),
};
Squares.parameters = {
  squares: {
    values: createBlankSquare(),
  },
};
