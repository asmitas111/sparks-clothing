import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutUsPage from '../pages/AboutUsPage/AboutUsPage';
import TheHistory from '../pages/AboutUsPage/TheHistory';
import ContactUsPage from '../pages/ContactUsPage/ContactUsPage';
import HomePage from '../pages/HomePage/HomePage';
import Feedback from '../pages/ProductPage/Feedback/Feedback';
import ProductPage from '../pages/ProductPage/ProductPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import ForgotPassword from '../pages/LoginPage/ForgotPassword/ForgotPassword';
import SignUp from '../pages/LoginPage/SignUp/SignUp';

export const appRoutes = (
  <Routes>
  {/* URL configuration */}
  <Route path="/" element={<HomePage />} />
  <Route path="/about" element={<AboutUsPage />} />
    <Route path="/about/TheHistory" element={<TheHistory />} />
  <Route path="/contact-us" element={<ContactUsPage />} />
  <Route path="/product" element={<ProductPage />} />
    <Route path="/product/feedback" element={<Feedback />} />
  <Route path="/login" element={<LoginPage />} />  
    <Route path="/login/ForgotPassword" element={<ForgotPassword />} />
    <Route path="/login/SignUp" element={<SignUp />} />
 </Routes>
 
);
