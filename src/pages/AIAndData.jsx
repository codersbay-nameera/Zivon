import React, { useEffect } from 'react';
import { FiArrowRight } from "react-icons/fi";
import MachineLearningIcon from '../assets/MachineLearning.svg';
import BigDataIcon from '../assets/BigDataAnalytics.svg';

const AIAndData = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-full bg-white">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 xl:py-24 relative">
        {/* Top Header Area */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          {/* Eyebrow Label */}
          <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm uppercase tracking-wider mb-4 sm:mb-6">
            <div 
              style={{ 
                width: '50px', 
                borderTop: '1px solid #000000',
                height: '0'
              }}
            ></div>
            <span style={{ color: '#000000', fontWeight: 500 }}>CAPABILITIES</span>
          </div>

          {/* Main Heading */}
          <div className="mb-6 sm:mb-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[-0.02em] leading-tight mb-2">
              <span style={{ color: '#64748B', fontWeight: 600 }}>AI & Data</span>
            </h1>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[-0.02em] leading-tight" style={{ color: '#000000', fontWeight: 700 }}>
              Intelligence
            </h1>
          </div>

          {/* Description */}
          <p 
            className="text-base sm:text-lg lg:text-xl max-w-3xl leading-relaxed mb-8 sm:mb-10"
            style={{ color: '#64748B', fontWeight: 400 }}
          >
            Architecting the cognitive layer of enterprise <br></br>operations through precision engineering and <br></br>ethical intelligence.
          </p>

          {/* Divider */}
          <div className="border-t border-gray-100"></div>
        </div>

        {/* Capabilities Content Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 relative">
          {/* Full-height vertical divider - extends from horizontal divider */}
          <div 
            className="hidden lg:block absolute border-l border-gray-100"
            style={{ 
              left: 'calc(50% - 0.5rem)',
              top: '0',
              bottom: '0',
              height: '100%',
              marginTop: '-1px'
            }}
          ></div>
          {/* Left Column - Machine Learning */}
          <div className="flex flex-col lg:pr-8 xl:pr-10 2xl:pr-12">
            {/* Icon */}
            <div className="mb-4 sm:mb-6">
              <img 
                src={MachineLearningIcon}
                alt="Machine Learning"
                style={{ 
                  width: 'clamp(24px, 3vw, 32px)',
                  height: 'clamp(24px, 3vw, 32px)'
                }}
              />
            </div>

            {/* Title */}
            <h2 
              className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 tracking-[-0.02em]"
              style={{ color: '#000000' }}
            >
              Machine Learning
            </h2>

            {/* Description */}
            <p 
              className="text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed"
              style={{ color: '#64748B', fontWeight: 400 }}
            >
              We deploy proprietary neural architectures designed for high-stakes environments. From predictive maintenance to natural language understanding, our models are built for accuracy and explainability.
            </p>

            {/* Bullet List */}
            <ul className="space-y-2 sm:space-y-3 list-none">
              <li 
                className="text-base sm:text-lg"
                style={{ color: '#000000', fontWeight: 500 }}
              >
                Neural Network Architecture
              </li>
              <li 
                className="text-base sm:text-lg"
                style={{ color: '#000000', fontWeight: 500 }}
              >
                Automated Decision Systems
              </li>
              <li 
                className="text-base sm:text-lg"
                style={{ color: '#000000', fontWeight: 500 }}
              >
                Explainable AI (XAI) Frameworks
              </li>
            </ul>
          </div>

          {/* Right Column - Big Data Analytics */}
          <div className="flex flex-col lg:pl-8 xl:pl-10 2xl:pl-12">
            {/* Icon */}
            <div className="mb-4 sm:mb-6">
              <img 
                src={BigDataIcon}
                alt="Big Data Analytics"
                style={{ 
                  width: 'clamp(24px, 3vw, 32px)',
                  height: 'clamp(24px, 3vw, 32px)'
                }}
              />
            </div>

            {/* Title */}
            <h2 
              className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 tracking-[-0.02em]"
              style={{ color: '#000000' }}
            >
              Big Data Analytics
            </h2>

            {/* Description */}
            <p 
              className="text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed"
              style={{ color: '#64748B', fontWeight: 400 }}
            >
              Transforming petabyte-scale raw information into actionable strategic assets. Our data lakes and streaming pipelines ensure up-to-date insights for real-time decision-making.
            </p>

            {/* Bullet List */}
            <ul className="space-y-2 sm:space-y-3 list-none">
              <li 
                className="text-base sm:text-lg"
                style={{ color: '#000000', fontWeight: 500 }}
              >
                Real-time Pipeline Engineering
              </li>
              <li 
                className="text-base sm:text-lg"
                style={{ color: '#000000', fontWeight: 500 }}
              >
                Data Lakehouse Implementation
              </li>
              <li 
                className="text-base sm:text-lg"
                style={{ color: '#000000', fontWeight: 500 }}
              >
                Predictive Market Modeling
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Success Metrics Section */}
      <section className="w-full bg-white pt-6 sm:pt-8 lg:pt-10 xl:pt-12 pb-12 sm:pb-16 lg:pb-20 xl:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <h2 
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-12 sm:mb-16 lg:mb-20 tracking-[-0.02em]"
            style={{ color: '#000000' }}
          >
            Success Metrics
          </h2>

          {/* Metrics Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {[
              {
                value: "99.9%",
                label: "Model Accurate"
              },
              {
                value: "400PB+",
                label: "DATA Processed"
              },
              {
                value: "12ms",
                label: "Avg. Latency"
              },
              {
                value: "35%",
                label: "Ops Cost Reduction"
              }
            ].map((metric, index) => (
              <div
                key={index}
                className="rounded-lg border p-4 sm:p-5 bg-white"
                style={{ borderColor: '#E2E8F0' }}
              >
                {/* Metric Value */}
                <div 
                  className="font-bold mb-2 sm:mb-3"
                  style={{ color: '#000000', fontSize: 'clamp(20px, 3vw, 30px)' }}
                >
                  {metric.value}
                </div>
                {/* Metric Label */}
                <div 
                  className="text-xs sm:text-sm md:text-base font-medium"
                  style={{ color: '#64748B' }}
                >
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dark CTA Section */}
      <section className="w-full py-12 sm:py-16 lg:py-20 xl:py-24" style={{ backgroundColor: '#020617' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Headline */}
          <h2 
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 sm:mb-10 lg:mb-12 tracking-[-0.02em]"
            style={{ color: '#FFFFFF' }}
          >
            Ready to architect your<br />
           intelligence?
          </h2>

          {/* CTA Button */}
          <button
            className="w-full py-4 sm:py-5 px-6 sm:px-8 font-medium text-sm sm:text-base md:text-lg rounded-lg transition-all duration-200 flex items-center justify-center gap-3 group"
            style={{ 
              backgroundColor: '#FFFFFF',
              color: '#000000'
            }}
          >
            <span className="group-hover:underline">Consult with an Expert</span>
            <FiArrowRight 
              className="w-5 h-5 transition-all duration-200 opacity-0 group-hover:opacity-100" 
              style={{ transform: 'rotate(-45deg)' }}
            />
          </button>
        </div>
      </section>
    </main>
  );
};

export default AIAndData;
