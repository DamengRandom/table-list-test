import React from 'react';

import { ListItemWrapper } from "../../styles/shared";

export default function ListItem({ handleClick, listItem }) {
  const { name, mass, height } = listItem;
  return (
    <ListItemWrapper onClick={handleClick}>
      <p>{name}</p>
      <p>{height}</p>
      <p>{mass}</p>
    </ListItemWrapper>
  )
}
