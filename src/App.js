import React from 'react';
import { BrowserRouter as Router, Route, Switch,} from 'react-router-dom';
import Container from './components/Main/Main';
import Home from './components/Home/Home';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/home"><Container></Container><Home></Home></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
