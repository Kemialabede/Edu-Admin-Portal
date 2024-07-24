import { useQuery } from '@tanstack/react-query';
import { ALL_ADMINS_QUERY_NAME } from '../../apiQueries/queryTypes';
import { fetchAllAdmins } from '../../apiQueries/admin';

export const useFetchAllAdmins = ({ query }) => {
  return useQuery({
    queryKey: ALL_ADMINS_QUERY_NAME,
    queryFn: async () => {
      const data = await fetchAllAdmins({ query });
      return data?.data;
    },
    initialData: [],
  });
};
