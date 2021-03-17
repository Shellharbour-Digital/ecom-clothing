import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';

const CollectionPage = (props) => {
  return(
    <div>
      <h1>{props.match.params.shopId.toUpperCase()} PAGE</h1>
    </div>
  );
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop/:shopId' component={CollectionPage} />
      </Switch>
    </div>
  );
}

export default App;
