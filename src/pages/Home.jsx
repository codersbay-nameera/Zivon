import React from 'react';
import Hero from '../components/Hero';
import SplitSection from '../components/SplitSection';
import CapabilitiesSection from '../components/CapabilitiesSection';
import OurCompaniesSection from '../components/OurCompaniesSection';
import OurProductsSection from '../components/OurProductsSection';
import LatestInsightsSection from '../components/LatestInsightsSection';

const Home = () => {
  return (
    <main>
      <Hero />
      <SplitSection />
      <div id="capabilities">
        <CapabilitiesSection />
      </div>
      <OurCompaniesSection />
      <div id="products">
        <OurProductsSection />
      </div>
      <div id="insights">
        <LatestInsightsSection />
      </div>
    </main>
  );
};

export default Home;

