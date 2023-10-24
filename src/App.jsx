import React from 'react';
import './App.css';
import Approuter from './routes/appRoutes';
import { BrowserRouter as Router} from 'react-router-dom';
function App() {
  return (
    <Router>
      <Approuter/>
    </Router>
  );
}

export default App;
