import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './pages/routes'
import TopBar from './components/TopBar'
import { CurrentuserProvider } from './context/currentUser';

const App = () => {
  return (
    <CurrentuserProvider>
      <Router>
        <TopBar />
        <Routes />
      </Router>

    </CurrentuserProvider>
  );
};
ReactDOM.render(<App />, document.getElementById('root'));
