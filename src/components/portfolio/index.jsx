import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import './style.scss';

const portfolioItems = [
  {
    imgSrc: './../../images/bank.png',
    heading: 'VIRTUAL BANK APP',
    description:
      'MERN application, with currency converter API, Worker to scheduled tasks, Bootstrap and Material UI.',
    link: 'https://virtual-bank-app.herokuapp.com/',
  },
  {
    imgSrc: './../../images/weather.png',
    heading: 'Weather App',
    description: 'A weather APP in React, with a weather API.',
    link: 'https://weather-app-react-raquelcoelho.netlify.com/',
  },
  {
    imgSrc: './../../images/experiences.png',
    heading: 'Sharing Experiences App',
    description: 'GOOGLE MAPS API, JAVACRIPT, NODEJS, EXPRESS, JS, MONGO DB, MONGOOSE, PASSPORT',
    link: 'https://the-time-of-your-life.herokuapp.com/',
  },
  {
    imgSrc: './../../images/game.png',
    heading: 'Fun catch Javascript Game',
    description: 'HTML, CSS, JAVASCRIPT & CANVAS',
    link: 'https://wakeuptheironhackgirl.netlify.com/',
  },
];

const PortfolioSection = () => (
  <ScrollableAnchor id="portfolio">
    <section className="content-section">
      <div className="container">
        <div className="content-section-heading text-center">
          <h3 className="text-secondary mb-0">Portfolio</h3>
          <h2 className="mb-5">Recent Projects</h2>
        </div>
        <div className="row no-gutters">
          {portfolioItems.map((project, index) => (
            <div className="col-lg-6" key={`portfolio_item_${index}`}>
              <span className="caption">
                <span className="caption-content">
                  <h2>{project.heading}</h2>
                </span>
              </span>
              <a className="portfolio-item" href={project.link}>
                <img className="img-fluid" src={project.imgSrc} alt="" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  </ScrollableAnchor>
);

export default PortfolioSection;
