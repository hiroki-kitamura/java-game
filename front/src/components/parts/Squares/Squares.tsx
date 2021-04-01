import styled from "styled-components";
import axios from "axios";
import React, { useState } from "react";

import { Square } from "src/components/parts/Square/Square";
import { config } from "src/config";

export const Squares: React.FC<SquaresProps> = ({ squares, dispatcher }): JSX.Element => {
  const [canPrace, setCanPlace] = useState(false);

  return (
    <StyledSquares>
      {Array(64)
        .fill("")
        .map((_, i) => {
          const colNum = i % config.colNum;
          const rowNum = Math.floor(i / config.rowNum);
          const coordinate = colNum + "-" + rowNum;
          const status = squares[coordinate];
          const onClick = () => dispatcher(coordinate);

          return <Square status={status} coordinate={coordinate} onClick={onClick} key={coordinate}></Square>;
        })}
    </StyledSquares>
  );
};

export interface SquaresProps {
  squares: {
    [index: string]: "blank" | "white" | "black" | "ready";
  };
  dispatcher: Function;
}
const StyledSquares = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 400px;
  height: 400px;
  box-sizing: border-box;
`;
