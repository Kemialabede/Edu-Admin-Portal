import { COURSE_MATERIALS_API } from '../../services/api';
import instance from '../../services/axiosInstance';
import { urlToSearchParams } from '../../utilities/searchParams';

export const createCourseMaterial = (payload) =>
  instance.post(`${COURSE_MATERIALS_API}/create`, payload, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

export const editCourseMaterial = (payload, id) =>
  instance.post(`${COURSE_MATERIALS_API}/update/${id}`, payload);

export const deleteCourseMaterial = (payload) =>
  instance.post(`${COURSE_MATERIALS_API}/delete`, payload);

export const fetchAllCourseMaterials = ({ query }) =>
  instance.get(urlToSearchParams(COURSE_MATERIALS_API, query));
