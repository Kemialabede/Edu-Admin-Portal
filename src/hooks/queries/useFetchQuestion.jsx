import { useQuery } from '@tanstack/react-query';
import { FETCH_QUESTIONS } from '../../apiQueries/queryTypes';
import { viewQuestion } from '../../apiQueries/question';

export const useFetchQuestion = (query) => {
  return useQuery({
    queryKey: FETCH_QUESTIONS,
    queryFn: async () => {
      const data = await viewQuestion(query);
      return data?.data?.data;
    },
    initialData: [],
  });
};
