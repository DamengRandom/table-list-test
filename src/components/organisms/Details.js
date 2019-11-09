import React, { useMemo, useCallback, useState } from 'react';
import styled from "styled-components";

import Text from "../atoms/Text";

const DetailsWrapper = styled.div`
  border-top: 1px solid;
  margin: 0 -5px;
  margin-top: 40px;
`;

const DetailsContents = styled.div`
  p > span,
  div > span {
    font-weight: bold;
  }
`;

export default function Details({ theItem }) {
  const [titleLoading, setTitleLoading] = useState(true);
  const [firmTitles, setFilmTitles] = useState([]);
  const { name, gender, birth_year, films } = theItem;

  const getFilmTitle = useCallback(
    () => {
      let firmTitlesArray = [];
      setTitleLoading(true);
      if(films) {
        films.map(filmUrl => {
          fetch(filmUrl).then(res => res.json()).then(data => {;
            firmTitlesArray.push(data.title);
            if(firmTitlesArray.length === films.length) {
              setFilmTitles(firmTitlesArray);
              setTitleLoading(false);
            }
          });
          return firmTitlesArray;
        });
      }
    },
    [films],
  )

  useMemo(() => {
    getFilmTitle();
  }, [getFilmTitle]);

  return (
    <DetailsWrapper>
      <Text
        tag="h4"
        text="Details section"
      />
      {
        theItem && theItem !== {} && firmTitles.length > 0 ? (
          <DetailsContents>
            <p><span>name</span>: {name}</p>
            <p><span>birth year</span>: {birth_year}</p>
            <p><span>gender</span>: {gender}</p>
            <div>
              <span>List of films</span>:
              {
                !titleLoading ?
                  firmTitles.map(title => (<p key={title}>{title}</p>))
                  :
                  <p>Loading film title(s) ..</p>
              }
            </div>
          </DetailsContents>
        ) : <p>Click table row data to view film details ..</p>
      }
    </DetailsWrapper>
  )
}
