import { useQuery } from '@tanstack/react-query';
import { ALL_STAFF_QUERY_NAME } from '../../apiQueries/queryTypes';
import { fetchAllStaff } from '../../apiQueries/users';

export const useFetchStaff = ({ query }) => {
  return useQuery({
    queryKey: ALL_STAFF_QUERY_NAME,
    queryFn: async () => {
      const data = await fetchAllStaff({ query });
      return data?.data;
    },
    initialData: [],
  });
};
