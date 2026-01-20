import React, { useEffect, useState, useRef } from 'react';
import { RiReactjsLine, RiFolder6Fill } from "react-icons/ri";
import { FaDatabase, FaAws } from "react-icons/fa";
import { MdCloudDone } from "react-icons/md";
import LaptopMetrics from '../assets/engineering/Laptop Metrics.svg';
import Smartphone from '../assets/engineering/Smartphone.svg';
import CloudComputing from '../assets/engineering/Cloud Computing.svg';

const Engineering = () => {
  const [isHovered, setIsHovered] = useState(false);
  const marqueeRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);
  const approaches = [
    {
      step: "01",
      title: "Discovery",
      description: "In-depth analysis of business objectives, technical constraints, existing systems, and stakeholder requirements. We align success metrics before any code is written."
    },
    {
      step: "02",
      title: "Architecture & Planning",
      description: "We design scalable system architectures, define data flows, and select the optimal technology stack. This phase ensures performance, security, and long-term maintainability.."
    },
    {
      step: "03",
      title: "Design & Prototyping",
      description: "User experience and interface concepts are translated into interactive prototypes. We validate assumptions early through stakeholder reviews and rapid iteration."
    }
  ];

  const capabilities = [
    {
      index: "01",
      title: "Custom Software Engineering",
      icon: LaptopMetrics,
      description: "We build robust, enterprise-grade scalable solutions tailored to complex business logic. Our engineering team focuses on backend reliability and seamless data orchestration.",
      focus: "Full-stack",
      metric: "99.9% Scalability"
    },
    {
      index: "02",
      title: "Advanced Mobile & Web Applications",
      icon: Smartphone,
      description: "High-performance cross-platform applications designed for speed and native-level experience. We leverage modern frameworks to ensure consistent performance across all devices.",
      focus: "Cross-platform",
      metric: "60 FPS Render"
    },
    {
      index: "03",
      title: "Modern Cloud Infrastructure",
      icon: CloudComputing,
      description: "Resilient cloud architectures built on industry-leading platforms. We specialize in automated deployments, self-healing systems, and global content delivery.",
      focus: "Cloud Native",
      metric: "Zero-downtime"
    }
  ];

  return (
    <main className="w-full">
      {/* Header Section */}
      <section className="w-full" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="mx-auto py-12 sm:py-16 lg:py-20 xl:py-24" style={{ maxWidth: '1440px', width: '100%', paddingLeft: 'clamp(16px, 4vw, 60px)', paddingRight: 'clamp(16px, 4vw, 60px)' }}>
          {/* Small Uppercase Label */}
          <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm uppercase tracking-wider mb-4 sm:mb-6">
            <div 
              style={{ 
                width: '50px', 
                borderTop: '1px solid #000000',
                height: '0'
              }}
            ></div>
            <span style={{ color: '#000000', fontWeight: 500 }}>OUR CAPABILITIES</span>
          </div>

          {/* Main Heading - Split across two lines */}
          <div className="mb-6 sm:mb-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-[-0.02em] mb-2" style={{ color: '#000000' }}>
              Engineering
            </h1>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[-0.02em]" style={{ color: '#94A3B8', fontWeight: 600 }}>
              Excellence
            </h1>
          </div>

          {/* Descriptive Paragraph */}
          <p 
            className="text-base sm:text-lg lg:text-xl max-w-3xl leading-relaxed"
            style={{ color: '#64748B', fontWeight: 400 }}
          >
            Delivering a comprehensive suite of software development services,<br></br> from enterprise-grade systems to high-performance user <br></br>experiences.
          </p>
        </div>
      </section>

      {/* Capabilities Cards Section */}
      <section className="w-full bg-white relative">
        <div className="mx-auto py-6 sm:py-8 lg:py-10 xl:py-12 relative" style={{ maxWidth: '1440px', width: '100%', paddingLeft: 'clamp(16px, 4vw, 60px)', paddingRight: 'clamp(16px, 4vw, 60px)' }}>
          {/* Full-height vertical dividers */}
          <div 
            className="hidden lg:block absolute top-0 bottom-0 border-r border-gray-100"
            style={{ 
              left: 'calc(33.333% + 0.5rem)',
              top: '0',
              bottom: '0',
              height: '100%'
            }}
          ></div>
          <div 
            className="hidden lg:block absolute top-0 bottom-0 border-r border-gray-100"
            style={{ 
              left: 'calc(66.666% + 0.5rem)',
              top: '0',
              bottom: '0',
              height: '100%'
            }}
          ></div>
          {/* Capabilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
          {capabilities.map((capability, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${index > 0 && index % 3 !== 0 ? 'lg:pl-6 xl:pl-8' : ''} ${index > 0 && index % 3 === 0 ? 'lg:pl-0' : ''}`}
            >
              {/* Icon */}
              <div 
                className="mb-2 sm:mb-3"
                style={{ width: '24px', height: '24px' }}
              >
                <img 
                  src={capability.icon} 
                  alt={capability.title}
                  style={{
                    width: '24px',
                    height: '24px',
                    objectFit: 'contain'
                  }}
                />
              </div>

              {/* Title */}
              <h2 className="text-xl sm:text-2xl lg:text-3xl mb-3 sm:mb-4 tracking-[-0.02em]" style={{ color: '#000000', fontWeight: 600 }}>
                {capability.title === "Advanced Mobile & Web Applications" ? (
                  <>
                    Advanced Mobile &<br />
                    Web Applications
                  </>
                ) : (
                  capability.title
                )}
              </h2>

              {/* Description */}
              <p 
                className="text-base sm:text-lg mb-4 sm:mb-5 leading-relaxed"
                style={{ color: '#64748B', fontWeight: 400 }}
              >
                {capability.title === "Custom Software Engineering" && (
                  <>
                    We build robust, enterprise-grade<br />
                    scalable solutions tailored to<br />
                    complex business logic. Our<br />
                    engineering team focuses on<br />
                    backend reliability and seamless<br />
                    data orchestration.
                  </>
                )}
                {capability.title === "Advanced Mobile & Web Applications" && (
                  <>
                    <span style={{ whiteSpace: 'nowrap' }}>High-performance cross-platform</span><br />
                    applications designed for speed<br />
                    and native-level experience. We<br />
                    leverage modern frameworks to<br />
                    ensure consistent performance<br />
                    across all devices.
                  </>
                )}
                {capability.title === "Modern Cloud Infrastructure" && (
                  <>
                    Resilient cloud architectures<br />
                    built on industry-leading<br />
                    platforms. We specialize in<br />
                    automated deployments,<br />
                    self-healing systems, and global<br />
                    content delivery.
                  </>
                )}
              </p>

              {/* Metadata Boxes */}
              <div className="space-y-2 sm:space-y-3 mt-4 sm:mt-auto">
                {/* Focus Box */}
                <div 
                  className="border p-3 sm:p-4 md:p-5 bg-white"
                  style={{ borderColor: '#E2E8F0', borderRadius: '16px' }}
                >
                  <div 
                    className="text-xs sm:text-sm uppercase tracking-wide mb-1 sm:mb-2"
                    style={{ color: '#64748B', fontWeight: 600 }}
                  >
                    Focus
                  </div>
                  <div 
                    className="text-sm sm:text-base md:text-lg font-bold"
                    style={{ color: '#000000' }}
                  >
                    {capability.focus}
                  </div>
                </div>

                {/* Metric Box */}
                <div 
                  className="border p-3 sm:p-4 md:p-5 bg-white"
                  style={{ borderColor: '#E2E8F0', borderRadius: '16px' }}
                >
                  <div 
                    className="text-xs sm:text-sm uppercase tracking-wide mb-1 sm:mb-2"
                    style={{ color: '#64748B', fontWeight: 600 }}
                  >
                    Metric
                  </div>
                  <div 
                    className="text-sm sm:text-base md:text-lg font-bold"
                    style={{ color: '#000000' }}
                  >
                    {capability.metric}
                  </div>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="w-full py-12 sm:py-16 lg:py-20 xl:py-24" style={{ backgroundColor: '#020617' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <h2 
            className="mb-12 sm:mb-16 lg:mb-20 tracking-[-0.02em]"
            style={{ color: '#FFFFFF', fontWeight: 600, fontSize: '36px' }}
          >
            Our Approach
          </h2>

          {/* Approach Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
            {approaches.map((approach, index) => (
              <div 
                key={index}
                className="flex flex-col"
              >
                {/* Step Number */}
                <div 
                  className="mb-4 sm:mb-6 italic"
                  style={{ color: '#475569', fontWeight: 600, fontSize: '48px' }}
                >
                  {approach.step}
                </div>

                {/* Title */}
                <h3 
                  className="text-xl sm:text-2xl lg:text-3xl mb-4 sm:mb-6 tracking-[-0.02em]"
                  style={{ color: '#FFFFFF', fontWeight: 600 }}
                >
                  {approach.title}
                </h3>

                {/* Description */}
                <p 
                  className="text-base sm:text-lg leading-relaxed"
                  style={{ color: '#94A3B8', fontWeight: 400 }}
                >
                  {approach.title === "Discovery" && (
                    <>
                      In-depth analysis of business objectives,<br />
                      technical constraints, existing systems,<br />
                      and stakeholder requirements. We align<br />
                      success metrics before any code is<br />
                      written.
                    </>
                  )}
                  {approach.title === "Architecture & Planning" && (
                    <>
                      We design scalable system architectures,<br />
                      define data flows, and select the optimal<br />
                      technology stack. This phase ensures<br />
                      performance, security, and long-term<br />
                      maintainability.
                    </>
                  )}
                  {approach.title === "Design & Prototyping" && (
                    <>
                      User experience and interface concepts<br />
                      are translated into interactive<br />
                      prototypes. We validate assumptions<br />
                      early through stakeholder reviews and<br />
                      rapid iteration.
                    </>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="w-full bg-white py-12 sm:py-16 lg:py-20 xl:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Label */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <span 
              className="px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm uppercase tracking-wider"
              style={{ backgroundColor: '#F1F5F9', color: '#64748B', fontWeight: 500 }}
            >
              THE STACK
            </span>
          </div>

          {/* Section Heading */}
          <h2 
            className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12 sm:mb-16 lg:mb-20 tracking-[-0.02em]"
            style={{ color: '#000000' }}
          >
            Built with Industry Standards
          </h2>

          {/* Marquee Container */}
          <div 
            ref={marqueeRef}
            className="relative scrollbar-hide overflow-hidden"
            style={{ width: '100%' }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div 
              className="flex"
              style={{
                display: 'flex',
                width: 'max-content',
                gap: 'clamp(16px, 2vw, 24px)',
                animation: 'marquee 40s linear infinite',
                animationPlayState: isHovered ? 'paused' : 'running',
                willChange: 'transform'
              }}
            >
              {/* First set of tech items */}
              {['React', 'Rust/Go', 'Node.js', 'PostgreSQL', 'MongoDB', 'AWS', 'GCP', 'Redis', 'GraphQL'].map((tech, index) => (
                <div key={`first-${index}`} className="flex-shrink-0">
                  <TechCard name={tech} />
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {['React', 'Rust/Go', 'Node.js', 'PostgreSQL', 'MongoDB', 'AWS', 'GCP', 'Redis', 'GraphQL'].map((tech, index) => (
                <div key={`second-${index}`} className="flex-shrink-0">
                  <TechCard name={tech} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CSS for marquee animation */}
        <style>{`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </section>
    </main>
  );
};

// Tech Card Component
const TechCard = ({ name }) => {
  return (
    <div 
      className="bg-white relative flex-shrink-0"
      style={{ 
        width: 'clamp(140px, 15vw, 180px)',
        height: 'clamp(100px, 12vw, 120px)',
        padding: 'clamp(20px, 2.5vw, 32px)',
        borderRadius: '16px',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: '#E2E8F0'
      }}
    >
      {/* Tech Icon - Top Left Corner */}
      {name === 'React' ? (
        <RiReactjsLine 
          className="absolute"
          style={{ 
            color: '#000000', 
            fontSize: 'clamp(20px, 2.5vw, 28px)',
            top: 'clamp(20px, 2.5vw, 28px)',
            left: 'clamp(20px, 2.5vw, 32px)'
          }}
        />
      ) : name === 'Rust/Go' ? (
        <RiFolder6Fill 
          className="absolute"
          style={{ 
            color: '#000000', 
            fontSize: 'clamp(20px, 2.5vw, 28px)',
            top: 'clamp(20px, 2.5vw, 28px)',
            left: 'clamp(20px, 2.5vw, 32px)'
          }}
        />
      ) : name === 'PostgreSQL' ? (
        <FaDatabase 
          className="absolute"
          style={{ 
            color: '#000000', 
            fontSize: 'clamp(20px, 2.5vw, 28px)',
            top: 'clamp(20px, 2.5vw, 28px)',
            left: 'clamp(20px, 2.5vw, 32px)'
          }}
        />
      ) : name === 'AWS' ? (
        <FaAws 
          className="absolute"
          style={{ 
            color: '#000000', 
            fontSize: 'clamp(20px, 2.5vw, 28px)',
            top: 'clamp(20px, 2.5vw, 28px)',
            left: 'clamp(20px, 2.5vw, 32px)'
          }}
        />
      ) : name === 'GCP' ? (
        <MdCloudDone 
          className="absolute"
          style={{ 
            color: '#000000', 
            fontSize: 'clamp(20px, 2.5vw, 28px)',
            top: 'clamp(20px, 2.5vw, 28px)',
            left: 'clamp(20px, 2.5vw, 32px)'
          }}
        />
      ) : (
        <span 
          className="material-symbols-outlined absolute"
          style={{ 
            color: '#000000', 
            fontSize: 'clamp(20px, 2.5vw, 28px)',
            top: 'clamp(20px, 2.5vw, 28px)',
            left: 'clamp(20px, 2.5vw, 32px)'
          }}
        >
          {getTechIcon(name)}
        </span>
      )}
      {/* Tech Name - Below Icon, Left Aligned */}
      <div 
        className="text-xs sm:text-sm font-bold absolute"
        style={{ 
          color: '#000000',
          top: 'clamp(55px, 7vw, 72px)',
          left: 'clamp(20px, 2.5vw, 32px)'
        }}
      >
        {name}
      </div>
    </div>
  );
};

// Helper function to get Material Icon name for each tech
const getTechIcon = (name) => {
  const icons = {
    'React': 'code',
    'Rust': 'memory',
    'Go': 'speed',
    'Node.js': 'terminal',
    'PostgreSQL': 'storage',
    'MongoDB': 'database',
    'AWS': 'cloud',
    'GCP': 'cloud_queue',
    'Redis': 'memory',
    'GraphQL': 'api'
  };
  return icons[name] || 'code';
};

export default Engineering;
