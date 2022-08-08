import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginView from '../features/auth/views/LoginView';
import ProtectedRoute from './ProtectedRoute';
import CounterApp from '../features/counter/views/CounterView';
import { PathConstants } from './path-constants';

interface AppRouterI {
  user: string;
}

const AppRouter: React.FC<AppRouterI> = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PathConstants.LOGIN_PATH} element={<LoginView />} />
        <Route index element={<ProtectedRoute user={props.user} component={CounterApp} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
