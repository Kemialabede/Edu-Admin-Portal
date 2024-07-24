import { useMutation, useQueryClient } from '@tanstack/react-query';
import useAlert from '../useAlert';
import { ALL_CLASSES_QUERY_NAME } from '../../apiQueries/queryTypes';
import { editClass } from '../../apiQueries/class';

export const useEditClass = ({ setIsShown, currentRow }) => {
  const { toast } = useAlert();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload) => editClass(payload, currentRow?.uuid),
    onSuccess: (res) => {
      toast({ type: 'success', message: res.data.message });
      setIsShown(false);
      queryClient.invalidateQueries([ALL_CLASSES_QUERY_NAME]);
    },
    onError: (error) => {
      toast({ type: 'error', message: error?.response?.data?.message });
    },
  });
};
