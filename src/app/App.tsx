import { FC } from 'react';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import routes from './routes';
import './App.css';

const AppRoutes = () => {
  return useRoutes(routes);
};

const App: FC = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;
