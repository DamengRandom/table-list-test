import styled from 'styled-components';

export const ListItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;

  p {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
    padding: 0px;
    margin: 0px;
    border-bottom: 1px solid;
  }
  p:first-child {
    border-left: 1px solid;
  }
  p:last-child {
    border-right: 1px solid;
  }
  p:nth-child(2) {
    border-left: 1px solid;
    border-right: 1px solid;
  }
`;