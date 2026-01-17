import React, { useEffect } from 'react';
import { FiArrowRight } from "react-icons/fi";
import CloudBanner from '../assets/CloudBanner.png';
import CloudDevelopment from '../assets/cloud/Cloud Development.svg';
import GitHub from '../assets/cloud/GitHub.svg';
import Icon3 from '../assets/cloud/3.svg';
import Icon4 from '../assets/cloud/4.svg';

const Cloud = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-full bg-white">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 xl:py-24">
        {/* Eyebrow Label */}
        <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm uppercase tracking-wider mb-4 sm:mb-6">
          <div 
            style={{ 
              width: '50px', 
              borderTop: '1px solid #000000',
              height: '0'
            }}
          ></div>
          <span style={{ color: '#000000', fontWeight: 400 }}>ENTERPRISE INFRASTRUCTURE</span>
        </div>

        {/* Main Heading */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[-0.02em] leading-tight">
            <span style={{ color: '#000000', fontWeight: 600 }}>Enterprise </span>
            <span style={{ color: '#94A3B8', fontWeight: 600 }}>Cloud &</span>
            <br />
            <span style={{ color: '#94A3B8', fontWeight: 600 }}>Infrastructure </span>
            <span style={{ color: '#000000', fontWeight: 600 }}>Services</span>
          </h1>
        </div>

        {/* Description Text */}
        <p 
          className="text-base sm:text-lg lg:text-xl max-w-3xl mb-8 sm:mb-10 lg:mb-12 leading-relaxed"
          style={{ color: '#64748B', fontWeight: 400 }}
        >
          Propelling enterprise scale through resilient<br></br> architecture, automated operations, and zero-trust <br></br>security governance.
        </p>

        {/* Image */}
        <div 
          className="w-full rounded-lg overflow-hidden"
          style={{ 
            height: 'clamp(250px, 40vh, 400px)',
            borderRadius: '16px'
          }}
        >
          <img 
            src={CloudBanner} 
            alt="Cloud Infrastructure" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-0 sm:pt-2 lg:pt-4 xl:pt-6 pb-12 sm:pb-16 lg:pb-20 xl:pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {[
              {
                index: "01",
                title: "Cloud Transformation",
                icon: CloudDevelopment,
                description: "Migration & strategy accelerated through fit-for-purpose discovery, planning, and execution frameworks.",
                features: ["Cloud Readiness Assessment", "Legacy Decommissioning"]
              },
              {
                index: "02",
                title: "Managed DevOps & SRE",
                icon: GitHub,
                description: "CI/CD, Kubernetes, and observability engineering culture focused on automation, site reliability, and 24/7 visibility.",
                features: ["GitOps Pipelines", "Service Mesh & K8s"]
              },
              {
                index: "03",
                title: "Cybersecurity & Compliance",
                icon: Icon3,
                description: "Zero Trust cloud governance. Securing the perimeter and the core through automated policy enforcement and encryption.",
                features: ["IAM & Least Privilege", "SOC / ISO Alignment"]
              },
              {
                index: "04",
                title: "Hybrid & Multi-Cloud",
                icon: Icon4,
                description: "Architecture distributed across first- and third-party cloud providers and on-premises assets with unified control planes.",
                features: ["Inter-Cloud Networking", "Data Portability"]
              }
            ].map((service, index) => (
              <div
                key={index}
                className={`relative p-6 sm:p-8 md:p-10 lg:p-12 ${
                  index % 2 === 0 ? 'md:border-r md:border-gray-200' : ''
                } ${
                  index < 2 ? 'border-b border-gray-200' : ''
                }`}
                style={{
                  borderColor: '#E2E8F0'
                }}
              >
                {/* Icon */}
                <div
                  className="mb-4 sm:mb-6 md:mb-8"
                  style={{ width: '24px', height: '24px' }}
                >
                  <img 
                    src={service.icon} 
                    alt={service.title}
                    style={{
                      width: '24px',
                      height: '24px',
                      objectFit: 'contain'
                    }}
                  />
                </div>

                {/* Title */}
                <h2
                  className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 sm:mb-4 md:mb-6 tracking-[-0.02em]"
                  style={{ color: '#000000' }}
                >
                  {service.title === "Cloud Transformation" && (
                    <>
                      Cloud<br />
                      Transformation
                    </>
                  )}
                  {service.title === "Managed DevOps & SRE" && (
                    <>
                      Managed<br />
                      DevOps & SRE
                    </>
                  )}
                  {service.title === "Cybersecurity & Compliance" && (
                    <>
                      Cybersecurity<br />
                      & Compliance
                    </>
                  )}
                  {service.title === "Hybrid & Multi-Cloud" && (
                    <>
                      Hybrid &<br />
                      Multi-Cloud
                    </>
                  )}
                </h2>

                {/* Description */}
                <p
                  className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 md:mb-8 leading-relaxed max-w-lg"
                  style={{ color: '#64748B', fontWeight: 400 }}
                >
                  {service.description}
                </p>

                {/* Feature List */}
                <div 
                  className="border"
                  style={{ 
                    borderColor: '#E2E8F0',
                    borderWidth: '1px',
                    borderRadius: '16px',
                    backgroundColor: 'transparent',
                    width: '347px',
                    minHeight: '112px',
                    maxWidth: '100%',
                    padding: '24px'
                  }}
                >
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3"
                      style={{ marginBottom: idx === service.features.length - 1 ? '0' : '4px' }}
                    >
                      {/* Number */}
                      <span 
                        className="text-sm sm:text-base md:text-lg font-medium"
                        style={{ color: '#64748B', fontWeight: 500 }}
                      >
                        {idx + 1}.
                      </span>
                      {/* Feature Text */}
                      <span 
                        className="text-sm sm:text-base md:text-lg font-medium"
                        style={{ color: '#64748B', fontWeight: 500 }}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Benefits Section */}
      <section className="w-full py-12 sm:py-16 lg:py-20 xl:py-24" style={{ backgroundColor: '#020617' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-12 sm:mb-16 lg:mb-20 tracking-[-0.02em]"
            style={{ color: '#FFFFFF', fontWeight: 600 }}
          >
            Core Benefits
          </h2>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
            {[
              {
                index: "01",
                title: "Scalability",
                description: "Elastic infrastructure that expands dynamically with demand without manual intervention or performance degradation."
              },
              {
                index: "02",
                title: "Resilience",
                description: "Built-in fault tolerance and automated disaster recovery protocols ensuring maximum uptime for mission-critical applications."
              },
              {
                index: "03",
                title: "Security Compliance",
                description: "Continuous audit-readiness through automated governance that maps technical controls to global regulatory standards."
              }
            ].map((benefit, index) => (
              <div key={index} className="flex flex-col">
                {/* Index Number */}
                <div 
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 italic"
                  style={{ color: '#475569', fontWeight: 600 }}
                >
                  {benefit.index}
                </div>

                {/* Title */}
                <h3 
                  className="text-xl sm:text-2xl lg:text-3xl mb-4 sm:mb-6 tracking-[-0.02em]"
                  style={{ color: '#FFFFFF', fontWeight: 600 }}
                >
                  {benefit.title}
                </h3>

                {/* Description */}
                <p 
                  className="text-base sm:text-lg leading-relaxed"
                  style={{ color: '#94A3B8', fontWeight: 400 }}
                >
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Advisory CTA Section */}
      <section className="w-full pt-4 sm:pt-6 lg:pt-8 xl:pt-10 pb-12 sm:pb-16 lg:pb-20 xl:pb-24" style={{ backgroundColor: '#020617' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="max-w-6xl mx-auto rounded-lg p-8 sm:p-10 lg:p-12"
            style={{ backgroundColor: '#F8FAFC' }}
          >
            {/* Title */}
            <h2 
              className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 tracking-[-0.02em]"
              style={{ color: '#000000' }}
            >
              Strategic Advisory
            </h2>

            {/* Description */}
            <p 
              className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 leading-relaxed"
              style={{ color: '#64748B', fontWeight: 400 }}
            >
              Unlock the full potential of enterprise cloud through a<br></br> dedicated technical consultation.
            </p>

            {/* CTA Button */}
            <button
              className="w-full flex items-center justify-center gap-3 py-4 sm:py-5 font-semibold text-base sm:text-lg transition-all duration-200 group"
              style={{ 
                backgroundColor: '#020617',
                color: '#FFFFFF',
                borderRadius: '8px'
              }}
            >
              <span>Consult with Our Solutions Architects</span>
              <FiArrowRight 
                className="w-5 h-5 transition-all duration-200 opacity-0 group-hover:opacity-100" 
                style={{ transform: 'rotate(-45deg)' }}
              />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Cloud;
