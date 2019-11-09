import { FETCH_PEOPLE_DATA, FETCH_FILM_DATA } from "../constants/constants";
import { readPeopleData, readFilmsData } from "../apis/list";

const loadPeopleAction = people => ({
  type: FETCH_PEOPLE_DATA,
  payload: people
});

export const loadPeopleThunk = () => {
  return dispatch => {
    readPeopleData().then(data => dispatch(loadPeopleAction(data.results)));
  }
}

const loadFilmTitleAction = title => ({ // we just need to get the film title
  type: FETCH_FILM_DATA,
  payload: title
});

export const loadFilmTitleThunk = url => {
  return dispatch => {
    readFilmsData(url).then(data => dispatch(loadFilmTitleAction(data.title)));
  }
}
