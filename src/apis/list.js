import { PEOPLE_END_POINT } from '../constants/configs';

export const readPeopleData = () => {
  return fetch(PEOPLE_END_POINT).then(res => res.json());
}

export const readFilmsData = (url) => {
  return fetch(url).then(res => res.json());
}
