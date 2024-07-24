import { useMutation, useQueryClient } from '@tanstack/react-query';
import useAlert from '../useAlert';
import { ALL_COURSE_MATERIALS_QUERY_NAME } from '../../apiQueries/queryTypes';
import { deleteCourseMaterial } from '../../apiQueries/courseMaterials';

export const useDeleteCourseMaterial = ({ setIsShown, currentId }) => {
  const { toast } = useAlert();
  const queryClient = useQueryClient();

  console.log(currentId)

  return useMutation({
    mutationFn: () =>
      deleteCourseMaterial({
        uuid: currentId,
      }),
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
