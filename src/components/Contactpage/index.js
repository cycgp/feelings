import React from 'react';
import ContactForm from '../ContactFrom';

const Contactpage = () => {
  return (
    <section className="wpo-contact-pg-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col col-lg-10 offset-lg-1">
            <div className="wpo-contact-title">
              <h2>Have Any Question?</h2>
              <p>
                It is a long established fact that a reader will be distracted
                content of a page when looking.
              </p>
            </div>
            <div className="wpo-contact-form-area">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      <section className="wpo-contact-map-section">
        <div className="wpo-contact-map">
          <iframe src="https://maps.google.com/maps?q=%E5%8F%B0%E4%B8%AD%E5%B8%82%E5%8F%B0%E7%81%A3%E5%A4%A7%E9%81%93%E4%BA%8C%E6%AE%B5666%E8%99%9F&t=&z=15&ie=UTF8&iwloc=&output=embed"></iframe>
        </div>
      </section>
    </section>
  );
};

export default Contactpage;
