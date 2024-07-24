import { useMutation } from '@tanstack/react-query';
import useAlert from '../useAlert';
import { changePassword } from '../../apiQueries/admin';

export const useChangePassword = (resetForm) => {
  const { toast } = useAlert();

  return useMutation({
    mutationFn: (payload) => changePassword(payload),
    onSuccess: (res) => {
      resetForm();
      toast({ type: 'success', message: res.data.message });
    },
    onError: (error) => {
      toast({ type: 'error', message: error?.response?.data?.message });
    },
  });
};
