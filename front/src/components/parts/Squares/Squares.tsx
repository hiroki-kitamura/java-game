import styled from "styled-components";
import axios from "axios";
import React, { useState } from "react";

import { Square } from "src/components/parts/Square/Square";
import { config } from "src/config";

export const Squares: React.FC<SquaresProps> = ({ squares }): JSX.Element => {
  const [canPrace, setCanPlace] = useState(false);

  return (
    <StyledSquares>
      {Array(64)
        .fill("")
        .map((_, i) => {
          let colNum = i % config.colNum;
          let rowNum = Math.floor(i / config.rowNum);
          let coordinate = colNum + "-" + rowNum;
          let status = squares[coordinate];

          const sendDiskActionToAPI: React.MouseEventHandler<HTMLElement> = async () => {
            const params = new URLSearchParams();
            params.append("coordinate", coordinate);
            try {
              if (canPrace) return;
              await axios.post("localhost:8080/", params);
              setCanPlace(false);
            } catch (err) {
              setCanPlace(true);
              console.log(err);
            }
          };
          return <Square status={status} coordinate={coordinate} onClick={() => sendDiskActionToAPI} key={coordinate}></Square>;
        })}
    </StyledSquares>
  );
};

export interface SquaresProps {
  squares: {
    [index: string]: "blank" | "white" | "black" | "ready";
  };
}
const StyledSquares = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 400px;
  height: 400px;
  box-sizing: border-box;
`;
