import { useUserContext } from '../../contexts/userContexts';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component }) => {
  const { isLoggedIn, logoutUser } = useUserContext();
  if (!isLoggedIn) {
    logoutUser();
    return <Navigate to="/" replace />;
  }

  return <Component />;
};

export default PrivateRoute;
