import { useQuery } from '@tanstack/react-query';
import { ADMIN_DASHBOARD_QUERY_NAME } from '../../apiQueries/queryTypes';
import { fetchDashboardMetrics } from '../../apiQueries/dashboard';

export const useFetchDashboardMetrics = ({ query }) => {
  return useQuery({
    queryKey: ADMIN_DASHBOARD_QUERY_NAME,
    queryFn: async () => {
      const data = await fetchDashboardMetrics({ query });
      return data?.data?.data;
    },
    initialData: [],
  });
};
