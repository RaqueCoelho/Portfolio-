import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import './style.scss';

const About = () => (
  <ScrollableAnchor id="about">
    <section className="content-section bg-light">
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <h2>About Me</h2>
            <p className="lead mb-5">
              After working in bank, management, and in politics for the last 9 years, I decided to
              get developer training and start a new and amazing career.
            </p>
            <a className="btn btn-dark btn-xl js-scroll-trigger" href="#services">
              What I Offer
            </a>
          </div>
        </div>
      </div>
    </section>
  </ScrollableAnchor>
);

export default About;
