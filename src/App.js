import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import HomePage from "./pages/homepage/homepage.component";

const HatsPage = () => (
  <div>
    HATS PAGE
  </div>
)

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/hats" component={HatsPage}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
