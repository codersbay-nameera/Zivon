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
import Frame109Icon from '../assets/ourProducts/Frame 109.svg';
import Frame82Icon from '../assets/ourProducts/Frame 82.svg';

const ProductDetail = () => {
  const { productId } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
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
      <section className="w-full pt-6 sm:pt-8 lg:pt-10 xl:pt-12 pb-8 sm:pb-10 lg:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="rounded-2xl overflow-hidden relative mx-auto"
            style={{
              width: '1280px',
              maxWidth: '100%',
              height: '596px',
              borderRadius: '16px'
            }}
          >
            <img 
              src={ProductBanner} 
              alt={product.name}
              className="w-full h-full object-cover"
              style={{
                filter: 'grayscale(100%)',
                width: '100%',
                height: '100%'
              }}
            />
            {/* Gradient Overlay */}
            <div 
              className="absolute inset-0"
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.2)' // 20% opacity
              }}
            ></div>
          </div>
        </div>
      </section>

      {/* Product Header Content */}
      <section className="w-full bg-white pb-8 sm:pb-10 lg:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Product Name */}
          <h1 
            className="mb-2 sm:mb-3 tracking-[-0.02em]"
            style={{ 
              color: '#000000',
              fontSize: '72px',
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
            Real-time data processing for enterprise scale. <br />
            Turn chaos into clarity with zero latency.
          </p>
        </div>
      </section>

      {/* Key Capabilities Section */}
      <section className="w-full bg-white pt-4 sm:pt-6 lg:pt-8 pb-8 sm:pb-10 lg:pb-12 xl:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-[-0.02em]"
            style={{ color: '#000000', fontWeight: 600, marginBottom: '20px' }}
          >
            Key Capabilities
          </h2>

          {/* Capabilities Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: '10px' }}>
            {product.capabilities.map((capability, index) => (
              <div
                key={index}
                className="bg-white border flex flex-col"
                style={{
                  width: '296px',
                  height: '190px',
                  borderRadius: '16px',
                  borderWidth: '1px',
                  borderColor: '#E2E8F0',
                  borderStyle: 'solid',
                  padding: '32px'
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
                  className="text-lg sm:text-xl md:text-2xl font-bold"
                  style={{ color: '#000000', marginBottom: '8px' }}
                >
                  {capability.title}
                </h3>

                {/* Subtitle */}
                <div 
                  className="text-xs sm:text-sm uppercase tracking-wider mt-auto"
                  style={{ color: '#64748B', fontWeight: 500 }}
                >
                  {capability.subtitle}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Architecture Section */}
      <section className="w-full bg-white pt-4 sm:pt-6 lg:pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-[-0.02em]"
            style={{ 
              color: '#000000', 
              fontWeight: 600,
              marginBottom: '20px'
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
          backgroundColor: '#020617'
        }}
      >
        <div 
          className="mx-auto"
          style={{
            width: '1441px',
            maxWidth: '100%',
            height: '400px',
            paddingTop: '32px',
            paddingRight: '80px',
            paddingBottom: '32px',
            paddingLeft: '80px',
            gap: '32px',
            borderRightWidth: '1px',
            borderRightStyle: 'solid',
            borderRightColor: '#475569',
            backgroundColor: '#020617'
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center" style={{ gap: '32px', height: '100%' }}>
            {/* Left Content Area */}
            <div className="flex flex-col">
              {/* Small Label */}
              <div 
                className="text-xs sm:text-sm uppercase tracking-widest mb-1 sm:mb-2"
                style={{ color: '#94A3B8', fontWeight: 500 }}
              >
                SYSTEM DIAGRAM
              </div>

              {/* Main Title */}
              <h2 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 tracking-[-0.02em]"
                style={{ color: '#FFFFFF' }}
              >
                Microsoft Core
              </h2>

              {/* Description Text */}
              <p 
                className="text-base sm:text-lg leading-relaxed"
                style={{ color: '#94A3B8', fontWeight: 400, maxWidth: '480px' }}
              >
                Built on a decoupled architecture leveraging Kubernetes for<br />
                intelligent auto-scaling. Data flows through our proprietary<br />
                ingest engine before being distributed to isolated processing<br />
                nodes.
              </p>
            </div>

            {/* Right Architecture Diagram Card */}
            <div 
              className="border flex items-center justify-center"
              style={{
                width: '600px',
                height: '320px',
                borderRadius: '16px',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: '#475569',
                backgroundColor: '#020617',
                padding: '32px',
                gap: '24px'
              }}
            >
              {/* System Nodes - Horizontal Flow */}
              <div className="flex items-center justify-center">
                {/* Node 1 - Client / Device */}
                <div className="flex items-center">
                  <div 
                    className="rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      width: '64px',
                      height: '64px',
                      backgroundColor: '#1E293B'
                    }}
                  >
                    <span 
                      className="material-symbols-outlined"
                      style={{ 
                        color: '#FFFFFF', 
                        fontSize: '28px',
                        fontWeight: 400
                      }}
                    >
                      devices
                    </span>
                  </div>
                </div>

                {/* Connection Line */}
                <div 
                  style={{ 
                    width: '93px',
                    height: '0px',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: '#FFFFFF',
                    margin: '0 8px'
                  }}
                ></div>

                {/* Node 2 - Distributed Processing / Network */}
                <div className="flex items-center">
                  <div 
                    className="rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      width: '64px',
                      height: '64px',
                      backgroundColor: '#1E293B'
                    }}
                  >
                    <span 
                      className="material-symbols-outlined"
                      style={{ 
                        color: '#FFFFFF', 
                        fontSize: '28px',
                        fontWeight: 400
                      }}
                    >
                      hub
                    </span>
                  </div>
                </div>

                {/* Connection Line */}
                <div 
                  style={{ 
                    width: '93px',
                    height: '0px',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: '#FFFFFF',
                    margin: '0 8px'
                  }}
                ></div>

                {/* Node 3 - Database / Storage */}
                <div className="flex items-center">
                  <div 
                    className="rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      width: '64px',
                      height: '64px',
                      backgroundColor: '#1E293B'
                    }}
                  >
                    <span 
                      className="material-symbols-outlined"
                      style={{ 
                        color: '#FFFFFF', 
                        fontSize: '28px',
                        fontWeight: 400
                      }}
                    >
                      database
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Solution Section */}
      <section className="w-full bg-white pt-12 sm:pt-16 lg:pt-20">
        <div 
          className="mx-auto"
          style={{
            width: '1440px',
            maxWidth: '100%',
            paddingRight: '80px',
            paddingLeft: '80px',
            gap: '32px'
          }}
        >
          {/* Section Title */}
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-12 tracking-[-0.02em]"
            style={{ color: '#000000', fontWeight: 600, marginBottom: '48px' }}
          >
            Industries Solution
          </h2>

          {/* Industry Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: '32px' }}>
            {[
              {
                icon: PaychequeIcon,
                title: 'Finance',
                description: 'Real-time fraud detection analyzing millions of transactions per second to flag anomalies'
              },
              {
                icon: Frame109Icon,
                title: 'Healthcare',
                description: 'High-throughput analytics for patient data, diagnostics, and operational systems—enabling faster insights while maintaining strict data privacy and compliance.'
              },
              {
                icon: Frame82Icon,
                title: 'Retail & E-commerce',
                description: 'Real-time demand forecasting and behavioral analytics to optimize inventory, pricing, and personalized customer experiences at scale.'
              }
            ].map((industry, index) => (
              <div
                key={index}
                className="bg-white border flex flex-col"
                style={{
                  width: '400px',
                  height: '442px',
                  borderRadius: '16px',
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  borderColor: '#E2E8F0',
                  padding: '32px',
                  gap: '24px'
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
                        width: '20px',
                        height: '20px',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 
                  className="text-xl sm:text-2xl font-semibold"
                  style={{ color: '#000000', fontWeight: 600, marginBottom: '4px' }}
                >
                  {industry.title}
                </h3>

                {/* Description */}
                <p 
                  className="text-base sm:text-lg leading-relaxed flex-grow"
                  style={{ 
                    color: '#475569', 
                    fontWeight: 400,
                    lineHeight: '1.6'
                  }}
                >
                  {industry.description}
                </p>

                {/* Bottom CTA */}
                <div 
                  className="text-sm sm:text-base font-medium mt-auto"
                  style={{ color: '#0F172A', fontWeight: 500 }}
                >
                  View Case Studies
                </div>
              </div>
            ))}
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
              className="flex flex-wrap items-center justify-center"
              style={{
                gap: 'clamp(32px, 4vw, 64px)' // Responsive gap: smaller on tablet/mobile
              }}
            >
              {[LogoIpsum1, LogoIpsum2, LogoIpsum3, LogoIpsum4, Logo].map((logo, index) => (
                <div
                  key={index}
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
                      filter: index === 4 ? 'grayscale(100%)' : 'none', // LogoIpsum5 - grayscale, others black
                      opacity: 1
                    }}
                  />
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
};

export default ProductDetail;
