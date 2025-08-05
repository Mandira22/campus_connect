// src/Pages/HomePage.jsx
import React from 'react';
import HeroSection from '../Components/Hero.jsx';
import InfiniteLogoSlider  from '../Components/CompanySection.jsx';
import FeaturedJobs from '../Components/FeaturedJobs.jsx';
import HireByStartups from '../Components/HireByStartups.jsx';
import TestimonialCardSection from '../Components/TestimonialCard.jsx';
import SubscribeSection from '../Components/Subscribe.jsx';
import Navbar from './Navbar.jsx';
import Contents from './Contents/contents.jsx';
//import Menu from './Sidebar/Menu.jsx';

function HomePage() {
  return (
    <>
      <Navbar/>
     
      <HeroSection />
      <InfiniteLogoSlider />
      <Contents/>
      <FeaturedJobs />
      <HireByStartups />
      <TestimonialCardSection />
      <SubscribeSection />
    </>
  );
}

export default HomePage;
