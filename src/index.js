import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './pages/routes'
import TopBar from './components/TopBar'
import { CurrentUserProvider } from './contexs/currentUser';

const App = () => {
  return (
    <CurrentUserProvider>
      <Router>
        <TopBar />
        <Routes />
      </Router>

    </CurrentUserProvider>
  );
};
ReactDOM.render(<App />, document.getElementById('root'));
