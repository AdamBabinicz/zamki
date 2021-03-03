import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.button`
  border: none;
  outline: none;
  color: #fff;
  padding: 6px 1.3em;
  font-size: ${({ size }) => (size ? size + "px" : "18px")};
  font-weight: 500;
  border-radius: 3px;
  background: #2a9d8f;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: #248b7f;
  }

  &:focus {
    outline: none;
  }
`;

export function Button(props) {
  const { size } = props;
  return (
    <ButtonWrapper size={size} className={props.className}>
      {props.children}
    </ButtonWrapper>
  );
}
