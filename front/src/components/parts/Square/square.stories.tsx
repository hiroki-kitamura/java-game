import React from "react";
import styled from "styled-components";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Square as SquareFC, SquareProps } from "src/components/parts/Square/Square";

export default {
  title: "Components/Square",
  component: SquareFC,
} as Meta;

const Template: Story<SquareProps> = ({ status, coordinate, onClick }) => {
  return <SquareFC status={status} coordinate={"2-2"} onClick={() => {}} />;
};
Template.parameters = {
  status: {
    values: ["ready", "blank", "black", "white"],
  },
  coordinate: {
    values: ["2-3"],
  },
  onClick: {
    values: () => {},
  },
};
export const Square = Template.bind({});
