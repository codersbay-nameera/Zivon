import React from 'react';
import SentinelAiImage from '../assets/ourProducts/SentinelAi.jpg';
import NexusCoreImage from '../assets/ourProducts/NexusCore.jpg';
import QuasarDataImage from '../assets/ourProducts/QuasarData.jpg';

const OurProductsSection = () => {
  const products = [
    {
      category: "Fintech",
      title: "Sentinel AI",
      description: "Autonomous threat detection and response system for financial networks, reducing risk by 40%.",
      image: SentinelAiImage
    },
    {
      category: "Logistics",
      title: "Nexus Core",
      description: "The backbone for global supply chain transparency, providing real-time visibility across continents.",
      image: NexusCoreImage
    },
    {
      category: "Analytics",
      title: "Quasar Data",
      description: "Enterprise analytics with predictive modeling capabilities to forecast market trends.",
      image: QuasarDataImage
    },
    {
      category: "Healthcare",
      title: "MediFlow",
      description: "Integrated healthcare management system streamlining patient care, medical records, and hospital operations for improved efficiency."
    },
    {
      category: "E-commerce",
      title: "CommerceHub",
      description: "Unified e-commerce platform enabling seamless online retail experiences with advanced inventory and payment processing."
    },
    {
      category: "Education",
      title: "EduSphere",
      description: "Comprehensive learning management system connecting students, educators, and institutions with innovative digital tools."
    },
    {
      category: "Security",
      title: "CyberShield",
      description: "Enterprise-grade cybersecurity solution protecting digital assets and networks from advanced threats and vulnerabilities."
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 xl:py-16 bg-white">
      {/* Section Title with Subheading */}
      <div className="mb-8 sm:mb-12 lg:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-primary mb-3 sm:mb-4 tracking-[-0.02em]">
          Our Products
        </h2>
        <p className="text-base sm:text-lg text-secondary mb-4 sm:mb-6 leading-relaxed">
          Proprietary platforms driving global efficiency.
        </p>
      </div>

      {/* Horizontal Slider Container */}
      <div className="overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 scrollbar-hide scroll-smooth">
        <div className="flex gap-4 sm:gap-5 lg:gap-6 pb-4" style={{ minWidth: 'max-content' }}>
          {products.map((product, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-[280px] sm:w-[360px] md:w-[400px] lg:w-[448px] flex flex-col"
            >
              {/* Image Container with Category Badge */}
              <div className="relative mb-4 sm:mb-5">
                {/* Product Image */}
                {product.image ? (
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-[200px] sm:h-[240px] md:h-[280px] lg:h-[360px] object-cover"
                  />
                ) : (
                  <div 
                    className="w-full h-[200px] sm:h-[240px] md:h-[280px] lg:h-[360px]"
                    style={{ backgroundColor: '#0A0A0A' }}
                  ></div>
                )}
                {/* Category Badge at top-right */}
                <div 
                  className="absolute top-3 sm:top-4 right-3 sm:right-4 px-3 py-1 rounded text-xs sm:text-sm"
                  style={{ backgroundColor: '#FFFFFF', color: '#64748B', fontWeight: 400 }}
                >
                  {product.category}
                </div>
              </div>

              {/* Product Title */}
              <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-3 sm:mb-4 tracking-[-0.02em]">
                {product.title}
              </h3>

              {/* Product Description */}
              <p className="text-base sm:text-lg text-secondary leading-relaxed">
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProductsSection;
