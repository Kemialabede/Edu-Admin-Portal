import { ADMIN_API } from '../../services/api';
import instance from '../../services/axiosInstance';
import { urlToSearchParams } from '../../utilities/searchParams';

export const createAdmin = (payload) =>
  instance.post(`${ADMIN_API}/create`, payload);

export const editAdmin = (payload, id) =>
  instance.post(`${ADMIN_API}/update/${id}`, payload);

export const deleteAdmin = (payload) =>
  instance.post(`${ADMIN_API}/delete`, payload);

export const deactivateAdmin = (payload) =>
  instance.post(`${ADMIN_API}/deactivate`, payload);

export const activateAdmin = (payload) =>
  instance.post(`${ADMIN_API}/activate`, payload);

export const changePassword = (payload) =>
  instance.post(`${ADMIN_API}/change-password`, payload);

export const fetchAllAdmins = ({ query }) =>
  instance.get(urlToSearchParams(ADMIN_API, query));
export const fetchAllPermissions = () =>
  instance.get(`${ADMIN_API}/all-permissions`);

export const updateAdminPermission = (payload) =>
  instance.post(`${ADMIN_API}/set-permission`, payload);
