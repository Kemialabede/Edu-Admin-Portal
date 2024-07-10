import { UserContextProvider } from './userContexts.jsx'

const ContextProviders = ({ children }) => {
  return <UserContextProvider>{children}</UserContextProvider>
}

export default ContextProviders
