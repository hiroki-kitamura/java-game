import styled from "styled-components";

export const Square: React.FC<SquareProps> = ({ status, coordinate, onClick }): JSX.Element => {
  const { squareColor, circleColor, isShowCircle } = getSquareColors(status);

  return (
    <StyledSquare backgroundColor={squareColor} coordinate={coordinate} onClick={onClick}>
      <StyledCircle backgroundColor={circleColor} isShow={isShowCircle} />
    </StyledSquare>
  );
};

export interface SquareProps {
  status: "blank" | "white" | "black" | "ready";
  coordinate: string;
  onClick: React.MouseEventHandler<HTMLElement>;
}

const getSquareColors = (status: string) => {
  let squareColor: string = "#048e04",
    circleColor: string = "white",
    isShowCircle: boolean = false;

  switch (status) {
    case "blank":
      squareColor = "#048e04";
      circleColor = "white";
      isShowCircle = false;
      break;
    case "white":
      squareColor = "#048e04";
      circleColor = "white";
      isShowCircle = true;
      break;
    case "black":
      squareColor = "#048e04";
      circleColor = "black";
      isShowCircle = true;
      break;
    case "ready":
      squareColor = "#8e7204";
      circleColor = "white";
      isShowCircle = false;
      break;
  }
  return {
    squareColor,
    circleColor,
    isShowCircle,
  };
};

const squareSize = 50;

interface StyledSquareProps {
  backgroundColor: string;
  coordinate: string;
  onClick: React.MouseEventHandler<HTMLElement>;
}
const StyledSquare = styled.div<StyledSquareProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${squareSize + "px"};
  height: ${squareSize + "px"};
  border: 1px solid #000;
  background-color: ${({ backgroundColor }) => backgroundColor};
  box-sizing: border-box;
`;

interface StyledCircleProps {
  backgroundColor: string;
  isShow: boolean;
}
const StyledCircle = styled.div<StyledCircleProps>`
  display: ${({ isShow }) => (isShow ? "block" : "none")};
  width: ${squareSize - 10 + "px"};
  height: ${squareSize - 10 + "px"};
  border: 1px solid #333;
  border-radius: ${squareSize + "px"};
  background-color: ${({ backgroundColor }) => backgroundColor};
  box-sizing: border-box;
`;
