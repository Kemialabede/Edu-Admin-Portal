import { useMutation, useQueryClient } from '@tanstack/react-query';
import useAlert from '../useAlert';
import { GENERAL_SETTING } from '../../apiQueries/queryTypes';
import { updateGeneralSetting } from '../../apiQueries/setting';

export const useUpdateGeneralSetting = ({ setIsShown }) => {
  const { toast } = useAlert();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload) => updateGeneralSetting(payload),
    onSuccess: (res) => {
      toast({ type: 'success', message: res.data.message });
      setIsShown(false);
      queryClient.invalidateQueries([GENERAL_SETTING]);
    },
    onError: (error) => {
      toast({ type: 'error', message: error?.response?.data?.message });
    },
  });
};
