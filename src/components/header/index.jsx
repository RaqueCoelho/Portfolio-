import React from 'react';
import './style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import authorimage from './../../images/authorimage.png'; // Tell webpack this JS file uses this image

const Header = () => (
  <header className="masthead d-flex bg-light">
    <div className="container text-center my-auto ">
      <img src={authorimage} className="author-image" alt="authorimage" />

      <h1 className="mb-1">Raquel Coelho Web Developer</h1>
      <h3 className="mb-5">
        <em>Portfolio</em>
      </h3>
    </div>
    <div className="overlay" />
  </header>
);
export default Header;
