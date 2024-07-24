import { useQuery } from '@tanstack/react-query';
import { FETCH_QUESTIONS } from '../../apiQueries/queryTypes';
import { sampleQuestion } from '../../apiQueries/question';

export const useFetchSampleQuestion = () => {
  return useQuery({
    queryKey: FETCH_QUESTIONS,
    queryFn: async () => {
      const data = await sampleQuestion();
      return data?.data?.data;
    },
    initialData: [],
  });
};
