import {
  useState,
  createContext,
  useMemo,
  useCallback,
  useContext,
} from 'react';
import instance from '../services/axiosInstance';
import Storage from '../utilities/storage';
import { useLogout } from '../hooks/mutation/useLogOut';

const $storage = new Storage('session');
export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
  const [userData, setUserData] = useState($storage.get('user') ?? {});
  const isLoggedIn = $storage.get('logged_in');
  const { mutate: logOut } = useLogout();

  const logoutUser = () => {
    logOut();
    $storage.clear();
    delete instance.defaults.headers?.common['Authorization'];
    window.location.replace('/');
    setUserData({});
    $storage.save('logged_in', false);
  };

  const handleSetUserData = useCallback((data) => {
    setUserData({ ...($storage.get('user') ?? {}), ...data });
    $storage.save('user', data);
  }, []);

  return (
    <UserContext.Provider
      value={useMemo(
        () => ({
          userData,
          isLoggedIn,
          setUserData: handleSetUserData,
          logoutUser,
        }),
        [userData],
      )}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
