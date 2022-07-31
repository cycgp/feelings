import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Homepage from '../HomePage';
import GalleryPage from '../GalleryPage';
import OrderRecived from '../OrderRecived';
import ErrorPage from '../ErrorPage';
import ContactPage from '../ContactPage';

const AllRoute = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />{' '}
          <Route path="home" element={<Homepage />} />{' '}
          <Route path="order-received" element={<OrderRecived />} />{' '}
          <Route path="contact" element={<ContactPage />} />{' '}
          <Route path="*" element={<ErrorPage />} />{' '}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AllRoute;
