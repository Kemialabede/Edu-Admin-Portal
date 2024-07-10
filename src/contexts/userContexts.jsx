import {
  useState,
  createContext,
  useMemo,
  useCallback,
  useContext,
} from 'react'
import instance from '../services/axiosInstance'
import Storage from '../utilities/storage'

const $storage = new Storage('local')
export const UserContext = createContext({})

export const UserContextProvider = ({ children }) => {
  const [userData, setUserData] = useState($storage.get('user') ?? {})
  const isLoggedIn = $storage.get('logged_in')
  const handleSetUserData = useCallback((data) => {
    setUserData({ ...($storage.get('user') ?? {}), ...data })
    $storage.save('user', data)
  }, [])

  const logoutUser = () => {
    delete instance.defaults.headers?.common['Authorization']
    $storage.clear()
    window.location.replace('/')
    setUserData({})
  }

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
  )
}

export const useUserContext = () => useContext(UserContext)
