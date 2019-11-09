import React from 'react';
import styled from "styled-components";

const PageNav = styled.nav`
  position: relative;
  height: auto;

  ul {
    position: absolute;
    right: 0px;
    list-style: none;
    display: flex;
    padding: 0;
    li {
      padding: 0 5px;
      cursor: pointer;
    }
  }
`;

export default function Pagination({ peoplePerPage, totalPeople, handlePageSwitch }) {
  const pageNumbers = [];

  for(let i = 1; i <= Math.ceil(totalPeople.length / peoplePerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <PageNav>
      <ul>
        {pageNumbers.map(number => (
          <li
            key={number}
            onClick={() => handlePageSwitch(number)}
          >{number}</li>
        ))}
      </ul>
    </PageNav>
  )
}
