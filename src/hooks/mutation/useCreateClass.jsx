import { useMutation, useQueryClient } from '@tanstack/react-query';
import useAlert from '../useAlert';
import { ALL_LEVEL_QUERY_NAME } from '../../apiQueries/queryTypes';
import { createClass } from '../../apiQueries/class';

export const useCreateClass = ({ setIsShown }) => {
  const { toast } = useAlert();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createClass,
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
