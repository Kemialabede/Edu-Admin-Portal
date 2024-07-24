import { SETTING_API } from '../../services/api';
import instance from '../../services/axiosInstance';

export const viewGeneralSetting = () => instance.get(`${SETTING_API}`);

export const updateGeneralSetting = (payload) =>
  instance.post(`${SETTING_API}/update`, payload);
