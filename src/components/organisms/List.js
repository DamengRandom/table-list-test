import React, { useMemo, useEffect, useState } from 'react';
import styled from "styled-components";
import { connect } from "react-redux";

import { ListItemWrapper } from "../../styles/shared";
import Text from "../atoms/Text";
import Pagination from "../atoms/Pagination";
import ListItem from "../molecules/ListItem";
import Details from "./Details";
import { loadPeopleThunk } from "../../actions/list";

const ListWrapper = styled.div`
  padding: 5px;
`;

const ListTable = styled.div`
  border-top: 1px solid;
  &>div:first-child {
    p {
      font-weight: bold;
    }
  }
`;

const ListContent = styled.div`
  cursor: pointer;
`;

const List = ({ people, loadPeopleThunk }) => {
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);
  const [theItem, setTheItem] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [peoplePerPage] = useState(4); // becasue of API only returns to 10 peices of data, so I decided to make 4 data per page

  const indexOfLastPeople = currentPage * peoplePerPage;
  const indexOfFirstPeople = indexOfLastPeople - peoplePerPage;
  const currentPeople = people && people.slice(indexOfFirstPeople, indexOfLastPeople);

  useEffect(() => {
    setLoading(true);
    loadPeopleThunk();
  }, [loadPeopleThunk]);

  useMemo(() => {
    if(people) {
      setLoading(false);
      setList(people);
    }
  }, [people]);

  const handleItemClick = name => {
    setTheItem(people.find(data => data.name === name) || {});
  }

  const ListData = ({currentPeople}) => (
    currentPeople.map(listItem => (
      <ListItem
        key={listItem.name}
        listItem={listItem}
        handleClick={() => handleItemClick(listItem.name)}
      />
    ))
  );

  const handlePageSwitch = pageNumber => {
    setCurrentPage(pageNumber);
  }
  
  return (
    <ListWrapper>
      <Text
        tag="h4"
        text="Table with list of people"
      />
      {!loading && list ?
        <>
          <ListTable>
            <ListItemWrapper>
              <p>Name</p>
              <p>Height</p>
              <p>Mass</p>
            </ListItemWrapper>
            <ListContent>
              <ListData currentPeople={currentPeople} />
            </ListContent>
            <Pagination
              peoplePerPage={peoplePerPage}
              totalPeople={people}
              handlePageSwitch={handlePageSwitch}
            />
          </ListTable>
          <Details theItem={theItem} />
        </> : <p>Loading ..</p>
      }
    </ListWrapper>
  )
}

const mapStateToProps = state => {
  return {
    people: state.people
  };
}

export default connect(mapStateToProps, { loadPeopleThunk })(List);
