import { STAFF_API } from '../../services/api';
import instance from '../../services/axiosInstance';
import { urlToSearchParams } from '../../utilities/searchParams';

export const fetchAllStaff = ({ query }) =>
  instance.get(urlToSearchParams(STAFF_API, query));
export const fetchStaffSearch = ({ query }) =>
  instance.get(urlToSearchParams(`${STAFF_API}/search`, query));
export const fetchSingleStaff = (query) =>
  instance.get(`${STAFF_API}/show/${query}`);
export const deactivateStaff = (payload) =>
  instance.post(`${STAFF_API}/deactivate`, payload);
export const activateStaff = (payload) =>
  instance.post(`${STAFF_API}/activate`, payload);
