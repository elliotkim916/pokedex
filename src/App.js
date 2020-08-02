import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';
import SearchForm from './components/SearchForm';
import SearchResult from './components/SearchResult';

const App = () => {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={SearchForm} />
          <Route exact path="/searchResult/:pokemon" component={SearchResult} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
