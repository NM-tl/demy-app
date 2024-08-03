import { RouteObject } from 'react-router-dom';
import Home from '../pages/home';
import SignUpPage from '../pages/signup';
import Courses from '../pages/courses';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/signup',
    element: <SignUpPage />
  },
  {
    path: '/courses',
    element: <Courses />
  },
];

export default routes;
