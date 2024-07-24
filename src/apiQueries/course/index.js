import { COURSE_API } from '../../services/api';
import instance from '../../services/axiosInstance';
import { urlToSearchParams } from '../../utilities/searchParams';

export const createCourse = (payload) =>
  instance.post(`${COURSE_API}/create`, payload);

export const editCourse = (payload, id) =>
  instance.post(`${COURSE_API}/update/${id}`, payload);

export const deleteCourse = (payload) =>
  instance.post(`${COURSE_API}/delete`, payload);

export const fetchAllCourses = ({ query }) =>
  instance.get(urlToSearchParams(COURSE_API, query));
export const fetchSingleCourse = (id) =>
  instance.get(`${COURSE_API}/data/${id}`);
