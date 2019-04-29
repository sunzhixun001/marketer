import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import User from './components/user';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/User" component={User} />
      </div>
    </Router>
  );
}

export default App;
