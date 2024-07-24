import instance from '../../services/axiosInstance';
import { DASHBOARD_METRICS_API } from '../../services/api';

export const fetchDashboardMetrics = () =>
  instance.get(`${DASHBOARD_METRICS_API}`);
