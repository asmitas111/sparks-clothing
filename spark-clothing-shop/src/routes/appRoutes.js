import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutUsPage from '../pages/AboutUsPage/AboutUsPage';
import TheHistory from '../pages/AboutUsPage/TheHistory';
import ContactUsPage from '../pages/ContactUsPage/ContactUsPage';
import HomePage from '../pages/HomePage/HomePage';
import Feedback from '../pages/ProductPage/Feedback/Feedback';
import ProductPage from '../pages/ProductPage/ProductPage';

export const appRoutes = (
  <Routes>
  {/* URL configuration */}
  <Route path="/" element={<HomePage />} />
  <Route path="/about" element={<AboutUsPage />} />
    <Route path="/about/TheHistory" element={<TheHistory />} />
  <Route path="/contact-us" element={<ContactUsPage />} />
  <Route path="/product" element={<ProductPage />} />
    <Route path="/product/feedback" element={<Feedback />} />
 </Routes>
 
);
