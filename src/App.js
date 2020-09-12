import React from 'react';
import { BrowserRouter as Router, Route, Switch,} from 'react-router-dom';
import Container from './components/Main/Main';
import Home from './components/Home/Home';
import Ordenes from './components/Ordenes/Ordenes';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/"><Container></Container><Home></Home></Route>
          <Route path="/ordenes"><Container></Container><Ordenes></Ordenes></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
