import { useMutation, useQueryClient } from '@tanstack/react-query';
import useAlert from '../useAlert';
import { FETCH_QUESTIONS } from '../../apiQueries/queryTypes';
import { updateQuestion } from '../../apiQueries/question';

export const useUpdateQuestion = () => {
  const { toast } = useAlert();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload) => updateQuestion(payload),
    onSuccess: (res) => {
      toast({ type: 'success', message: res.data.message });
      queryClient.invalidateQueries([FETCH_QUESTIONS]);
    },
    onError: (error) => {
      toast({ type: 'error', message: error?.response?.data?.message });
    },
  });
};
