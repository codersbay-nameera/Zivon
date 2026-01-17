import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowRight } from "react-icons/fi";
import DraftingCompassIcon from '../assets/drafting-compass.svg';
import CloudIcon from '../assets/cloud.svg';
import BrainCircuitIcon from '../assets/brain-circuit.svg';

const CapabilitiesSection = () => {
  const navigate = useNavigate();

  const handleLinkClick = (e, href) => {
    // Allow default behavior for Ctrl+Click, Middle-click, or Right-click (new tab)
    if (e.ctrlKey || e.metaKey || e.button === 1 || e.button === 2) {
      return;
    }
    // Prevent default for normal clicks and use React Router navigation
    e.preventDefault();
    navigate(href);
  };
  const capabilities = [
    {
      icon: DraftingCompassIcon,
      title: "Engineering",
      description: "Full-cycle software development. We refactor legacy monoliths into scalable microservices, ensuring speed and reliability.",
      isMultiLine: true,
      isSvgIcon: true,
      link: "/engineering"
    },
    {
      icon: CloudIcon,
      title: "Cloud",
      description: "Native cloud infrastructure and DevOps automation. We build resilient environments that scale with your business demands.",
      isMultiLine: true,
      isSvgIcon: true,
      link: "/cloud"
    },
    {
      icon: BrainCircuitIcon,
      title: "AI & Data",
      description: "Predictive modeling and intelligent automation. Transforming raw data into actionable insights for strategic advantage.",
      isMultiLine: true,
      isSvgIcon: true,
      link: "/ai-and-data"
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
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#F1F5F9' }}
                >
                  {capability.isSvgIcon ? (
                    <img 
                      src={IconComponent} 
                      alt={capability.title} 
                      className={capability.title === "AI & Data" ? "w-10 h-10 object-contain" : "w-6 h-6 object-contain"} 
                    />
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
                href={capability.link}
                onClick={(e) => handleLinkClick(e, capability.link)}
                className="inline-flex items-center gap-2 text-sm sm:text-base text-primary hover:underline transition-all duration-200 mt-auto group"
              >
                <span>Learn More</span>
                <FiArrowRight className="w-4 h-4 transition-all duration-200 opacity-0 group-hover:opacity-100" style={{ transform: 'rotate(-45deg)' }} />
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CapabilitiesSection;
