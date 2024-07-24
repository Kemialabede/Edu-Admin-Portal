import { useQuery } from '@tanstack/react-query';
import { ALL_CLASSES_QUERY_NAME } from '../../apiQueries/queryTypes';
import { fetchAllClasses } from '../../apiQueries/class';

export const useFetchClasses = ({ query }) => {
  return useQuery({
    queryKey: ALL_CLASSES_QUERY_NAME,
    queryFn: async () => {
      const data = await fetchAllClasses({ query });
      return data?.data;
    },
    initialData: [],
  });
};
