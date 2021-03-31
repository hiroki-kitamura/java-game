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
