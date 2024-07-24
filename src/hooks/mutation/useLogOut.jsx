import { useMutation } from '@tanstack/react-query';
import useAlert from '../useAlert';
import { logoutAdmin } from '../../apiQueries/auth';

export const useLogout = () => {
  const { toast } = useAlert();

  return useMutation({
    mutationFn: logoutAdmin,
    onSuccess: (res) => {
      toast({ type: 'success', message: res.data.message });
    },
    onError: (error) => {
      toast({ type: 'error', message: error?.response?.data?.message });
    },
  });
};
