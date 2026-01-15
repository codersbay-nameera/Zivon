import React from 'react';
import { FiArrowRight } from "react-icons/fi";
import { MdBusiness } from "react-icons/md";

const OurCompaniesSection = () => {
  const companies = [
    {
      icon: MdBusiness,
      category: "Enterprise Solutions",
      title: "Axon Systems",
      description: "Delivering large-scale infrastructure and mission-critical software architecture for global enterprises and government bodies."
    },
    {
      icon: 'laptop_windows',
      category: "Consumer Technology",
      title: "Nova Labs",
      description: "Creating intuitive consumer applications and smart devices that integrate seamlessly into everyday life.",
      isMaterialIcon: true
    }
  ];

  return (
    <section 
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 xl:py-20" 
      style={{ 
        background: 'linear-gradient(to bottom, #FFFFFF 0%, #F8FAFC 100%)'
      }}
    >
      {/* Section Title with Divider */}
      <div className="mb-8 sm:mb-12 lg:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-primary mb-4 sm:mb-6 tracking-[-0.02em]">
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
              className="bg-white rounded-lg p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col"
            >
              {/* Icon at top-left */}
              <div className="mb-4 sm:mb-5">
                <div 
                  className="w-10 h-10 rounded-[10px] flex items-center justify-center transition-all duration-200"
                  style={{ backgroundColor: '#F5F5F5' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#EAEAEA'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#F5F5F5'}
                >
                  {company.isMaterialIcon ? (
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
                  className="inline-block px-3 py-1 rounded-full text-xs sm:text-sm uppercase tracking-wider text-secondary transition-all duration-200"
                  style={{ backgroundColor: '#F5F5F5' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#EAEAEA'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#F5F5F5'}
                >
                  {company.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-3 sm:mb-4 tracking-[-0.02em]">
                {company.title}
              </h3>

              {/* Description */}
              <p className="text-base sm:text-lg text-secondary mb-4 sm:mb-5 leading-relaxed">
                {company.description}
              </p>

              {/* Visit Site Link */}
              <a 
                href="#" 
                className="inline-flex items-center gap-2 text-sm sm:text-base text-primary hover:underline transition-all duration-200 group mt-auto"
              >
                <span>Visit Site</span>
                <FiArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OurCompaniesSection;
