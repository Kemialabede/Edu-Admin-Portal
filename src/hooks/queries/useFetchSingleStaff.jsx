import { useQuery } from '@tanstack/react-query';
import { ALL_SINGLE_STAFF_QUERY_NAME } from '../../apiQueries/queryTypes';
import { fetchSingleStaff } from '../../apiQueries/users';

export const useFetchSingleStaff = (query) => {
  return useQuery({
    queryKey: ALL_SINGLE_STAFF_QUERY_NAME,
    queryFn: async () => {
      const data = await fetchSingleStaff(query);
      return data?.data?.data;
    },
    initialData: [],
  });
};
