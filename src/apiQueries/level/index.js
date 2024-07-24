import { FETCH_LEVELS, LEVEL_API } from '../../services/api';
import instance from '../../services/axiosInstance';
import { urlToSearchParams } from '../../utilities/searchParams';

export const createLevel = (payload) =>
  instance.post(`${LEVEL_API}/create`, payload);

export const editLevel = (payload, id) =>
  instance.post(`${LEVEL_API}/update/${id}`, payload);

export const deleteLevel = (payload) =>
  instance.post(`${LEVEL_API}/delete`, payload);

export const fetchAllLevels = ({ query }) =>
  instance.get(urlToSearchParams(FETCH_LEVELS, query));
