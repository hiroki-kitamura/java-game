import styled from "styled-components";

interface ButtonProps {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLElement>;
  margin?: string;
}

export const Button = ({ children, onClick, margin }: ButtonProps) => {
  return (
    <StyledButton onClick={onClick} margin={margin}>
      {children}
    </StyledButton>
  );
};

interface StyledButtonProps {
  margin?: string;
  onClick: React.MouseEventHandler<HTMLElement>;
}
const StyledButton = styled.button<StyledButtonProps>`
  display: inline-block;
  width: 100px;
  height: 40px;
  margin: ${({ margin }) => (margin ? margin : 0)};
  text-align: center;
  border: 1px solid #666;
  border-radius: 20px;
  border: 2px solid #000;
  background: #fff;
  box-shadow: 0 4px 0 #000;
  transition: 0.5s;
  &:hover {
    box-shadow: 0px 0px 0 #000;
    transform: translateY(2px);
  }
`;
