import { useMutation, useQueryClient } from '@tanstack/react-query';
import useAlert from '../useAlert';
import { createLevel } from '../../apiQueries/level';
import { ALL_LEVEL_QUERY_NAME } from '../../apiQueries/queryTypes';

export const useCreateLevel = ({ setIsShown }) => {
  const { toast } = useAlert();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createLevel,
    onSuccess: (res) => {
      toast({ type: 'success', message: res.data.message });
      setIsShown(false);
      queryClient.invalidateQueries([ALL_LEVEL_QUERY_NAME]);
    },
    onError: (error) => {
      toast({ type: 'error', message: error?.response?.data?.message });
    },
  });
};
