import { useQuery } from '@tanstack/react-query';
import { ALL_PERMISSIONS_QUERY_NAME } from '../../apiQueries/queryTypes';
import { fetchAllPermissions } from '../../apiQueries/admin';

export const useFetchAllPermissions = () => {
  return useQuery({
    queryKey: ALL_PERMISSIONS_QUERY_NAME,
    queryFn: async () => {
      const data = await fetchAllPermissions();
      return data?.data?.data;
    },
    initialData: [],
  });
};
