import { RouteObject } from 'react-router-dom';
import Home from '../pages/home';
import SignUpPage from '../pages/signup';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/signup',
    element: <SignUpPage />
  },
];

export default routes;
