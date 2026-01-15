import React from 'react';
import { Link } from 'react-router-dom';
import TheFutureImage from '../assets/latesInsight/TheFuture.jpg';
import ScalingTeamImage from '../assets/latesInsight/ScalingTeam.jpg';
import ZeroTrustImage from '../assets/latesInsight/ZeroTrust.jpg';

const LatestInsightsSection = () => {
  const insights = [
    {
      date: "OCT 12 2025",
      category: "TECHNOLOGY",
      title: "The Future of Edge Computing in Enterprise",
      description: "Decentralized processing redefining latency standards for global finance.",
      image: TheFutureImage
    },
    {
      date: "OCT 12 2025",
      category: "TECHNOLOGY",
      title: "Scaling Teams in a Remote-First Era",
      description: "Best practices for maintaining engineering culture and velocity.",
      image: ScalingTeamImage
    },
    {
      date: "OCT 12 2025",
      category: "TECHNOLOGY",
      title: "Zero Trust Architecture Explained",
      description: "Why perimeter security is failing and how identity-based approaches succeed.",
      image: ZeroTrustImage
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 xl:py-16 bg-white">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 sm:mb-12 lg:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-primary mb-4 sm:mb-0 tracking-[-0.02em]">
          Latest Insights
        </h2>
        <Link 
          to="/insights" 
          className="inline-block text-sm sm:text-base text-secondary hover:text-primary transition-all duration-200 font-medium"
        >
          View All Insights
        </Link>
      </div>

      {/* 3-Column Grid - Static, No Scroll */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
        {insights.map((insight, index) => (
          <div key={index} className="flex flex-col">
            {/* Image Container */}
            <div className="mb-4 sm:mb-5">
              {insight.image ? (
                <img 
                  src={insight.image} 
                  alt={insight.title}
                  className="w-full h-[200px] sm:h-[220px] lg:h-[240px] object-cover"
                />
              ) : (
                <div 
                  className="w-full h-[200px] sm:h-[220px] lg:h-[240px] rounded-lg"
                  style={{ backgroundColor: '#0A0A0A' }}
                ></div>
              )}
            </div>

            {/* Meta Info: Date • Category */}
            <div className="mb-3 sm:mb-4" style={{ color: '#64748B', fontWeight: 500, fontSize: 'clamp(12px, 3vw, 16px)' }}>
              {insight.date} • {insight.category}
            </div>

            {/* Article Title */}
            <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4 tracking-[-0.02em]">
              {insight.title}
            </h3>

            {/* Description */}
            <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#64748B', fontWeight: 400 }}>
              {insight.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestInsightsSection;
