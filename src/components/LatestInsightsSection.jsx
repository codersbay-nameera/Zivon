import React from 'react';
import { Link } from 'react-router-dom';

const LatestInsightsSection = () => {
  const insights = [
    {
      date: "OCT 12 2025",
      category: "TECHNOLOGY",
      title: "The Future of AI in Enterprise Solutions",
      description: "Decentralized processing redefining latency standards for global finance."
    },
    {
      date: "March 10, 2024",
      category: "Innovation",
      title: "Building Scalable Cloud Infrastructure",
      description: "Best practices for maintaining engineering culture and velocity."
    },
    {
      date: "March 5, 2024",
      category: "Strategy",
      title: "Digital Transformation Roadmap",
      description: "Why perimeter security is failing and how identity-based approaches succeed."
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 xl:py-20 bg-white">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 sm:mb-12 lg:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-primary mb-4 sm:mb-0 tracking-[-0.02em]">
          Latest Insights
        </h2>
        <Link 
          to="/insights" 
          className="inline-block px-3 py-1 rounded-full text-sm sm:text-base text-secondary hover:text-primary transition-all duration-200"
          style={{ backgroundColor: '#F5F5F5' }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#EAEAEA';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#F5F5F5';
          }}
        >
          View All Insights
        </Link>
      </div>

      {/* 3-Column Grid - Static, No Scroll */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
        {insights.map((insight, index) => (
          <div key={index} className="flex flex-col">
            {/* Blank Image Container */}
            <div className="mb-4 sm:mb-5">
              <div 
                className="w-full h-[200px] sm:h-[220px] lg:h-[240px] rounded-lg"
                style={{ backgroundColor: '#0A0A0A' }}
              ></div>
            </div>

            {/* Meta Info: Date • Category */}
            <div className="text-xs sm:text-sm text-secondary mb-3 sm:mb-4">
              {insight.date} • {insight.category}
            </div>

            {/* Article Title */}
            <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4 tracking-[-0.02em]">
              {insight.title}
            </h3>

            {/* Description */}
            <p className="text-base sm:text-lg text-secondary leading-relaxed">
              {insight.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestInsightsSection;
