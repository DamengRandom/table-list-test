import { FETCH_PEOPLE_DATA, FETCH_FILM_DATA } from "../constants/constants";
const initialState = {};

export default (state=initialState, action) => {
  switch(action.type) {
    case FETCH_PEOPLE_DATA:
      return {
        ...state,
        people: action.payload
      }
    case FETCH_FILM_DATA:
      return {
        ...state,
        filmTitle: action.payload
      }
    default:
      return state;
  }
}
