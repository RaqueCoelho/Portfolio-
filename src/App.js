import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/header/index';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NavigationBar } from './components/navigationbar';

import { Home } from './components/home/index';
import { About } from './components/about/index';
import { NoMatch } from './components/nomatch/index';
import Sidebar from './components/sidebar/index';

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Router>
          <NavigationBar />
          <Sidebar />
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </React.Fragment>
    </div>
  );
}

export default App;
