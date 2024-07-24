import { useQuery } from '@tanstack/react-query';
import { ALL_SINGLE_COURSE_QUERY_NAME } from '../../apiQueries/queryTypes';
import { fetchSingleCourse } from '../../apiQueries/course';

export const useFetchSingleCourse = (id) => {
  return useQuery({
    queryKey: ALL_SINGLE_COURSE_QUERY_NAME,
    queryFn: async () => {
      const data = await fetchSingleCourse(id);
      return data?.data?.data;
    },
    initialData: [],
    enabled: !!id?.length,
  });
};
