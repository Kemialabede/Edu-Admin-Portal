import { useMutation, useQueryClient } from '@tanstack/react-query';
import useAlert from '../useAlert';
import { ALL_COURSES_QUERY_NAME } from '../../apiQueries/queryTypes';
import { updateQuestionSetting } from '../../apiQueries/question';

export const useUpdateQuestionSetting = ({ setIsShown }) => {
  const { toast } = useAlert();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload) => updateQuestionSetting(payload),
    onSuccess: (res) => {
      toast({ type: 'success', message: res.data.message });
      setIsShown(false);
      queryClient.invalidateQueries([ALL_COURSES_QUERY_NAME]);
    },
    onError: (error) => {
      toast({ type: 'error', message: error?.response?.data?.message });
    },
  });
};
