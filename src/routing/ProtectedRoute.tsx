import { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { PathConstants } from './pathConstants';

interface ProtectedRouteProps {
  user: string;
  redirectPath?: string;
  component: FC;
}

export interface ProtectedRouteFromI {
  from: string;
}

// TODO Implement case-specific logic
const ProtectedRoute: FC<ProtectedRouteProps> = ({ user, redirectPath = PathConstants.LOGIN_PATH, component: Component }) => {
  if (user == '') {
    return <Navigate to={redirectPath} state={{ from: location.pathname } as ProtectedRouteFromI} replace />;
  }
  return Component ? <Component /> : <Outlet />;
};


export default ProtectedRoute;
