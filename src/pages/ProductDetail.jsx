import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductBanner from '../assets/Product_Banner.jpg';
import LogoIpsum1 from '../assets/ourProducts/LogoIpsum1.svg';
import LogoIpsum2 from '../assets/ourProducts/LogoIpsum2.svg';
import LogoIpsum3 from '../assets/ourProducts/Logo.Ipsum3svg.svg';
import LogoIpsum4 from '../assets/ourProducts/LogoIpsum4.svg';
import Logo from '../assets/Logo.png';
import Icon1 from '../assets/ourProducts/1.svg';
import Icon2 from '../assets/ourProducts/2.svg';
import Icon3 from '../assets/ourProducts/3.svg';
import Icon4 from '../assets/ourProducts/4.svg';
import PaychequeIcon from '../assets/ourProducts/Paycheque.svg';
import StethoscopeIcon from '../assets/ourProducts/Stethoscope.svg';
import OnlineShopIcon from '../assets/ourProducts/Online Shop.svg';
import PhoneLaptopIcon from '../assets/ourProducts/ic-fluent-phone-laptop-24-filled 1.svg';
import SmartThingIcon from '../assets/ourProducts/smartThing.png';
import Icon20131 from '../assets/ourProducts/20131 (1) 1.svg';
import SystemDesignIcon from '../assets/ourProducts/product_stsytemDesign.svg';

const ProductDetail = () => {
  const { productId } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  // Product data mapping
  const productData = {
    'nexus-analytics-pro': {
      name: 'Nexus Analytics Pro',
      description: 'Real-time data processing for enterprise scale. Turn chaos into clarity with zero latency.',
      capabilities: [
        {
          icon: 'speed',
          title: 'Zero Latency',
          subtitle: 'Sub-millisecond processing speeds'
        },
        {
          icon: 'security',
          title: 'Bank Security',
          subtitle: 'AES-256 encryption at rest'
        },
        {
          icon: 'api',
          title: 'Custom API',
          subtitle: 'Full RESTful access endpoints.'
        },
        {
          icon: 'cloud',
          title: 'Cloud Native',
          subtitle: 'Auto-scaling microservices'
        }
      ]
    },
    'nexus-core': {
      name: 'Nexus Analytics Pro',
      description: 'Real-time data processing for enterprise scale. Turn chaos into clarity with zero latency.',
      capabilities: [
        {
          icon: 'speed',
          title: 'Zero Latency',
          subtitle: 'Sub-millisecond processing speeds'
        },
        {
          icon: 'security',
          title: 'Bank Security',
          subtitle: 'AES-256 encryption at rest'
        },
        {
          icon: 'api',
          title: 'Custom API',
          subtitle: 'Full RESTful access endpoints.'
        },
        {
          icon: 'cloud',
          title: 'Cloud Native',
          subtitle: 'Auto-scaling microservices'
        }
      ]
    },
    'sentinel-ai': {
      name: 'Sentinel AI',
      description: 'Autonomous threat detection and response system for financial networks, reducing risk by 40%.',
      capabilities: [
        {
          icon: 'security',
          title: 'Zero Latency',
          subtitle: 'Sub-millisecond processing speeds'
        },
        {
          icon: 'shield',
          title: 'Bank Security',
          subtitle: 'AES-256 encryption at rest'
        },
        {
          icon: 'api',
          title: 'Custom API',
          subtitle: 'Full RESTful access endpoints.'
        },
        {
          icon: 'cloud',
          title: 'Cloud Native',
          subtitle: 'Auto-scaling microservices'
        }
      ]
    },
    'nexus-core': {
      name: 'Nexus Core',
      description: 'The backbone for global supply chain transparency, providing real-time visibility across continents.',
      capabilities: [
        {
          icon: 'speed',
          title: 'Zero Latency',
          subtitle: 'Sub-millisecond processing speeds'
        },
        {
          icon: 'security',
          title: 'Bank Security',
          subtitle: 'AES-256 encryption at rest'
        },
        {
          icon: 'api',
          title: 'Custom API',
          subtitle: 'Full RESTful access endpoints.'
        },
        {
          icon: 'cloud',
          title: 'Cloud Native',
          subtitle: 'Auto-scaling microservices'
        }
      ]
    },
    'quasar-data': {
      name: 'Quasar Data',
      description: 'Enterprise analytics with predictive modeling capabilities to forecast market trends.',
      capabilities: [
        {
          icon: 'analytics',
          title: 'Zero Latency',
          subtitle: 'Sub-millisecond processing speeds'
        },
        {
          icon: 'security',
          title: 'Bank Security',
          subtitle: 'COUNTRIES'
        },
        {
          icon: 'api',
          title: 'Custom API',
          subtitle: 'Full RESTful access endpoints.'
        },
        {
          icon: 'cloud',
          title: 'Cloud Native',
          subtitle: 'Auto-scaling microservices'
        }
      ]
    }
  };

  const product = productData[productId] || productData['nexus-analytics-pro'];

  // Icons array for Key Capabilities
  const capabilityIcons = [Icon1, Icon2, Icon3, Icon4];

  return (
    <main className="w-full bg-white">
      {/* Hero Image Section */}
      <section className="w-full pb-8 sm:pb-10 lg:pb-12">
        <div className="mx-auto" style={{ maxWidth: '1440px', width: '100%', paddingLeft: 'clamp(16px, 4vw, 60px)', paddingRight: 'clamp(16px, 4vw, 60px)' }}>
          <div 
            className="relative mx-auto lg:!h-[596px]"
            style={{
              width: '1280px',
              height: 'clamp(250px, 35vh, 350px)',
              maxWidth: '100%',
              borderRadius: '16px',
              backgroundImage: `url(${ProductBanner})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'grayscale(100%)'
            }}
          >
            {/* Greyish Overlay */}
            <div 
              className="absolute inset-0"
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                borderRadius: '16px'
              }}
            />
          </div>
        </div>
      </section>

      {/* Product Header Content */}
      <section className="w-full bg-white pb-8 sm:pb-10 lg:pb-12">
        <div className="mx-auto" style={{ maxWidth: '1440px', width: '100%', paddingLeft: 'clamp(16px, 4vw, 60px)', paddingRight: 'clamp(16px, 4vw, 60px)' }}>
          {/* Product Name */}
          <h1 
            className="mb-2 sm:mb-3 tracking-[-0.02em]"
            style={{ 
              color: '#000000',
              fontSize: 'clamp(36px, 6vw, 72px)',
              fontWeight: 600
            }}
          >
            Nexus Analytics Pro
          </h1>

          {/* Product Description */}
          <p 
            className="text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl"
            style={{ color: '#64748B', fontWeight: 400 }}
          >
            Real-time data processing for enterprise scale. Turn chaos into<br />
            clarity with zero latency.
          </p>
        </div>
      </section>

      {/* Key Capabilities Section */}
      <section className="w-full bg-white pt-4 sm:pt-6 lg:pt-8 pb-8 sm:pb-10 lg:pb-12 xl:pb-16">
        <div className="mx-auto" style={{ maxWidth: '1440px', width: '100%', paddingLeft: 'clamp(16px, 4vw, 60px)', paddingRight: 'clamp(16px, 4vw, 60px)' }}>
          {/* Section Title */}
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-[-0.02em]"
            style={{ color: '#000000', fontWeight: 600, marginBottom: '20px' }}
          >
            Key Capabilities
          </h2>

          {/* Capabilities Cards Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4" style={{ gap: 'clamp(8px, 1.5vw, 10px)' }}>
            {product.capabilities.map((capability, index) => (
              <div
                key={index}
                className="bg-white border flex flex-col"
                style={{
                  width: '100%',
                  height: 'clamp(200px, 30vh, 232px)',
                  padding: 'clamp(20px, 3vw, 32px)',
                  borderRadius: '16px',
                  borderWidth: '1px',
                  borderColor: '#E2E8F0',
                  borderStyle: 'solid'
                }}
              >
                {/* Icon - Top Left */}
                <div style={{ marginBottom: '4px', width: '24px', height: '24px' }}>
                  <img 
                    src={capabilityIcons[index]} 
                    alt={capability.title}
                    style={{
                      width: '24px',
                      height: '24px',
                      objectFit: 'contain'
                    }}
                  />
                </div>

                {/* Title */}
                <h3 
                  className="font-bold"
                  style={{ 
                    color: '#000000', 
                    fontSize: '24px', 
                    marginBottom: '8px', 
                    marginTop: 'clamp(12px, 2vw, 16px)' 
                  }}
                >
                  {capability.title}
                </h3>

                {/* Subtitle */}
                <div 
                  className="uppercase tracking-wider mt-auto"
                  style={{ 
                    color: '#64748B', 
                    fontWeight: 500, 
                    fontSize: '18px' 
                  }}
                >
                  {capability.subtitle}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Architecture Section */}
      <section className="w-full bg-white" style={{ paddingTop: 'clamp(24px, 4vw, 80px)', paddingBottom: 'clamp(24px, 4vw, 48px)' }}>
        <div 
          className="mx-auto"
          style={{
            maxWidth: '1440px',
            width: '100%',
            paddingRight: 'clamp(16px, 4vw, 60px)',
            paddingLeft: 'clamp(16px, 4vw, 60px)',
            gap: '32px'
          }}
        >
          {/* Section Title */}
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-[-0.02em]"
            style={{ 
              color: '#000000', 
              fontWeight: 600,
              marginBottom: 'clamp(24px, 3vw, 48px)'
            }}
          >
            Technical Architecture
          </h2>
        </div>
      </section>

      {/* System Architecture Section */}
      <section 
        className="w-full"
        style={{ 
          backgroundColor: '#020617',
          paddingTop: 'clamp(24px, 4vw, 48px)',
          paddingBottom: 'clamp(24px, 4vw, 48px)',
          marginBottom: 'clamp(24px, 4vw, 48px)',
          position: 'relative',
          zIndex: 0
        }}
      >
        <div 
          className="mx-auto lg:w-[1441px] lg:h-[387px] lg:min-h-[387px] lg:max-h-[287px] min-h-[600px]"
          style={{
            width: '100%',
            maxWidth: '1441px',
            gap: '10px',
            paddingTop: 'clamp(16px, 2vw, 32px)',
            paddingRight: 'clamp(16px, 4vw, 80px)',
            paddingBottom: 'clamp(16px, 2vw, 32px)',
            paddingLeft: 'clamp(16px, 4vw, 80px)',
            borderRightWidth: '1px',
            borderRightStyle: 'solid',
            borderRightColor: '#475569',
            backgroundColor: '#020617'
          }}
        >
          <div className="flex flex-col lg:grid lg:grid-cols-2 items-start lg:h-[287px]" style={{ gap: '32px' }}>
            {/* Left Content Area - First on desktop (left), Third on mobile */}
            <div className="flex flex-col w-full order-3 lg:order-1 lg:pt-0" style={{ paddingTop: '24px' }}>
              {/* Small Label - Hidden on mobile, shown on desktop */}
              <div 
                className="hidden lg:flex items-center gap-2 text-xs sm:text-sm uppercase tracking-widest mb-1 sm:mb-2"
                style={{ color: '#FFFFFF', fontWeight: 600 }}
              >
                <img 
                  src={SystemDesignIcon} 
                  alt="System Design" 
                  style={{ 
                    width: '18px', 
                    height: '18px',
                    top: '3px',
                    left: '3px',
                    position: 'relative',
                    objectFit: 'contain'
                  }} 
                />
                SYSTEM DIAGRAM
              </div>

              {/* Main Title */}
              <h2 
                className="font-bold mb-4 sm:mb-6 tracking-[-0.02em]"
                style={{ color: '#FFFFFF', fontSize: '48px' }}
              >
                Microsoft Core
              </h2>

              {/* Description Text */}
              <p 
                className="text-base sm:text-lg leading-relaxed"
                style={{ color: '#94A3B8', fontWeight: 400, maxWidth: '480px' }}
              >
                Built on a decoupled architecture leveraging Kubernetes for intelligent auto-scaling. Data flows through our proprietary ingest engine before being distributed to isolated processing nodes.
              </p>
            </div>

            {/* Right Architecture Diagram Card - Second on desktop (right), Second on mobile */}
            <div 
              className="border flex items-center justify-center w-full order-2 lg:order-2"
              style={{
                maxWidth: '674px',
                height: 'clamp(300px, 40vh, 367px)',
                minHeight: '300px',
                gap: '24px',
                paddingLeft: 'clamp(16px, 2vw, 32px)',
                paddingRight: 'clamp(16px, 2vw, 32px)',
                paddingBottom: 'clamp(16px, 2vw, 32px)',
                paddingTop: 'clamp(16px, 2vw, 32px)',
                marginTop: '0',
                borderRadius: '16px',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: '#475569',
                backgroundColor: '#020617'
              }}
            >
              {/* System Nodes - Horizontal Flow */}
              <div className="flex items-center justify-center flex-wrap" style={{ gap: 'clamp(8px, 2vw, 16px)' }}>
                {/* Node 1 - Client / Device */}
                <div className="flex items-center">
                  <div 
                    className="rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      width: 'clamp(48px, 6vw, 64px)',
                      height: 'clamp(48px, 6vw, 64px)',
                      backgroundColor: '#1E293B'
                    }}
                  >
                    <img 
                      src={PhoneLaptopIcon} 
                      alt="Client / Device"
                      style={{
                        width: 'clamp(20px, 3vw, 28px)',
                        height: 'clamp(20px, 3vw, 28px)',
                        objectFit: 'contain',
                        filter: 'brightness(0) invert(1)'
                      }}
                    />
                  </div>
                </div>

                {/* Connection Line */}
                <div 
                  style={{ 
                    width: 'clamp(40px, 8vw, 93px)',
                    height: '0px',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: '#FFFFFF',
                    margin: '0 clamp(4px, 1vw, 8px)'
                  }}
                ></div>

                {/* Node 2 - Distributed Processing / Network */}
                <div className="flex items-center">
                  <div 
                    className="rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      width: 'clamp(48px, 6vw, 64px)',
                      height: 'clamp(48px, 6vw, 64px)',
                      backgroundColor: '#1E293B'
                    }}
                  >
                    <img 
                      src={SmartThingIcon} 
                      alt="Distributed Processing / Network"
                      style={{
                        width: 'clamp(20px, 3vw, 28px)',
                        height: 'clamp(20px, 3vw, 28px)',
                        objectFit: 'contain',
                        filter: 'brightness(0) invert(1)'
                      }}
                    />
                  </div>
                </div>

                {/* Connection Line */}
                <div 
                  style={{ 
                    width: 'clamp(40px, 8vw, 93px)',
                    height: '0px',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: '#FFFFFF',
                    margin: '0 clamp(4px, 1vw, 8px)'
                  }}
                ></div>

                {/* Node 3 - Database / Storage */}
                <div className="flex items-center">
                  <div 
                    className="rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      width: 'clamp(48px, 6vw, 64px)',
                      height: 'clamp(48px, 6vw, 64px)',
                      backgroundColor: '#1E293B'
                    }}
                  >
                    <img 
                      src={Icon20131} 
                      alt="Database / Storage"
                      style={{
                        width: 'clamp(20px, 3vw, 28px)',
                        height: 'clamp(20px, 3vw, 28px)',
                        objectFit: 'contain',
                        filter: 'brightness(0) invert(1)'
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* SYSTEM DIAGRAM Label - First on mobile, hidden on desktop */}
            <div className="flex flex-col lg:hidden w-full order-1">
              <div 
                className="flex items-center gap-2 text-xs sm:text-sm uppercase tracking-widest mb-4"
                style={{ color: '#FFFFFF', fontWeight: 600 }}
              >
                <img 
                  src={SystemDesignIcon} 
                  alt="System Design" 
                  style={{ 
                    width: '18px', 
                    height: '18px',
                    top: '3px',
                    left: '3px',
                    position: 'relative',
                    objectFit: 'contain'
                  }} 
                />
                SYSTEM DIAGRAM
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Solution Section */}
      <section className="w-full bg-white" style={{ paddingTop: 'clamp(24px, 4vw, 80px)', marginTop: '0', position: 'relative', zIndex: 1 }}>
        <div 
          className="mx-auto"
          style={{
            maxWidth: '1440px',
            width: '100%',
            paddingRight: 'clamp(16px, 4vw, 60px)',
            paddingLeft: 'clamp(16px, 4vw, 60px)',
            gap: '32px'
          }}
        >
          {/* Section Title */}
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-12 tracking-[-0.02em]"
            style={{ color: '#000000', fontWeight: 600, marginBottom: 'clamp(24px, 3vw, 48px)' }}
          >
            Industries Solution
          </h2>

          {/* Industry Cards Grid - Scrollable on mobile */}
          <div 
            className="lg:grid lg:grid-cols-3 overflow-x-auto"
            style={{ 
              gap: 'clamp(16px, 2vw, 32px)',
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              marginLeft: 'clamp(-16px, -4vw, -60px)',
              marginRight: 'clamp(-16px, -4vw, -60px)',
              paddingLeft: 'clamp(16px, 4vw, 60px)',
              paddingRight: 'clamp(16px, 4vw, 60px)',
              paddingBottom: '8px'
            }}
          >
            <style>{`
              .overflow-x-auto::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            <div className="flex lg:contents" style={{ gap: 'clamp(16px, 2vw, 32px)', width: 'max-content' }}>
            {[
              {
                icon: PaychequeIcon,
                title: 'Finance',
                description: 'Real-time fraud detection analyzing millions of transactions per second to flag anomalies'
              },
              {
                icon: StethoscopeIcon,
                title: 'Healthcare',
                description: 'High-throughput analytics for patient data, diagnostics, and operational systems—enabling faster insights while maintaining strict data privacy and compliance.'
              },
              {
                icon: OnlineShopIcon,
                title: 'Retail & E-commerce',
                description: 'Real-time demand forecasting and behavioral analytics to optimize inventory, pricing, and personalized customer experiences at scale.'
              }
            ].map((industry, index) => (
              <div
                key={index}
                className="bg-white border flex flex-col flex-shrink-0"
                style={{
                  width: 'clamp(280px, 40vw, 400px)',
                  height: 'clamp(380px, 50vh, 442px)',
                  borderRadius: '16px',
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  borderColor: '#E2E8F0',
                  padding: 'clamp(24px, 3vw, 32px)',
                  gap: 'clamp(16px, 2vw, 24px)'
                }}
              >
                {/* Icon Container - Top Left */}
                <div style={{ marginBottom: '4px' }}>
                  <div 
                    className="rounded-lg flex items-center justify-center"
                    style={{
                      width: '40px',
                      height: '40px',
                      backgroundColor: '#F1F5F9'
                    }}
                  >
                    <img 
                      src={industry.icon} 
                      alt={industry.title}
                      style={{
                        width: '24px',
                        height: '24px',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 
                  className="font-semibold"
                  style={{ 
                    color: '#000000', 
                    fontWeight: 600, 
                    marginBottom: '4px',
                    fontSize: 'clamp(18px, 2.5vw, 24px)'
                  }}
                >
                  {industry.title}
                </h3>

                {/* Description */}
                <p 
                  className="leading-relaxed flex-grow"
                  style={{ 
                    color: '#475569', 
                    fontWeight: 400,
                    lineHeight: '1.6',
                    fontSize: 'clamp(14px, 1.8vw, 18px)'
                  }}
                >
                  {industry.description}
                </p>

                {/* Bottom CTA */}
                <div 
                  className="font-medium mt-auto"
                  style={{ 
                    color: '#020617', 
                    fontWeight: 600,
                    fontSize: 'clamp(12px, 1.5vw, 16px)'
                  }}
                >
                  View Case Studies
                </div>
              </div>
            ))}
            </div>
          </div>

          {/* Trusted By Section */}
          <section 
            className="w-full text-center"
            style={{
              backgroundColor: '#FFFFFF',
              paddingTop: '72px',
              paddingBottom: '64px'
            }}
          >
            {/* Section Label */}
            <div className="flex flex-col items-center" style={{ marginBottom: '48px' }}>
              <div 
                className="text-xs sm:text-sm uppercase"
                style={{ 
                  color: '#64748B', 
                  fontWeight: 500,
                  letterSpacing: '0.08em'
                }}
              >
                TRUSTED BY INDUSTRY LEADER
              </div>
            </div>

            {/* Logos Row */}
            <div 
              className="lg:flex lg:flex-wrap lg:items-center lg:justify-center overflow-hidden lg:overflow-x-visible"
              style={{
                gap: 'clamp(32px, 4vw, 64px)'
              }}
            >
              <style>{`
                @keyframes marquee {
                  0% {
                    transform: translateX(0);
                  }
                  100% {
                    transform: translateX(-50%);
                  }
                }
                .marquee-container {
                  display: flex;
                  width: max-content;
                  animation: marquee 40s linear infinite;
                }
                .marquee-container:hover {
                  animation-play-state: paused;
                }
                @media (min-width: 1024px) {
                  .marquee-container {
                    animation: none;
                  }
                }
              `}</style>
              {/* Desktop View - Normal Layout */}
              <div className="hidden lg:contents">
                {[LogoIpsum1, LogoIpsum2, LogoIpsum3, LogoIpsum4, Logo].map((logo, index) => (
                  <div
                    key={`desktop-${index}`}
                    className="flex items-center justify-center"
                    style={{
                      height: '32px'
                    }}
                  >
                    <img 
                      src={logo} 
                      alt={`Logo ${index + 1}`}
                      style={{
                        height: '32px',
                        width: 'auto',
                        objectFit: 'contain',
                        filter: index === 4 ? 'grayscale(100%)' : 'none',
                        opacity: 1
                      }}
                    />
                  </div>
                ))}
              </div>
              {/* Mobile View - Marquee Scroll */}
              <div className="flex lg:hidden overflow-hidden w-full">
                <div className="marquee-container" style={{ gap: 'clamp(32px, 4vw, 64px)' }}>
                  {/* Duplicate logos for seamless loop */}
                  {[...[LogoIpsum1, LogoIpsum2, LogoIpsum3, LogoIpsum4, Logo], ...[LogoIpsum1, LogoIpsum2, LogoIpsum3, LogoIpsum4, Logo]].map((logo, index) => (
                    <div
                      key={`mobile-${index}`}
                      className="flex items-center justify-center flex-shrink-0"
                      style={{
                        height: '32px'
                      }}
                    >
                      <img 
                        src={logo} 
                        alt={`Logo ${index + 1}`}
                        style={{
                          height: '32px',
                          width: 'auto',
                          objectFit: 'contain',
                          filter: (index === 4 || index === 9) ? 'grayscale(100%)' : 'none',
                          opacity: 1
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
};

export default ProductDetail;
