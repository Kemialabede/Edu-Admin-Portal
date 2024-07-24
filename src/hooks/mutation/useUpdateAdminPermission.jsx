import { useMutation, useQueryClient } from '@tanstack/react-query';
import useAlert from '../useAlert';
import { ALL_PERMISSIONS_QUERY_NAME } from '../../apiQueries/queryTypes';
import { updateAdminPermission } from '../../apiQueries/admin';
import { useNavigate } from 'react-router-dom';

export const useUpdateAdminPermission = (payload) => {
  const { toast } = useAlert();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: () => updateAdminPermission(payload),
    onSuccess: (res) => {
      toast({ type: 'success', message: res.data.message });
      queryClient.invalidateQueries([ALL_PERMISSIONS_QUERY_NAME]);
      navigate('/admin-management');
    },
    onError: (error) => {
      toast({ type: 'error', message: error?.response?.data?.message });
    },
  });
};
