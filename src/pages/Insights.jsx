import React, { useEffect, useState, useRef } from 'react';
import InsightBanner from '../assets/latesInsight/InsightBanner.jpg';
import MigratingImage from '../assets/latesInsight/Migrating.jpg';
import TheMoralImage from '../assets/latesInsight/TheMoral.jpg';
import TheArchitectureImage from '../assets/latesInsight/TheArchitecture.jpg';
import VisulizingImage from '../assets/latesInsight/Visulizing.jpg';
import MailIcon from '../assets/Mail.svg';

const Insights = () => {
  const [activeCategory, setActiveCategory] = useState('All Stories');
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
  const categoryRefs = useRef({});
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  useEffect(() => {
    // Update underline position when active category changes
    const updateUnderline = () => {
      const activeButton = categoryRefs.current[activeCategory];
      const container = containerRef.current;
      
      if (activeButton && container) {
        const containerRect = container.getBoundingClientRect();
        const buttonRect = activeButton.getBoundingClientRect();
        
        setUnderlineStyle({
          left: buttonRect.left - containerRect.left,
          width: buttonRect.width
        });
      }
    };

    // Initial position
    updateUnderline();

    // Update on resize
    window.addEventListener('resize', updateUnderline);
    return () => window.removeEventListener('resize', updateUnderline);
  }, [activeCategory]);

  return (
    <main className="w-full bg-white">
      {/* Editorial Banner Section */}
      <section className="w-full pb-12 sm:pb-16 lg:pb-20 xl:pb-24">
        <div className="mx-auto" style={{ maxWidth: '1440px', width: '100%', paddingLeft: 'clamp(16px, 4vw, 60px)', paddingRight: 'clamp(16px, 4vw, 60px)' }}>
          {/* Hero Image */}
          <div 
            className="rounded-2xl overflow-hidden mb-6 lg:w-[1320px] lg:h-[596px] lg:!w-[1320px] lg:!h-[596px]"
            style={{
              width: '100%',
              height: 'clamp(250px, 35vh, 350px)',
              borderRadius: '16px',
              maxWidth: '100%'
            }}
          >
            <img 
              src={InsightBanner} 
              alt="Editorial Banner"
              className="w-full h-full object-cover"
              style={{
                filter: 'grayscale(100%)',
                width: '100%',
                height: '100%',
                borderRadius: '16px'
              }}
            />
          </div>

          {/* Meta Label - EDITOR'S CHOICE */}
          <div className="flex items-center gap-2 mt-6 mb-3" style={{ maxWidth: '1320px' }}>
            {/* Dot Icon */}
            <div 
              className="rounded-full"
              style={{
                width: '12px',
                height: '12px',
                backgroundColor: '#000000'
              }}
            ></div>
            <div 
              className="uppercase tracking-wide"
              style={{ 
                color: '#000000', 
                fontWeight: 600,
                fontSize: '14px',
                letterSpacing: '0.05em'
              }}
            >
              EDITOR'S CHOICE
            </div>
          </div>

          {/* Article Title */}
          <h1 
            className="font-bold tracking-[-0.02em] mb-4 lg:!text-[72px]"
            style={{ 
              color: '#000000',
              fontSize: 'clamp(32px, 5vw, 72px)',
              fontWeight: 600,
              lineHeight: '1.1',
              maxWidth: '1320px'
            }}
          >
            The Future of Quantum <br></br>Computing in FinTech
        </h1>

          {/* Subtitle / Description */}
          <p 
            className="text-base sm:text-lg lg:text-xl mb-5 leading-relaxed"
            style={{ 
              color: '#64748B',
              fontWeight: 400,
              lineHeight: '1.6',
              maxWidth: '1320px'
            }}
          >
            <span className="hidden lg:inline">
              Exploring the intersection of theoretical physics and high-frequency <br></br>finance in the modern digital era.
            </span>
            <span className="lg:hidden">
              Exploring the intersection of theoretical physics<br />
              and high-frequency finance in the modern digital era.
            </span>
          </p>

          {/* Meta Info Row */}
          <div 
            className="text-xs sm:text-sm uppercase tracking-wide"
            style={{ 
              color: '#94A3B8',
              fontWeight: 500,
              letterSpacing: '0.05em',
              marginTop: '20px',
              maxWidth: '1320px'
            }}
          >
            STRATEGY • 5 MIN READ
          </div>
        </div>
      </section>

      {/* Category Navigation Bar */}
      <section className="w-full bg-white pt-2 sm:pt-3 lg:pt-4 pb-0">
        {/* Top Horizontal Line */}
        <div 
          className="w-full mb-4"
          style={{
            height: '1px',
            backgroundColor: '#E2E8F0',
            width: '100%'
          }}
        ></div>
        
        <div className="mx-auto lg:!pl-[60px] lg:!pr-[60px]" style={{ maxWidth: '1440px', width: '100%', paddingLeft: 'clamp(16px, 4vw, 60px)', paddingRight: 'clamp(16px, 4vw, 60px)', paddingBottom: '16px' }}>
          <div 
            ref={containerRef}
            className="relative flex flex-nowrap lg:flex-wrap gap-2 sm:gap-3 lg:gap-10 category-nav-container"
          >
            <style>{`
              @media (max-width: 1023px) {
                .category-nav-container {
                  gap: 8px !important;
                  overflow-x: visible !important;
                }
                .category-nav-container button span {
                  font-size: 16px !important;
                }
              }
              @media (min-width: 1024px) {
                .category-nav-container {
                  gap: 40px !important;
                }
                .category-nav-container button span {
                  font-size: 24px !important;
                }
              }
            `}</style>
            {['All Stories', 'Engineering', 'AI & Data', 'Strategy'].map((category) => (
              <button
                key={category}
                ref={(el) => {
                  if (el) categoryRefs.current[category] = el;
                }}
                onClick={() => setActiveCategory(category)}
                className="relative transition-colors flex-shrink-0"
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0
                }}
              >
                <span
                  className="whitespace-nowrap"
                  style={{
                    color: '#000000',
                    fontWeight: 600,
                    fontSize: '24px',
                    fontFamily: 'inherit',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {category}
                </span>
              </button>
            ))}
            {/* Animated Underline */}
            <div
              className="absolute"
              style={{
                height: '6px',
                backgroundColor: '#020617',
                bottom: '-16px',
                left: `${underlineStyle.left}px`,
                width: `${underlineStyle.width}px`,
                transition: 'left 0.3s ease, width 0.3s ease'
              }}
            ></div>
          </div>
        </div>
        
        {/* Bottom Horizontal Line */}
        <div 
          className="w-full"
          style={{
            height: '1px',
            backgroundColor: '#E2E8F0',
            width: '100%',
            marginTop: '0px'
          }}
        ></div>
      </section>

      {/* Featured Insight Section */}
      <section className="w-full bg-white pt-8 sm:pt-12 lg:pt-16 pb-12 sm:pb-16 lg:pb-20 xl:pb-24">
        <div className="mx-auto" style={{ maxWidth: '1440px', width: '100%', paddingLeft: 'clamp(16px, 4vw, 60px)', paddingRight: 'clamp(16px, 4vw, 60px)' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Left Column - Text Content */}
            <div className="flex flex-col">
              {/* Category Label */}
              <div 
                className="text-xs sm:text-sm uppercase tracking-widest mb-3"
                style={{ 
                  color: '#000000',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  marginBottom: '12px'
                }}
              >
                ENGINEERING
              </div>

              {/* Article Title */}
              <h2 
                className="font-bold tracking-[-0.02em] mb-4"
                style={{ 
                  color: '#000000',
                  fontSize: '36px',
                  fontWeight: 600,
                  lineHeight: '1.1',
                  maxWidth: '90%'
                }}
              >
                <span style={{ whiteSpace: 'nowrap' }}>Migrating Legacy</span><br />System: A Strategic<br />Guide
              </h2>

              {/* Description */}
              <p 
                className="leading-relaxed mb-6"
                style={{ 
                  color: '#64748B',
                  fontWeight: 400,
                  lineHeight: '1.6',
                  marginTop: '16px',
                  maxWidth: '85%',
                  fontSize: '18px'
                }}
              >
                A comprehensive breakdown on how to update critical infrastructure without downtime or data loss.
              </p>

              {/* Author & Meta Row */}
              <div className="flex items-center justify-between mt-6" style={{ marginTop: '24px', gap: '16px' }}>
                <div className="flex items-center gap-2">
                  {/* Circular Avatar */}
                  <div 
                    className="rounded-full flex-shrink-0"
                    style={{
                      width: '40px',
                      height: '40px',
                      backgroundColor: '#1E293B'
                    }}
                  ></div>
                  {/* Author Name */}
                  <div 
                    className="text-sm sm:text-base font-medium"
                    style={{ 
                      color: '#000000',
                      fontWeight: 500
                    }}
                  >
                    Sarah Chen
                  </div>
                </div>
                {/* Read Time */}
                <div 
                  style={{ 
                    color: '#64748B',
                    fontWeight: 500,
                    fontSize: '16px'
                  }}
                >
                  3 MIN READ
                </div>
              </div>
            </div>

            {/* Right Column - Feature Image */}
            <div className="w-full lg:w-auto">
              <img 
                src={MigratingImage} 
                alt="Migrating Legacy System"
                className="rounded-2xl lg:!w-[640px] lg:!h-[456px]"
                style={{
                  width: '100%',
                  height: 'clamp(250px, 35vh, 400px)',
                  maxWidth: '100%',
                  filter: 'grayscale(100%)',
                  borderRadius: '16px',
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Horizontal Divider Line */}
      <section className="w-full bg-white py-0">
        <div 
          className="w-full"
          style={{
            height: '1px',
            backgroundColor: '#E2E8F0',
            width: '100%'
          }}
        ></div>
      </section>

      {/* Featured Insight Section 2 - AI & Ethics */}
      <section className="w-full bg-white pt-8 sm:pt-12 lg:pt-16 pb-12 sm:pb-16 lg:pb-20 xl:pb-24">
        <div className="mx-auto" style={{ maxWidth: '1440px', width: '100%', paddingLeft: 'clamp(16px, 4vw, 60px)', paddingRight: 'clamp(16px, 4vw, 60px)' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Left Column - Text Content */}
            <div className="flex flex-col">
              {/* Category Label */}
              <div 
                className="text-xs sm:text-sm uppercase tracking-widest mb-3"
                style={{ 
                  color: '#000000',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  marginBottom: '12px'
                }}
              >
                AI & ETHICS
              </div>

              {/* Article Title */}
              <h2 
                className="font-bold tracking-[-0.02em] mb-4"
                style={{ 
                  color: '#000000',
                  fontSize: '36px',
                  fontWeight: 600,
                  lineHeight: '1.1',
                  maxWidth: '90%'
                }}
              >
                <span style={{ whiteSpace: 'nowrap' }}>The Moral Landscape of</span><br />Automation
              </h2>

              {/* Description */}
              <p 
                className="text-base sm:text-lg lg:text-xl leading-relaxed mb-6"
                style={{ 
                  color: '#64748B',
                  fontWeight: 400,
                  lineHeight: '1.6',
                  marginTop: '16px',
                  maxWidth: '85%'
                }}
              >
                As algorithms make more decisions, the need for transparent and ethical frameworks becomes...
              </p>

              {/* Author & Meta Row */}
              <div className="flex items-center justify-between mt-6" style={{ marginTop: '24px', gap: '16px' }}>
                <div className="flex items-center gap-2">
                  {/* Circular Avatar */}
                  <div 
                    className="rounded-full flex-shrink-0"
                    style={{
                      width: '40px',
                      height: '40px',
                      backgroundColor: '#1E293B'
                    }}
                  ></div>
                  {/* Author Name */}
                  <div 
                    className="text-sm sm:text-base font-medium"
                    style={{ 
                      color: '#000000',
                      fontWeight: 500
                    }}
                  >
                    James Miller
                  </div>
                </div>
                {/* Read Time */}
                <div 
                  style={{ 
                    color: '#64748B',
                    fontWeight: 500,
                    fontSize: '16px'
                  }}
                >
                  6 MIN READ
                </div>
              </div>
            </div>

            {/* Right Column - Feature Image */}
            <div className="w-full lg:w-auto">
              <img 
                src={TheMoralImage} 
                alt="The Moral Landscape of Automation"
                className="rounded-2xl lg:!w-[640px] lg:!h-[456px]"
                style={{
                  width: '100%',
                  height: 'clamp(250px, 35vh, 400px)',
                  maxWidth: '100%',
                  filter: 'grayscale(100%)',
                  borderRadius: '16px',
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription Banner */}
      <section 
        className="w-full py-12 sm:py-16 lg:py-20"
        style={{
          backgroundColor: '#020617',
          borderRight: '1px solid #F1F5F9'
        }}
      >
        <div className="mx-auto" style={{ maxWidth: '1440px', width: '100%', paddingLeft: 'clamp(16px, 4vw, 60px)', paddingRight: 'clamp(16px, 4vw, 60px)' }}>
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-12">
            {/* Left Content */}
            <div className="flex-1">
              {/* Envelope Icon */}
              <div className="mb-4">
                <div 
                  className="rounded-full flex items-center justify-center"
                  style={{
                    width: '48px',
                    height: '48px',
                    border: '1px solid #64748B',
                    color: '#FFFFFF'
                  }}
                >
                  <img 
                    src={MailIcon}
                    alt="Mail"
                    style={{
                      width: '24px',
                      height: '24px',
                      objectFit: 'contain',
                      filter: 'brightness(0) invert(1)'
                    }}
                  />
                </div>
              </div>

              {/* Heading */}
              <h2 
                className="mb-4"
                style={{ 
                  color: '#FFFFFF',
                  fontWeight: 600,
                  lineHeight: '1.1',
                  fontSize: '48px'
                }}
              >
                <span className="hidden lg:inline">
                  Essential Insights,<br />weekly.
                </span>
                <span className="lg:hidden">
                  Essential Insights, weekly.
                </span>
              </h2>

              {/* Supporting Text */}
              <p 
                className="text-base sm:text-lg mb-6"
                style={{ 
                  color: '#94A3B8',
                  fontWeight: 400,
                  marginBottom: '24px'
                }}
              >
                Join 40,000+ software leaders receiving our <br></br>curated breakdown of tech trends.
              </p>

              {/* Email Input and Subscribe Button */}
              <div className="flex flex-row gap-3 max-w-md">
                <input
                  type="email"
                  placeholder="Email address"
                  className="px-4 py-3 rounded-lg"
                  style={{
                    backgroundColor: '#1E293B',
                    border: '1px solid #94A3B8',
                    color: '#FFFFFF',
                    borderRadius: '8px',
                    fontSize: '16px',
                    flex: 1
                  }}
                />
                <button
                  className="px-6 py-3 rounded-lg font-medium"
                  style={{
                    backgroundColor: '#FFFFFF',
                    color: '#000000',
                    borderRadius: '8px',
                    fontSize: '16px',
                    fontWeight: 500,
                    whiteSpace: 'nowrap'
                  }}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article List Section */}
      <section className="w-full bg-white pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 lg:pb-20 xl:pb-24 relative">
        <style>{`
          @media (min-width: 1024px) {
            .article-image-1,
            .article-image-2 {
              width: clamp(280px, 30vw, 336px) !important;
              height: 200px !important;
            }
          }
        `}</style>
        <div className="mx-auto" style={{ maxWidth: '1440px', width: '100%', paddingLeft: 'clamp(16px, 4vw, 60px)', paddingRight: 'clamp(16px, 4vw, 60px)' }}>
          {/* Article 1 */}
          <div className="relative pb-8 sm:pb-12" style={{ paddingBottom: '48px', marginBottom: '48px' }}>
            <div className="flex flex-row lg:grid lg:grid-cols-2 gap-4 sm:gap-8 lg:gap-16 items-center">
              {/* Left Column - Text Content */}
              <div className="flex flex-col flex-1">
                {/* Category Label */}
                <div 
                  className="text-xs sm:text-sm uppercase tracking-widest mb-3"
                  style={{ 
                    color: '#000000',
                    fontWeight: 500,
                    letterSpacing: '0.1em',
                    marginBottom: '12px'
                  }}
                >
                  CULTURE
                </div>

                {/* Article Title */}
                <h2 
                  className="font-bold tracking-[-0.02em] mb-3"
                  style={{ 
                    color: '#000000',
                    fontSize: '36px',
                    fontWeight: 600,
                    lineHeight: '1.1'
                  }}
                >
                  <span className="lg:hidden">The<br />Architecture<br />of Scale</span>
                  <span className="hidden lg:inline">The Architecture of Scale</span>
                </h2>

                {/* Meta Text */}
                <div 
                  style={{ 
                    color: '#64748B',
                    fontWeight: 500,
                    fontSize: '16px'
                  }}
                >
                  4 MIN READ
                </div>
              </div>

            {/* Right Column - Image */}
            <div className="flex-shrink-0 lg:w-auto lg:flex lg:justify-end">
              <img 
                src={TheArchitectureImage} 
                alt="The Architecture of Scale"
                className="article-image-1"
                style={{
                  width: '178px',
                  height: '160px',
                  maxWidth: '100%',
                  filter: 'grayscale(100%)',
                  borderRadius: '0px',
                  objectFit: 'cover'
                }}
              />
            </div>
            </div>
            {/* Full-width horizontal divider */}
            <div 
              className="absolute bottom-0"
              style={{
                height: '1px',
                backgroundColor: '#E2E8F0',
                width: '100vw',
                left: '50%',
                transform: 'translateX(-50%)'
              }}
            ></div>
          </div>

          {/* Article 2 */}
          <div className="flex flex-row lg:grid lg:grid-cols-2 gap-4 sm:gap-8 lg:gap-16 items-center">
            {/* Left Column - Text Content */}
            <div className="flex flex-col flex-1">
              {/* Category Label */}
              <div 
                className="text-xs sm:text-sm uppercase tracking-widest mb-3"
                style={{ 
                  color: '#000000',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  marginBottom: '12px'
                }}
              >
                DATA
              </div>

              {/* Article Title */}
              <h2 
                className="font-bold tracking-[-0.02em] mb-3"
                style={{ 
                  color: '#000000',
                  fontSize: '36px',
                  fontWeight: 600,
                  lineHeight: '1.1'
                }}
              >
                <span className="lg:hidden">Visualizing<br />Complex<br />Systems</span>
                <span className="hidden lg:inline">Visualizing Complex Systems</span>
              </h2>

                {/* Meta Text */}
                <div 
                  style={{ 
                    color: '#64748B',
                    fontWeight: 500,
                    fontSize: '16px'
                  }}
                >
                  7 MIN READ
                </div>
            </div>

            {/* Right Column - Image */}
            <div className="flex-shrink-0 lg:w-auto lg:flex lg:justify-end">
              <img 
                src={VisulizingImage} 
                alt="Visualizing Complex Systems"
                className="article-image-2"
                style={{
                  width: '178px',
                  height: '160px',
                  maxWidth: '100%',
                  filter: 'grayscale(100%)',
                  borderRadius: '0px',
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>
      </div>
      </section>
    </main>
  );
};

export default Insights;
