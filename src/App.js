import React from "react";
import {Route, Switch} from 'react-router-dom';
import Form from './Form';
import Home from './Home';


const App = () => {
  return (
    <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/Pizza' component={Form}/>
    </Switch>

  );
};
export default App;
