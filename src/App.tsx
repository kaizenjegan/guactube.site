
// import React from './node_modules/react';
import React from 'react';
import './App.css';
import Routes from './components/Routes'
import Header from './components/Header/Header'


const App: React.FC = () => {
  return (
    <div className="background-guac">
      <Header />
      <div className="guac-body">
        <Routes />
      </div>
    </div>
  );
}

export default App;
