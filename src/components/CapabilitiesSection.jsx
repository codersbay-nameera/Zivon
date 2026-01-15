import React from 'react';
import { FiArrowRight } from "react-icons/fi";
import { MdEngineering } from "react-icons/md";

const CapabilitiesSection = () => {
  const capabilities = [
    {
      icon: MdEngineering,
      title: "Engineering",
      description: "Full-cycle software development. We refactor legacy monoliths into scalable microservices, ensuring speed and reliability.",
      isMultiLine: true
    },
    {
      icon: 'cloud',
      title: "Cloud",
      description: "Native cloud infrastructure and DevOps automation. We build resilient environments that scale with your business demands.",
      isMaterialIcon: true
    },
    {
      icon: 'network_intel_node',
      title: "AI & Data",
      description: "Predictive modeling and intelligent automation. Transforming raw data into actionable insights for strategic advantage.",
      isMaterialIcon: true
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 xl:py-20 bg-white">
      {/* Section Title with Divider */}
      <div className="mb-8 sm:mb-12 lg:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-primary mb-4 sm:mb-6 tracking-[-0.02em]">
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
                  className="w-10 h-10 rounded-[10px] flex items-center justify-center transition-all duration-200"
                  style={{ backgroundColor: '#F5F5F5' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#EAEAEA'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#F5F5F5'}
                >
                  {capability.isMaterialIcon ? (
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
                  Full-cycle software development.<br />
                  We refactor legacy monoliths<br />
                  into scalable microservices,<br />
                  ensuring speed and reliability.
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
                <FiArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CapabilitiesSection;
