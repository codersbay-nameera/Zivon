import React from 'react';
import { FiArrowRight } from "react-icons/fi";
import DraftingCompassIcon from '../assets/drafting-compass.svg';
import CloudIcon from '../assets/cloud.svg';
import BrainCircuitIcon from '../assets/brain-circuit.png';

const CapabilitiesSection = () => {
  const capabilities = [
    {
      icon: DraftingCompassIcon,
      title: "Engineering",
      description: "Full-cycle software development. We refactor legacy monoliths into scalable microservices, ensuring speed and reliability.",
      isMultiLine: true,
      isSvgIcon: true
    },
    {
      icon: CloudIcon,
      title: "Cloud",
      description: "Native cloud infrastructure and DevOps automation. We build resilient environments that scale with your business demands.",
      isMultiLine: true,
      isSvgIcon: true
    },
    {
      icon: BrainCircuitIcon,
      title: "AI & Data",
      description: "Predictive modeling and intelligent automation. Transforming raw data into actionable insights for strategic advantage.",
      isMultiLine: true,
      isSvgIcon: true
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 xl:py-16 bg-white">
      {/* Section Title with Divider */}
      <div className="mb-8 sm:mb-12 lg:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-primary mb-4 sm:mb-6 tracking-[-0.02em]">
          Capabilities
        </h2>
        <div className="border-t border-gray-100"></div>
      </div>

      {/* 3-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
        {capabilities.map((capability, index) => {
          const IconComponent = capability.icon;
          return (
            <div key={index} className="flex flex-col">
              {/* Icon Container */}
              <div className="mb-3 sm:mb-4">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
                  style={{ backgroundColor: '#F5F5F5' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#EAEAEA'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#F5F5F5'}
                >
                  {capability.isSvgIcon ? (
                    <img src={IconComponent} alt={capability.title} className="w-6 h-6" />
                  ) : capability.isMaterialIcon ? (
                    <span className="material-symbols-outlined" style={{ color: '#000000', fontSize: '24px' }}>
                      {IconComponent}
                    </span>
                  ) : (
                    <IconComponent className="w-6 h-6" style={{ color: '#000000' }} />
                  )}
                </div>
              </div>

              {/* Heading */}
              <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-3 sm:mb-4 tracking-[-0.02em]">
                {capability.title}
              </h3>

              {/* Description */}
              {capability.isMultiLine ? (
                <p className="text-base sm:text-lg mb-4 sm:mb-5 leading-relaxed" style={{ color: '#64748B', fontWeight: 400 }}>
                  {capability.title === "Engineering" && (
                    <>
                      Full-cycle software development. We<br />
                      refactor legacy monoliths into scalable<br />
                      microservices, ensuring speed and<br />
                      reliability.
                    </>
                  )}
                  {capability.title === "Cloud" && (
                    <>
                      Native cloud infrastructure and DevOps<br />
                      automation. We build resilient<br />
                      environments that scale with your<br />
                      business demands.
                    </>
                  )}
                  {capability.title === "AI & Data" && (
                    <>
                      Predictive modeling and intelligent<br />
                      automation. Transforming raw data into<br />
                      actionable insights for strategic<br />
                      advantage.
                    </>
                  )}
                </p>
              ) : (
                <p className="text-base sm:text-lg mb-4 sm:mb-5 leading-relaxed" style={{ color: '#64748B', fontWeight: 400 }}>
                  {capability.description}
                </p>
              )}

              {/* Learn More Link */}
              <a 
                href="#" 
                className="inline-flex items-center gap-2 text-sm sm:text-base text-primary hover:underline transition-all duration-200 group mt-auto"
              >
                <span>Learn More</span>
                <FiArrowRight className="w-4 h-4 transition-transform duration-200" style={{ transform: 'rotate(-45deg)' }} />
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CapabilitiesSection;
