import { useMutation } from '@tanstack/react-query';
import useAlert from '../useAlert';
import { useNavigate } from 'react-router-dom';
import { loginAdmin } from '../../apiQueries/auth';
import { useUserContext } from '../../contexts/userContexts';
import Storage from '../../utilities/storage';

export const useLogin = () => {
  const { toast } = useAlert();
  const { userData, setUserData } = useUserContext();
  const navigate = useNavigate();
  const $storage = new Storage('session');

  return useMutation({
    mutationFn: loginAdmin,
    onSuccess: (res) => {
      if (res?.data?.data?.token) {
        toast({ type: 'success', message: res.data.message });
        setUserData({ ...userData, ...res.data.data });
        $storage.save('logged_in', true);
        navigate('/dashboard');
      }
    },
    onError: (error) => {
      toast({ type: 'error', message: error?.response?.data?.message });
    },
  });
};
