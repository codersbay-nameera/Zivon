import React, { useEffect, useState } from 'react';
import { FiArrowRight } from "react-icons/fi";
import MachineLearningIcon from '../assets/MachineLearning.svg';
import BigDataIcon from '../assets/BigDataAnalytics.svg';
import ConsultationModal from '../components/ConsultationModal';

const AIAndData = () => {
  const [showConsultationModal, setShowConsultationModal] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  const handleConsultationSubmit = (data) => {
    console.log('Consultation submitted:', data);
    // Handle submission logic here
  };

  return (
    <main className="w-full bg-white">
      <section className="mx-auto py-12 sm:py-16 lg:py-20 xl:py-24 relative" style={{ maxWidth: '1440px', width: '100%', paddingLeft: 'clamp(16px, 4vw, 60px)', paddingRight: 'clamp(16px, 4vw, 60px)' }}>
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
              <span style={{ color: '#94A3B8', fontWeight: 600 }}>AI & Data</span>
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 relative items-start">
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
                  width: '24px',
                  height: '24px'
                }}
              />
            </div>

            {/* Title */}
            <h2 
              className="font-bold mb-4 sm:mb-6 tracking-[-0.02em]"
              style={{ color: '#000000', fontSize: '30px' }}
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

            {/* Feature List Box */}
            <div 
              className="border"
              style={{ 
                width: '374px',
                height: '148px',
                padding: '24px',
                borderRadius: '16px',
                borderWidth: '1px',
                borderColor: '#E2E8F0',
                backgroundColor: 'transparent',
                maxWidth: '100%'
              }}
            >
              {[
                'Neural Network Architecture',
                'Automated Decision Systems',
                'Explainable AI (XAI) Frameworks'
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 sm:gap-3"
                  style={{ marginBottom: idx === 2 ? '0' : '4px', whiteSpace: 'nowrap' }}
                >
                  {/* Number */}
                  <span 
                    className="font-medium"
                    style={{ color: '#64748B', fontWeight: 500, fontSize: '18px', lineHeight: '28px' }}
                  >
                    {idx + 1}.
                  </span>
                  {/* Feature Text */}
                  <span 
                    className="font-medium"
                    style={{ color: '#64748B', fontWeight: 500, fontSize: '18px', lineHeight: '28px' }}
                  >
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Big Data Analytics */}
          <div className="flex flex-col lg:pl-8 xl:pl-10 2xl:pl-12">
            {/* Icon */}
            <div className="mb-4 sm:mb-6">
              <img 
                src={BigDataIcon}
                alt="Big Data Analytics"
                style={{ 
                  width: '24px',
                  height: '24px'
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

            {/* Feature List Box */}
            <div 
              className="border"
              style={{ 
                width: '374px',
                height: '148px',
                padding: '24px',
                borderRadius: '16px',
                borderWidth: '1px',
                borderColor: '#E2E8F0',
                backgroundColor: 'transparent',
                maxWidth: '100%'
              }}
            >
              {[
                'Real-time Pipeline Engineering',
                'Data Lakehouse Implementation',
                'Predictive Market Modeling'
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 sm:gap-3"
                  style={{ marginBottom: idx === 2 ? '0' : '4px', whiteSpace: 'nowrap' }}
                >
                  {/* Number */}
                  <span 
                    className="font-medium"
                    style={{ color: '#64748B', fontWeight: 500, fontSize: '18px', lineHeight: '28px' }}
                  >
                    {idx + 1}.
                  </span>
                  {/* Feature Text */}
                  <span 
                    className="font-medium"
                    style={{ color: '#64748B', fontWeight: 500, fontSize: '18px', lineHeight: '28px' }}
                  >
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics Section */}
      <section className="w-full bg-white pt-6 sm:pt-8 lg:pt-10 xl:pt-12 pb-12 sm:pb-16 lg:pb-20 xl:pb-24">
        <div className="mx-auto" style={{ maxWidth: '1440px', width: '100%', paddingLeft: 'clamp(16px, 4vw, 60px)', paddingRight: 'clamp(16px, 4vw, 60px)' }}>
          {/* Section Heading */}
          <h2 
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-12 sm:mb-16 lg:mb-20 tracking-[-0.02em]"
            style={{ color: '#000000' }}
          >
            Success Metrics
          </h2>

          {/* Metrics Cards */}
          <div className="flex flex-col md:flex-row" style={{ gap: 0, margin: 0, padding: 0, width: '100%' }}>
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
            ].map((metric, index) => {
              const isFirst = index === 0;
              const isLast = index === 3;
              
              return (
              <div
                key={index}
                className="bg-white"
                style={{ 
                  flex: (isFirst || isLast) ? '0.75' : '1',
                  height: '144px',
                  padding: '32px',
                  borderRadius: '16px',
                  borderTop: '1px solid #E2E8F0',
                  borderBottom: '1px solid #E2E8F0',
                  borderLeft: isFirst ? '1px solid #E2E8F0' : 'none',
                  borderRight: '1px solid #E2E8F0',
                  margin: 0,
                  width: '100%'
                }}
              >
                {/* Metric Value */}
                <div 
                  className="font-bold mb-2 sm:mb-3"
                  style={{ color: '#000000', fontSize: '24px' }}
                >
                  {metric.value}
                </div>
                {/* Metric Label */}
                <div 
                  className="font-medium"
                  style={{ color: '#64748B', fontSize: '18px' }}
                >
                  {metric.label}
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dark CTA Section */}
      <section className="w-full py-12 sm:py-16 lg:py-20 xl:py-24" style={{ backgroundColor: '#020617' }}>
        <div className="mx-auto" style={{ maxWidth: '1440px', width: '100%', paddingLeft: 'clamp(16px, 4vw, 60px)', paddingRight: 'clamp(16px, 4vw, 60px)' }}>
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
            onClick={() => setShowConsultationModal(true)}
            className="w-full py-4 sm:py-5 px-6 sm:px-8 font-medium text-sm sm:text-base md:text-lg transition-all duration-200 flex items-center justify-center gap-3 group"
            style={{ 
              backgroundColor: '#FFFFFF',
              color: '#000000',
              borderRadius: '0',
              border: 'none',
              cursor: 'pointer'
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

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={showConsultationModal}
        onClose={() => setShowConsultationModal(false)}
        onSubmit={handleConsultationSubmit}
      />
    </main>
  );
};

export default AIAndData;
