import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import User from './components/User/Form';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/User/:id" component={User} />
      </div>
    </Router>
  );
}

export default App;
