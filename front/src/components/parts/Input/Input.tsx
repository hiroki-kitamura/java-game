import styled from "styled-components";

interface InputProps {
  placeholder?: string;
  margin?: string;
}

export const Input = ({ placeholder, margin }: InputProps) => {
  return <StyledInput placeholder={placeholder} margin={margin} />;
};

interface StyledInputProps {
  margin?: string;
}
const StyledInput = styled.input<StyledInputProps>`
  display: inline-block;
  width: 250px;
  height: 25px;
  margin: ${({ margin }) => (margin ? margin : 0)};
  padding: 5px 5px;
  border: solid 1px #666;
  border-radius: 5px;
`;
