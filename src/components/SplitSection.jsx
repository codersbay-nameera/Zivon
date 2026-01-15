import React from 'react';
import DraftingCompassIcon from '../assets/drafting-compass.svg';
import GlobeIcon from '../assets/globe.svg';

const SplitSection = () => {
  return (
    <>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 xl:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 relative">
          {/* Vertical Divider - Only visible on large screens */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-100 transform -translate-x-1/2"></div>
          
          {/* Left Column - Mission */}
          <div className="relative">
            {/* Icon */}
            <div className="mb-3 sm:mb-4">
              <div 
                className="w-10 h-10 flex items-center justify-center"
                style={{ backgroundColor: '#F1F5F9', borderRadius: '8px' }}
              >
                <img src={DraftingCompassIcon} alt="Drafting Compass" className="w-6 h-6" style={{ color: '#000000' }} />
              </div>
            </div>
            
            {/* Label */}
            <div className="text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3" style={{ fontFamily: 'Geist, sans-serif', fontWeight: 500, color: '#000000' }}>
              OUR MISSION
            </div>
            
            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-3 sm:mb-4 tracking-[-0.02em] leading-tight">
              Engineering the Future.
            </h2>
            
            {/* Supporting paragraph */}
            <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#64748B', fontWeight: 400 }}>
              We exist to architect the foundational systems that will support the next century of human advancement, prioritizing resilience, precision, and scalability above all else.
            </p>
          </div>
          
          {/* Right Column - Vision */}
          <div className="relative">
            {/* Icon */}
            <div className="mb-3 sm:mb-4">
              <div 
                className="w-10 h-10 flex items-center justify-center"
                style={{ backgroundColor: '#F1F5F9', borderRadius: '8px' }}
              >
                <img src={GlobeIcon} alt="Globe" className="w-6 h-6" style={{ color: '#000000' }} />
              </div>
            </div>
            
            {/* Label */}
            <div className="text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3" style={{ fontFamily: 'Geist, sans-serif', fontWeight: 500, color: '#000000' }}>
              OUR VISION
            </div>
            
            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-3 sm:mb-4 tracking-[-0.02em] leading-tight">
              Global Technological Integration.
            </h2>
            
            {/* Supporting paragraph */}
            <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#64748B', fontWeight: 400 }}>
              Envisioning a seamless, borderless digital ecosystem where intelligence flows freely, empowering organizations to solve the world's most complex challenges without friction.
            </p>
          </div>
        </div>
      </section>
      {/* Horizontal Divider - Full Width */}
      <div className="w-full border-t border-gray-100"></div>
    </>
  );
};

export default SplitSection;

