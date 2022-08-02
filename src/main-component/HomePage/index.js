import React, { Fragment, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Hero from '../../components/hero';
import StorySection from '../../components/StorySection';
import CoupleSection from '../../components/CoupleSection';
import PortfolioSection2 from '../../components/PortfolioSection2';
import EventSection from '../../components/EventSection';
import RSVP from '../../components/RSVP';
import Scrollbar from '../../components/scrollbar';
import Footer from '../../components/footer';
import { scroller } from 'react-scroll';

function scrollTo(string, offset) {
  scroller.scrollTo(string, {
    activeClass: 'active',
    spy: true,
    smooth: true,
    duration: 500,
    offset: offset,
  });
}

const HomePage = () => {
  useEffect(() => {
    if (window.location.href.includes('#couple')) {
      scrollTo('couple', -100);
    } else if (window.location.href.includes('#story')) {
      scrollTo('story', -60);
    } else if (window.location.href.includes('#gallery')) {
      scrollTo('gallery');
    } else if (window.location.href.includes('#events')) {
      scrollTo('events', 50);
    } else if (window.location.href.includes('#RSVP')) {
      scrollTo('RSVP');
    }
  });

  return (
    <Fragment>
      <Navbar hclass={'wpo-site-header-s1'} />
      <Hero />
      <CoupleSection />
      <StorySection />
      <PortfolioSection2 />
      <EventSection />
      <RSVP />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default HomePage;
