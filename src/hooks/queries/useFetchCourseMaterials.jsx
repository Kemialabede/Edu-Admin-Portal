import { useQuery } from '@tanstack/react-query';
import { ALL_COURSE_MATERIALS_QUERY_NAME } from '../../apiQueries/queryTypes';
import { fetchAllCourseMaterials } from '../../apiQueries/courseMaterials';

export const useFetchCourseMaterials = ({ query }) => {
  return useQuery({
    queryKey: ALL_COURSE_MATERIALS_QUERY_NAME,
    queryFn: async () => {
      const data = await fetchAllCourseMaterials({ query });
      return data?.data;
    },
    initialData: [],
  });
};
