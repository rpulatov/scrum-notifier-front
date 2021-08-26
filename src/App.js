import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import  Authorization  from './pages/Authorization';
import Users from './pages/Users';


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/users">
            <Users/>
          </Route>

          <Route path="/">
            <Authorization/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;