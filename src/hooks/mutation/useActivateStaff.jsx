import { useMutation, useQueryClient } from '@tanstack/react-query';
import useAlert from '../useAlert';
import { ALL_STAFF_QUERY_NAME } from '../../apiQueries/queryTypes';
import { activateStaff } from '../../apiQueries/users';

export const useActivateStaff = ({ setIsShown, currentRow }) => {
  const { toast } = useAlert();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () =>
      activateStaff({
        staff: currentRow?.uuid,
      }),
    onSuccess: (res) => {
      toast({ type: 'success', message: res.data.message });
      setIsShown(false);
      queryClient.invalidateQueries([ALL_STAFF_QUERY_NAME]);
    },
    onError: (error) => {
      toast({ type: 'error', message: error?.response?.data?.message });
    },
  });
};
