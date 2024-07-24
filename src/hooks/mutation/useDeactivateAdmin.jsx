import { useMutation, useQueryClient } from '@tanstack/react-query';
import useAlert from '../useAlert';
import { ALL_ADMINS_QUERY_NAME } from '../../apiQueries/queryTypes';
import { deactivateAdmin } from '../../apiQueries/admin';

export const useDeactivateAdmin = ({ setIsShown, currentRow }) => {
  const { toast } = useAlert();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () =>
      deactivateAdmin({
        admin: currentRow?.uuid,
      }),
    onSuccess: (res) => {
      toast({ type: 'success', message: res.data.message });
      setIsShown(false);
      queryClient.invalidateQueries([ALL_ADMINS_QUERY_NAME]);
    },
    onError: (error) => {
      toast({ type: 'error', message: error?.response?.data?.message });
    },
  });
};
