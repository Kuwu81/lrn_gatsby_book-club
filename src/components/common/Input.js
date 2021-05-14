import styled from "styled-components";

export const Input = styled.input`
  display: block;
  position: relative;
  width: 100%;
  box-sizing: border-box;
  padding: 8px;
  font-size: 14px;
  margin-bottom: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: none;

  &:focus, &:active {
    border: 1px solid rebeccapurple;
  }
`;
