import { useQuery } from '@tanstack/react-query';
import { GENERAL_SETTING } from '../../apiQueries/queryTypes';
import { viewQuestionSetting } from '../../apiQueries/question';

export const useFetchQuestionSettings = (id) => {
  console.log(id, 'question-setting')
  return useQuery({
    queryKey: GENERAL_SETTING,
    queryFn: async () => {
      const data = await viewQuestionSetting(id);
      return data?.data?.data;
    },
    initialData: [],
    enabled: !!id?.length,
  });
};
