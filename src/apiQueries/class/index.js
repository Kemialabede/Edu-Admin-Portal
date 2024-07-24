import { CLASS_API, FETCH_CLASSES } from '../../services/api';
import instance from '../../services/axiosInstance';
import { urlToSearchParams } from '../../utilities/searchParams';

export const createClass = (payload) =>
  instance.post(`${CLASS_API}/create`, payload);

export const deleteClass = (payload) =>
  instance.post(`${CLASS_API}/delete`, payload);

export const editClass = (payload, id) =>
  instance.post(`${CLASS_API}/update/${id}`, payload);

export const fetchAllClasses = ({ query }) =>
  instance.get(urlToSearchParams(FETCH_CLASSES, query));
