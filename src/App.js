import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/header/index';
import MapSection from './components/footer/index';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NavigationBar } from './components/navigationbar';
import About from './components/about/index';
import Services from './components/services/index';
import PortfolioSection from './components/portfolio/index';
import ScrollToTop from './components/scrollToTop/index';

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Router>
          <NavigationBar />
          <Header />
          <About />
          <Services />
          <PortfolioSection />
          <MapSection />
          <ScrollToTop />
        </Router>
      </React.Fragment>
    </div>
  );
}

export default App;
