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
              Hi. I’m Raquel, a web developer from Lisbon. Please take a look around! I am
              passionate about building excellent apps that improves the lives of those around me.
              All of my work is produced locally from Lisbon. What would you do if you had a
              developer expert available at your fingertips?
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
