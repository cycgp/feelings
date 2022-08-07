import React, { Fragment, useEffect } from 'react';
import Navbar2 from '../../components/Navbar2';
import PageTitle from '../../components/pagetitle';
import Contactpage from '../../components/Contactpage';
import Footer from '../../components/footer';
import Scrollbar from '../../components/scrollbar';
import { animateScroll } from 'react-scroll';

const ContactPage = () => {
  useEffect(() => {
    animateScroll.scrollToTop({ duration: 0 });
  });
  return (
    <Fragment>
      <Navbar2 hclass={'wpo-site-header-s1'} />
      <PageTitle pageTitle={'Contact Us'} />
      <Contactpage />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default ContactPage;
