import React from 'react';
import styled from "styled-components";

const TextWrapper = styled.div`
  ${props => props.css}
`;

export default function Text({ text, css, tag: Tag }) {
  return (
    <TextWrapper css={css}>
      <Tag>{text}</Tag>
    </TextWrapper>
  )
}
