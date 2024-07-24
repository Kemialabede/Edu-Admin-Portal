import { useQuery } from '@tanstack/react-query';
import { ALL_COURSES_QUERY_NAME } from '../../apiQueries/queryTypes';
import { fetchAllCourses } from '../../apiQueries/course';

export const useFetchCourses = ({ query }) => {
  return useQuery({
    queryKey: ALL_COURSES_QUERY_NAME,
    queryFn: async () => {
      const data = await fetchAllCourses({ query });
      return data?.data;
    },
    initialData: [],
  });
};
