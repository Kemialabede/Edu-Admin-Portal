import { useMutation } from '@tanstack/react-query';
import useAlert from '../useAlert';
// import { ALL_LEVEL_QUERY_NAME } from '../../apiQueries/queryTypes';
import { addSingleQuestion } from '../../apiQueries/question';

export const useAddSingleQuestion = ({ setIsShown }) => {
  const { toast } = useAlert();
  //   const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addSingleQuestion,
    onSuccess: (res) => {
      toast({ type: 'success', message: res.data.message });
      setIsShown(false);
      //   queryClient.invalidateQueries([ALL_LEVEL_QUERY_NAME]);
    },
    onError: (error) => {
      toast({ type: 'error', message: error?.response?.data?.message });
    },
  });
};
