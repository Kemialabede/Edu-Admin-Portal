import { useQuery } from '@tanstack/react-query';
import { ALL_STAFF_SEARCH_QUERY_NAME } from '../../apiQueries/queryTypes';
import { fetchStaffSearch } from '../../apiQueries/users';

export const useFetchStaffSearch = ({ query }) => {
  return useQuery({
    queryKey: ALL_STAFF_SEARCH_QUERY_NAME,
    queryFn: async () => {
      const data = await fetchStaffSearch({ query });
      return data?.data;
    },
    initialData: [],
    enabled: !!query?.length,
  });
};
