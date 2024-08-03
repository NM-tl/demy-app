import { FC } from 'react';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import routes from './routes';
import { Provider } from 'react-redux';
import { store } from '../features/firebase/store'
import './App.css';

const AppRoutes = () => {
  return useRoutes(routes);
};

const App: FC = () => {
  return (
    <Router>
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </Router>
  );
};

export default App;
