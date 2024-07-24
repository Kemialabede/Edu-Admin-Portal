import instance from '../../services/axiosInstance';
import { LOGIN_API, LOGOUT_API } from '../../services/api';

export const loginAdmin = (payload) => instance.post(LOGIN_API, payload);
export const logoutAdmin = () => instance.post(LOGOUT_API);
