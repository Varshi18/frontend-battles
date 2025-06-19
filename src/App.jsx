import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import LoadingScreen from './components/LoadingScreen';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import FeaturesSection from './components/FeaturesSection';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import RippleContainer from './components/RippleContainer';
import { ThemeProvider } from './context/ThemeContext';
import AnimatedBarCharts from './components/AnimatedBarCharts';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <ThemeProvider>
      <RippleContainer>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <Navbar />
          <HeroSection />
          <AboutSection />
          <FeaturesSection />
          <ServicesSection />
          <AnimatedBarCharts/>
          <PortfolioSection />
          <ContactSection />
          <Footer />
        </div>
      </RippleContainer>
    </ThemeProvider>
  );
}

export default App;