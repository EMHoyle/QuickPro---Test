import React from 'react';
import { BrowserRouter as Router, Route, Switch,} from 'react-router-dom';
import Container from './components/Main/Main';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/home"><Container></Container><Home></Home></Route>
          <Route path="/dashboard"><Container></Container><Dashboard></Dashboard></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
