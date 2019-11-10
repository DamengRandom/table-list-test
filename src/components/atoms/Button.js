import React from 'react';
import styled from "styled-components";

const ButtonWrapper = styled.button`
  ${props => props.css}
`;

export default function Button({ type, name, onClick, text, css, disabled }) {
  return (
    <ButtonWrapper
      type={type}
      name={name}
      onClick={onClick}
      css={css}
      disabled={disabled}
    >
      {text}
    </ButtonWrapper>
  )
}
