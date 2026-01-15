import React from 'react';

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 xl:py-20">
      <div className="max-w-4xl">
        {/* Label */}
        <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm uppercase tracking-wider text-primary mb-4 sm:mb-6">
          <div 
            style={{ 
              width: '50px', 
              borderTop: '1px solid #000000',
              height: '0'
            }}
          ></div>
          <span>PARENT COMPANY</span>
        </div>
        
        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-[-0.02em] mb-6 sm:mb-8">
          <span className="text-primary block sm:inline">Building the</span>
          <br className="hidden sm:block" />
          <span 
            className="text-secondary block sm:inline text-[28px] sm:text-[36px] md:text-[48px] lg:text-[60px] xl:text-[72px] leading-[28px] sm:leading-[36px] md:leading-[48px] lg:leading-[60px] xl:leading-[72px]"
            style={{
              fontFamily: 'Geist, sans-serif',
              fontWeight: 600,
              letterSpacing: '0%'
            }}
          >
            digital infrastructure
          </span>
          <br className="hidden sm:block" />
          <span className="text-primary block sm:inline">of tomorrow.</span>
        </h1>
        
        {/* New text below heading */}
        <p className="text-sm sm:text-base lg:text-lg mb-8 sm:mb-10 lg:mb-12 max-w-2xl leading-relaxed" style={{ color: '#64748B', fontWeight: 400 }}>
          We engineer mission-critical software and resilient systems for the world's most ambitious organizations.
        </p>
        
        {/* CTA Buttons */}
        {/* <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-primary text-white px-8 py-4 font-medium hover:opacity-90 transition-opacity">
            Our Capabilities
          </button>
          <button className="bg-white text-primary border-2 border-primary px-8 py-4 font-medium hover:bg-primary hover:text-white transition-colors">
            View Portfolio
          </button>
        </div> */}
      </div>
      {/* Horizontal Divider */}
      <div className="border-t border-gray-100 mt-8 sm:mt-10 lg:mt-12"></div>
    </section>
  );
};

export default Hero;

