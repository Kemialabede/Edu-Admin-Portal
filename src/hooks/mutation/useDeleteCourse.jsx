import { useMutation, useQueryClient } from '@tanstack/react-query';
import useAlert from '../useAlert';
import { ALL_COURSES_QUERY_NAME } from '../../apiQueries/queryTypes';
import { deleteCourse } from '../../apiQueries/course';

export const useDeleteCourse = ({ setIsShown, currentId }) => {
  const { toast } = useAlert();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () =>
      deleteCourse({
        uuid: currentId,
      }),
    onSuccess: (res) => {
      toast({ type: 'success', message: res.data.message });
      setIsShown(false);
      queryClient.invalidateQueries([ALL_COURSES_QUERY_NAME]);
    },
    onError: (error) => {
      toast({ type: 'error', message: error?.response?.data?.message });
    },
  });
};
