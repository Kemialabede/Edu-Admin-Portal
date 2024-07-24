import { useQuery } from '@tanstack/react-query';
import { ALL_LEVEL_QUERY_NAME } from '../../apiQueries/queryTypes';
import { fetchAllLevels } from '../../apiQueries/level';

export const useFetchLevels = ({ query }) => {
  return useQuery({
    queryKey: ALL_LEVEL_QUERY_NAME,
    queryFn: async () => {
      const data = await fetchAllLevels({ query });
      return data?.data;
    },
    initialData: [],
  });
};
