import { ChangeEventHandler } from "react";
import styled from "styled-components";

interface InputProps {
  placeholder?: string;
  value: string | number | undefined;
  margin?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export const Input = ({ placeholder, margin, value, onChange }: InputProps) => {
  return <StyledInput onChange={onChange} placeholder={placeholder} margin={margin} value={value} />;
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
