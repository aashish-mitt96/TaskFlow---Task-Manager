import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import Timeline from '../components/Timeline'
import FeatureSection from '../components/FeatureSection'
import AboutSection from '../components/AboutSection'
import Footer from "../components/Footer"
const HomePage = () => {
  return (
    <>
        <Header/>
        <HeroSection/>
        <Timeline/>
        <FeatureSection/>
        <AboutSection/>
        <Footer/>
    </>
  )
}

export default HomePage