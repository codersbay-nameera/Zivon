import React from 'react';
import { FiArrowRight } from "react-icons/fi";
import BuildingIcon from '../assets/building.svg';
import LaptopIcon from '../assets/laptop.svg';

const OurCompaniesSection = () => {
  const companies = [
    {
      icon: BuildingIcon,
      category: "Enterprise Solutions",
      title: "Axon Systems",
      description: "Delivering large-scale infrastructure and mission-critical software architecture for global enterprises and government bodies.",
      isSvgIcon: true
    },
    {
      icon: LaptopIcon,
      category: "Consumer Technology",
      title: "Nova Labs",
      description: "Creating intuitive consumer applications and smart devices that integrate seamlessly into everyday life.",
      isSvgIcon: true
    }
  ];

  return (
    <section 
      className="w-full py-6 sm:py-8 lg:py-12 xl:py-16" 
      style={{ 
        backgroundColor: '#F8FAFC'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title with Divider */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-primary mb-4 sm:mb-6 tracking-[-0.02em]">
            Our Companies
          </h2>
          <div className="border-t border-gray-100"></div>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
        {companies.map((company, index) => {
          const IconComponent = company.icon;
          return (
            <div 
              key={index} 
              className="bg-white rounded-lg p-6 sm:p-8 shadow-sm flex flex-col"
            >
              {/* Icon at top-left */}
              <div className="mb-4 sm:mb-5">
                <div 
                  className="w-10 h-10 flex items-center justify-center"
                  style={{ backgroundColor: '#F1F5F9' }}
                >
                  {company.isSvgIcon ? (
                    <img src={IconComponent} alt={company.title} className="w-6 h-6" />
                  ) : company.isMaterialIcon ? (
                    <span className="material-symbols-outlined" style={{ color: '#000000', fontSize: '24px' }}>
                      {IconComponent}
                    </span>
                  ) : (
                    <IconComponent className="w-6 h-6" style={{ color: '#000000' }} />
                  )}
                </div>
              </div>

              {/* Category Badge */}
              <div className="mb-3 sm:mb-4">
                <span 
                  className="inline-block px-3 py-1 rounded-full text-xs sm:text-sm tracking-wider"
                  style={{ backgroundColor: '#F1F5F9', color: '#000000' }}
                >
                  {company.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-3 sm:mb-4 tracking-[-0.02em]">
                {company.title}
              </h3>

              {/* Description */}
              <p className="text-base sm:text-lg mb-4 sm:mb-5 leading-relaxed" style={{ color: '#64748B', fontWeight: 400 }}>
                {company.description}
              </p>

              {/* Visit Site Link */}
              <a 
                href="#" 
                className="inline-flex items-center gap-2 text-sm sm:text-base text-primary hover:underline transition-all duration-200 mt-auto group"
              >
                <span>Visit Site</span>
                <FiArrowRight className="w-4 h-4 transition-all duration-200 opacity-0 group-hover:opacity-100" style={{ transform: 'rotate(-45deg)' }} />
              </a>
            </div>
          );
        })}
        </div>
      </div>
    </section>
  );
};

export default OurCompaniesSection;
