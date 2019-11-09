import React from 'react';
import styled from "styled-components";

import List from "../organisms/List";

const TableWrapper = styled.div`
  border: 1px solid;
`;

export default function Table() {
  return (
    <TableWrapper>
      <List />
    </TableWrapper>
  )
}
