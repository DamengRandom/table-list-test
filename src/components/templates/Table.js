import React from 'react';
import styled from "styled-components";

import Text from "../atoms/Text";
import List from "../organisms/List";

const TableWrapper = styled.div`
  border: 1px solid;
`;

export default function Table() {
  return (
    <>
      <TableWrapper>
        <List />
      </TableWrapper>
      <Text tag="i" text="Note: I have checked the swapi documentation, the total people data is 10, becasue I need to make pagination functionality, so I decided to make 4 data per page so that I can show you how paginatin works in this app. Cheers" css={`color: #db2938; margin-top: 20px;`} />
    </>
  )
}
