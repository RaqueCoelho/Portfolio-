import React from 'react';
import './style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => (
  <header className="masthead d-flex">
    <div className="container text-center my-auto">
      <h1 className="mb-1">Raquel Coelho Web Developer</h1>
      <h3 className="mb-5">
        <em>Portfolio</em>
      </h3>
      <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">
        Check More
      </a>
    </div>
    <div className="overlay" />
  </header>
);
export default Header;
