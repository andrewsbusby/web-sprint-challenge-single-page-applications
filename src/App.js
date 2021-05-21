import React from "react";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Form from './Form';
import Home from './Home';

const App = () => {
  return (
    <Router>
    <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/Pizza' component={Form}/>
    </Switch>
  </Router>
  );
};
export default App;
