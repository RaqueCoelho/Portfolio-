import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import './style.scss';

const ServicesDescription = [
  {
    title: 'REACT',
  },
  {
    title: 'JAVACRIPT',
  },
  {
    title: 'HTML',
  },
  {
    title: 'MONGODB',
  },
  {
    title: 'EXPRESS',
  },
  {
    title: 'HANDLEBARS',
  },
  {
    title: 'MONGOOSE',
  },
  {
    title: 'NODEJS',
  },
];
const Services = () => (
  <ScrollableAnchor id="services">
    <section className="content-section bg-primary text-white text-center">
      <div className="container">
        <div className="content-section-heading">
          <h3 className="text-secondary mb-0">Services</h3>
          <h2 className="mb-5">What I Offer</h2>
        </div>
        <div className="row">
          {ServicesDescription.map((service, index) => (
            <div className="col-lg-3 col-md-6 mb-5 mb-lg-0" key={`service_${index}`}>
              <span className="service-icon rounded-circle mx-auto mb-3">
                <i className={service.icon} />
              </span>
              <h4>
                <strong>{service.title}</strong>
              </h4>
              <p className="text-faded mb-0">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </ScrollableAnchor>
);
export default Services;
