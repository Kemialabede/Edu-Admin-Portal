import { useMutation, useQueryClient } from '@tanstack/react-query';
import useAlert from '../useAlert';
import { ALL_ADMINS_QUERY_NAME } from '../../apiQueries/queryTypes';
import { deleteAdmin } from '../../apiQueries/admin';

export const useDeleteAdmin = ({ setIsShown, currentId }) => {
  const { toast } = useAlert();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () =>
      deleteAdmin({
        uuid: currentId,
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
