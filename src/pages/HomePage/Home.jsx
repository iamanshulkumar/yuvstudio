import React from 'react'
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import VideoSection from './VideoSection';
import BusinessSection from './BusinessSection';
import WorkSection from './WorkSection';
import ContactForm from './ContactForm';
import Infiniteslider from './Infiniteslider';
// import Slidersection from './Slidersection';

const Home = () => {
  return (
    <>
      <HeroSection/>
      <AboutSection/>
      <VideoSection/>
      <BusinessSection/>
      <WorkSection/>
      <ContactForm/>
      {/* <Infiniteslider/> */}
    </>
  )
}

export default Home;