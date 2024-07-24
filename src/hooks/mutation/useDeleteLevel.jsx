import { useMutation, useQueryClient } from '@tanstack/react-query';
import useAlert from '../useAlert';
import { deleteLevel } from '../../apiQueries/level';
import { ALL_LEVEL_QUERY_NAME } from '../../apiQueries/queryTypes';

export const useDeleteLevel = ({ setIsShown, currentId }) => {
  const { toast } = useAlert();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () =>
      deleteLevel({
        uuid: currentId,
      }),
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
