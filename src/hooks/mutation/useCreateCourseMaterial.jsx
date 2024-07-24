import { useMutation, useQueryClient } from '@tanstack/react-query';
import useAlert from '../useAlert';
import { ALL_COURSE_MATERIALS_QUERY_NAME } from '../../apiQueries/queryTypes';
import { createCourseMaterial } from '../../apiQueries/courseMaterials';

export const useCreateCourseMaterial = ({ setIsShown, currentRow }) => {
  const { toast } = useAlert();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload) => createCourseMaterial(payload, currentRow?.uuid),
    onSuccess: (res) => {
      toast({ type: 'success', message: res.data.message });
      setIsShown(false);
      queryClient.invalidateQueries([ALL_COURSE_MATERIALS_QUERY_NAME]);
    },
    onError: (error) => {
      toast({ type: 'error', message: error?.response?.data?.message });
    },
  });
};
