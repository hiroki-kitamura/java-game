import React from "react";
import styled from "styled-components";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return <StyledLayout>{children}</StyledLayout>;
};

const StyledLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
