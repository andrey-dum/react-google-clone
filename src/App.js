import React from 'react';
import './App.css';
import Home from './pages/Home/Home';
import SearchPage from './pages/SearchPage/SearchPage';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="app">
      <Router> 
        <Switch>
          <Route exact path={'/'} component={Home} />
          <Route path='/search'>
            <SearchPage />
          </Route>
          {/* <Route exact path='/search' component={Search} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
