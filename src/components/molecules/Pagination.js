import React from 'react';
import styled from "styled-components";

import Button from "../atoms/Button";
import Text from "../atoms/Text";

const PaginationWrapper = styled.div`
  text-align: right;
  display: flex;
  justify-content: flex-end;
  padding-top: 10px;
  font-size: 13px;

  button {
    cursor: pointer;
    border: none;
    outline: none;
    background-color: #fff;
  }
`;

export default function Pagination({ currentPageNumber, handlePageSwitch }) {
  return (
    <PaginationWrapper>
      <Text tag="span" text="Pagination: " />
      <Button
        type="button"
        name="back"
        onClick={() => {
          currentPageNumber = currentPageNumber - 1;
          if(currentPageNumber <= 0) {
            currentPageNumber = 1;
          }
          handlePageSwitch(currentPageNumber);
        }}
        text="< Back"
        disabled={currentPageNumber <= 1 ? true : false}
      />
      <Button
        type="button"
        name="next"
        onClick={() => {
          currentPageNumber = currentPageNumber + 1;
          if(currentPageNumber >= 3) {
            currentPageNumber = 3;
          }
          handlePageSwitch(currentPageNumber);
        }}
        text="Next >"
        disabled={currentPageNumber >= 3 ? true : false}
      />
    </PaginationWrapper>
  )
}
