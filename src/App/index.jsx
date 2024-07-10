import AppRouter from '../routes'
import Interceptor from '../services/Interceptors'

const App = () => {
  return <Interceptor component={<AppRouter />} />
}

export default App
