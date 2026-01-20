import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from "react-icons/fi";
import CompanyBanner from '../assets/CompanyBanner.jpg';
import PeopleIcon from '../assets/Company/People.svg';
import EarthPlanetIcon from '../assets/Company/Earth Planet.svg';
import ProductIcon from '../assets/Company/Product.svg';
import RocketIcon from '../assets/Company/rocket.svg';
import EyeIcon from '../assets/Company/Eye.svg';
import SettingsIcon from '../assets/Company/Settings.svg';
import CompassIcon from '../assets/Company/Compass.svg';
import EmailSendIcon from '../assets/Email Send.svg';

const Company = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <main className="w-full bg-white">
      {/* Hero Banner Section */}
      <section 
        className="relative mx-auto"
        style={{ 
          width: '1440px',
          height: '596px',
          paddingTop: '49px',
          paddingRight: '60px',
          paddingBottom: '49px',
          paddingLeft: '60px',
          gap: '10px',
          maxWidth: '100%'
        }}
      >
        {/* Background Image */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(${CompanyBanner})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(100%)'
          }}
        >
          {/* Gradient Overlay */}
          <div 
            className="absolute inset-0 w-full h-full"
            style={{
              background: 'linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.2) 100%)'
            }}
          ></div>
        </div>

        {/* Hero Content - Bottom Left */}
        <div className="relative h-full flex items-end">
          <div className="w-full">
            <h1 
              className="font-bold leading-tight"
              style={{ 
                color: '#FFFFFF', 
                fontSize: 'clamp(28px, 6vw, 72px)', 
                fontWeight: 700
              }}
            >
              <span style={{ whiteSpace: 'nowrap' }}>Building the Future of</span><br />
              Software
            </h1>
          </div>
        </div>
      </section>

      {/* Content Area Section */}
      <section className="w-full bg-white pt-6 sm:pt-8 lg:pt-10 xl:pt-12 pb-12 sm:pb-16 lg:pb-20 xl:pb-24">
        <div className="mx-auto" style={{ maxWidth: '1440px', width: '100%', paddingLeft: 'clamp(16px, 4vw, 60px)', paddingRight: 'clamp(16px, 4vw, 60px)' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16">
            {/* LEFT COLUMN - Our Philosophy */}
            <div className="flex flex-col mt-6 sm:mt-8 lg:mt-10">
              {/* Heading */}
              <h2 
                className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-10 lg:mb-12"
                style={{ color: '#000000' }}
              >
                Our Philosophy
              </h2>
              {/* Underline */}
              <div 
                className="mb-6 sm:mb-8"
                style={{
                  width: '51px',
                  height: '6px',
                  backgroundColor: '#000000'
                }}
              ></div>
              
              {/* Body Text */}
              <p 
                className="leading-relaxed"
                style={{ 
                  color: '#64748B', 
                  fontWeight: 400, 
                  whiteSpace: 'pre-line',
                  fontSize: '18px',
                  lineHeight: '1.6'
                }}
              >
                We believe in technology that empowers humanity. Our{'\n'}
                mission is to create tools that are intuitive, powerful,{'\n'}
                and accessible to everyone, everywhere. We don't just write{'\n'}
                code; we craft experiences that bridge the gap between{'\n'}
                complex problems and simple solutions.
              </p>
            </div>

            {/* RIGHT COLUMN - Our Journey */}
            <div className="flex flex-col mt-6 sm:mt-8 lg:mt-10">
              {/* Heading */}
              <h2 
                className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-10 lg:mb-12"
                style={{ color: '#000000' }}
              >
                Our Journey
              </h2>

              {/* Timeline - Mobile: Vertical with dots, Desktop: 2-column grid */}
              <div className="relative w-full">
                {/* Vertical Timeline Line - Mobile only */}
                <div 
                  className="absolute left-0 top-0 bottom-0 md:hidden z-0"
                  style={{
                    width: '2px',
                    backgroundColor: '#E2E8F0',
                    left: '8px',
                    top: 'clamp(20px, 3vw, 40px)',
                    height: 'calc(100% - clamp(20px, 3vw, 40px))',
                    marginLeft: '-1px'
                  }}
                ></div>

                {/* Mobile: Vertical Timeline */}
                <div className="md:hidden space-y-8">
                  {[
                    { year: '2010', title: 'Founded in San Francisco', description: 'Started in a garage with a vision to simplify cloud computing for small businesses.' },
                    { year: '2015', title: 'Reached 1 Million Users', description: 'Our flagship product became the industry standard, serving users across 5 continents.' },
                    { year: '2023', title: 'Global IPO', description: 'Listed on the NYSE, marking a new chapter of innovation and global expansion.' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4 relative">
                      {/* Timeline Dot */}
                      <div className="flex-shrink-0 relative z-10">
                        <div 
                          className="rounded-full"
                          style={{
                            width: '16px',
                            height: '16px',
                            backgroundColor: '#FFFFFF',
                            border: '2px solid #E2E8F0',
                            boxShadow: '0 0 0 2px #FFFFFF'
                          }}
                        ></div>
                      </div>
                      {/* Content */}
                      <div className="flex-1">
                        <div 
                          className="mb-2"
                          style={{ color: '#000000', fontWeight: 500, fontSize: '14px' }}
                        >
                          {item.year}
                        </div>
                        <h3 
                          className="text-lg font-bold mb-2"
                          style={{ color: '#000000' }}
                        >
                          {item.title}
                        </h3>
                        <p 
                          className="text-base leading-relaxed"
                          style={{ color: '#64748B', fontWeight: 400 }}
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Desktop: 2-column grid */}
                <div className="hidden md:grid md:grid-cols-2 gap-6 sm:gap-8">
                  {/* Timeline Items 1 & 3 - Left Column (Stacked) */}
                  <div className="space-y-6 sm:space-y-8">
                    {/* Timeline Item 1 */}
                    <div>
                      <div 
                        className="mb-2"
                        style={{ color: '#000000', fontWeight: 500, fontSize: '14px' }}
                      >
                        2010
                      </div>
                      <h3 
                        className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3"
                        style={{ color: '#000000' }}
                      >
                        Founded in San Francisco
                      </h3>
                      <p 
                        className="text-base sm:text-lg leading-relaxed"
                        style={{ color: '#64748B', fontWeight: 400 }}
                      >
                        Started in a garage with a vision to simplify cloud computing for small businesses.
                      </p>
                    </div>

                    {/* Timeline Item 3 */}
                    <div>
                      <div 
                        className="mb-2"
                        style={{ color: '#000000', fontWeight: 500, fontSize: '14px' }}
                      >
                        2023
                      </div>
                      <h3 
                        className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3"
                        style={{ color: '#000000' }}
                      >
                        Global IPO
                      </h3>
                      <p 
                        className="text-base sm:text-lg leading-relaxed"
                        style={{ color: '#64748B', fontWeight: 400 }}
                      >
                        Listed on the NYSE, marking a new chapter of innovation and global expansion.
                      </p>
                    </div>
                  </div>

                  {/* Timeline Item 2 - Right Column */}
                  <div>
                    <div 
                      className="mb-2"
                      style={{ color: '#000000', fontWeight: 500, fontSize: '14px' }}
                    >
                      2015
                    </div>
                    <h3 
                      className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3"
                      style={{ color: '#000000' }}
                    >
                      Reached 1 Million Users
                    </h3>
                    <p 
                      className="text-base sm:text-lg leading-relaxed"
                      style={{ color: '#64748B', fontWeight: 400 }}
                    >
                      Our flagship product became the industry standard, serving users across 5 continents.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact Section */}
      <section className="w-full pt-6 sm:pt-8 lg:pt-10 xl:pt-12 pb-12 sm:pb-16 lg:pb-20 xl:pb-24" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="mx-auto" style={{ maxWidth: '1440px', width: '100%', paddingLeft: 'clamp(16px, 4vw, 60px)', paddingRight: 'clamp(16px, 4vw, 60px)' }}>
          {/* Section Title */}
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6 lg:mb-8"
            style={{ color: '#000000', fontWeight: 600 }}
          >
            Our Impact
          </h2>

          {/* Stats Cards Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4" style={{ gap: 'clamp(12px, 2vw, 24px)' }}>
            {[
              {
                icon: PeopleIcon,
                value: '1.2k+',
                label: 'EMPLOYEES'
              },
              {
                icon: EarthPlanetIcon,
                value: '15',
                label: 'COUNTRIES'
              },
              {
                icon: ProductIcon,
                value: '45',
                label: 'PRODUCTS'
              },
              {
                icon: RocketIcon,
                value: '50M+',
                label: 'ACTIVE USER'
              }
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white border relative"
                style={{
                  width: '100%',
                  height: 'clamp(160px, 25vh, 192px)',
                  padding: 'clamp(20px, 3vw, 32px)',
                  borderRadius: '16px',
                  borderWidth: '1px',
                  borderColor: '#E2E8F0'
                }}
              >
                {/* Icon - Top Left */}
                <div className="mb-3 sm:mb-4" style={{ width: '24px', height: '24px' }}>
                  <img 
                    src={stat.icon} 
                    alt={stat.label}
                    style={{
                      width: '24px',
                      height: '24px',
                      objectFit: 'contain'
                    }}
                  />
                </div>

                {/* Large Number */}
                <div 
                  className="mb-2 sm:mb-3"
                  style={{ 
                    color: '#000000',
                    fontSize: '24px',
                    fontWeight: 600
                  }}
                >
                  {stat.value}
                </div>

                {/* Label */}
                <div 
                  className="uppercase tracking-wider"
                  style={{ 
                    color: '#475569', 
                    fontSize: '18px',
                    fontWeight: 500
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="w-full bg-white pt-6 sm:pt-8 lg:pt-10 xl:pt-12 pb-12 sm:pb-16 lg:pb-20 xl:pb-24">
        <div className="mx-auto" style={{ maxWidth: '1440px', width: '100%', paddingLeft: 'clamp(16px, 4vw, 60px)', paddingRight: 'clamp(16px, 4vw, 60px)' }}>
          {/* Section Title */}
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6 lg:mb-8"
            style={{ color: '#000000', fontWeight: 600 }}
          >
            Core Values
          </h2>

          {/* Core Values Grid - Scrollable on mobile */}
          <div 
            className="lg:hidden overflow-x-auto"
            style={{ 
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              overflowY: 'hidden',
              marginLeft: 'clamp(-16px, -4vw, -60px)',
              marginRight: 'clamp(-16px, -4vw, -60px)',
              paddingLeft: 'clamp(16px, 4vw, 60px)',
              paddingRight: 'clamp(16px, 4vw, 60px)'
            }}
          >
            <style>{`
              .overflow-x-auto::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            <div 
              className="flex"
              style={{ 
                gap: 'clamp(16px, 2vw, 32px)',
                width: 'max-content',
                paddingBottom: '8px'
              }}
            >
            {[
              {
                icon: PeopleIcon,
                title: 'User First',
                description: 'Every line of code starts with empathy. We solve real problems for real people.'
              },
              {
                icon: EyeIcon,
                title: 'Transparency',
                description: 'We share context, decisions, and outcomes openly with our teams and the community.'
              },
              {
                icon: SettingsIcon,
                title: 'Excellence',
                description: 'We hold ourselves to the highest technical standards.'
              },
              {
                icon: CompassIcon,
                title: 'Ownership',
                description: 'We take responsibility for our work end to end. Every team member is empowered to act decisively.'
              }
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-200 relative flex-shrink-0"
                style={{
                  width: 'clamp(280px, 40vw, 296px)',
                  height: 'clamp(320px, 45vh, 365px)',
                  borderRadius: '16px',
                  borderColor: '#E2E8F0',
                  overflow: 'hidden'
                }}
              >
                {/* Decorative Circle - Top Right */}
                <div 
                  className="absolute rounded-full"
                  style={{
                    backgroundColor: '#F1F5F9',
                    width: 'clamp(100px, 12vw, 120px)',
                    height: 'clamp(100px, 12vw, 120px)',
                    top: '-30px',
                    right: '-30px',
                    zIndex: 0
                  }}
                ></div>

                {/* Content Container */}
                <div className="relative z-10" style={{ paddingTop: '32px', paddingLeft: '32px', paddingRight: '32px', paddingBottom: '32px' }}>
                {/* Icon - Top Left */}
                <div className="mb-4 sm:mb-6" style={{ width: '24px', height: '24px' }}>
                  <img 
                    src={value.icon} 
                    alt={value.title}
                    style={{
                      width: '24px',
                      height: '24px',
                      objectFit: 'contain'
                    }}
                  />
                </div>

                {/* Title */}
                <h3 
                  className="font-bold mb-3 sm:mb-4 relative z-10"
                  style={{ color: '#000000', fontSize: '24px', marginTop: '90px', letterSpacing: '0%' }}
                >
                  {value.title}
                </h3>

                {/* Description */}
                <p 
                  className="leading-relaxed"
                  style={{ color: '#64748B', fontWeight: 400, fontSize: '18px', lineHeight: '25px' }}
                >
                  {value.description}
                </p>
                </div>
              </div>
            ))}
            </div>
          </div>
          
          {/* Desktop Grid - Hidden on mobile */}
          <div className="hidden lg:grid lg:grid-cols-4" style={{ gap: 'clamp(16px, 2vw, 32px)' }}>
            {[
              {
                icon: PeopleIcon,
                title: 'User First',
                description: 'Every line of code starts with empathy. We solve real problems for real people.'
              },
              {
                icon: EyeIcon,
                title: 'Transparency',
                description: 'We share context, decisions, and outcomes openly with our teams and the community.'
              },
              {
                icon: SettingsIcon,
                title: 'Excellence',
                description: 'We hold ourselves to the highest technical standards.'
              },
              {
                icon: CompassIcon,
                title: 'Ownership',
                description: 'We take responsibility for our work end to end. Every team member is empowered to act decisively.'
              }
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-200 relative"
                style={{
                  width: '100%',
                  height: 'clamp(320px, 45vh, 365px)',
                  borderRadius: '16px',
                  borderColor: '#E2E8F0',
                  overflow: 'hidden'
                }}
              >
                {/* Decorative Circle - Top Right */}
                <div 
                  className="absolute rounded-full"
                  style={{
                    backgroundColor: '#F1F5F9',
                    width: 'clamp(100px, 12vw, 120px)',
                    height: 'clamp(100px, 12vw, 120px)',
                    top: '-30px',
                    right: '-30px',
                    zIndex: 0
                  }}
                ></div>

                {/* Content Container */}
                <div className="relative z-10" style={{ paddingTop: '32px', paddingLeft: '32px', paddingRight: '32px', paddingBottom: '32px' }}>
                {/* Icon - Top Left */}
                <div className="mb-4 sm:mb-6" style={{ width: '24px', height: '24px' }}>
                  <img 
                    src={value.icon} 
                    alt={value.title}
                    style={{
                      width: '24px',
                      height: '24px',
                      objectFit: 'contain'
                    }}
                  />
                </div>

                {/* Title */}
                <h3 
                  className="font-bold mb-3 sm:mb-4 relative z-10"
                  style={{ color: '#000000', fontSize: '24px', marginTop: '90px', letterSpacing: '0%' }}
                >
                  {value.title}
                </h3>

                {/* Description */}
                <p 
                  className="leading-relaxed"
                  style={{ color: '#64748B', fontWeight: 400, fontSize: '18px', lineHeight: '25px' }}
                >
                  {value.description}
                </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence Section */}
      <section className="w-full bg-white pt-4 sm:pt-6 lg:pt-8 xl:pt-10 pb-12 sm:pb-16 lg:pb-20 xl:pb-24">
        <div className="mx-auto" style={{ maxWidth: '1440px', width: '100%', paddingLeft: 'clamp(16px, 4vw, 60px)', paddingRight: 'clamp(16px, 4vw, 60px)' }}>
          {/* Section Heading */}
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6 lg:mb-8"
            style={{ color: '#000000', fontWeight: 600 }}
          >
            Global Presence
          </h2>

          {/* Main Map Card */}
          <div 
            className="relative mb-6 sm:mb-8 lg:mb-10 map-card-container"
            style={{
              backgroundColor: '#F1F5F9',
              borderRadius: '16px',
              width: '100%',
              maxWidth: '1280px',
              height: 'clamp(400px, 50vh, 605px)',
              padding: '40px',
              gap: '10px'
            }}
          >
            <style>{`
              @media (min-width: 1024px) {
                .map-card-container {
                  width: 1280px !important;
                  height: 605px !important;
                }
              }
            `}</style>
            {/* Headquarters Badge - Bottom Left */}
            <div 
              className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-4 sm:left-6 lg:left-8 bg-white border flex items-center justify-between"
              style={{
                width: '353px',
                height: '96px',
                gap: '41px',
                padding: '24px',
                borderRadius: '12px',
                borderWidth: '1px',
                borderColor: '#E2E8F0',
                maxWidth: '100%'
              }}
            >
              <div className="flex flex-col">
                <div 
                  className="text-xs uppercase tracking-wider mb-1"
                  style={{ color: '#64748B', fontWeight: 500 }}
                >
                  HEADQUARTERS
                </div>
                <div 
                  className="font-semibold"
                  style={{ color: '#000000', fontWeight: 600, fontSize: '18px' }}
                >
                  San Francisco
                </div>
              </div>
              <img 
                src={EmailSendIcon}
                alt="Email"
                style={{
                  width: '24px',
                  height: '24px',
                  objectFit: 'contain',
                  flexShrink: 0
                }}
              />
            </div>
          </div>

          {/* City List Cards */}
          <div style={{ width: '100%', maxWidth: '1280px' }}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6" style={{ width: '100%' }}>
              {[
                {
                  city: 'London, UK'
                },
                {
                  city: 'Berlin, Germany'
                },
                {
                  city: 'Tokyo, Japan'
                }
              ].map((location, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl border flex items-center justify-between cursor-pointer"
                  style={{
                    borderRadius: '12px',
                    borderColor: '#E2E8F0',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    width: '100%',
                    height: '72px',
                    minHeight: '72px',
                    maxHeight: '72px',
                    paddingLeft: '24px',
                    paddingRight: '24px',
                    paddingTop: '16px',
                    paddingBottom: '16px',
                    boxSizing: 'border-box',
                    overflow: 'hidden'
                  }}
                >
                  {/* Left: Icon + City Name */}
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <span 
                      className="material-symbols-outlined flex-shrink-0"
                      style={{ 
                        color: '#000000', 
                        fontSize: '20px',
                        fontWeight: 400
                      }}
                    >
                      business
                    </span>
                    <span 
                      className="text-base sm:text-lg font-medium truncate"
                      style={{ color: '#000000', fontWeight: 500 }}
                    >
                      {location.city}
                    </span>
                  </div>

                  {/* Right: Arrow Icon */}
                  <FiChevronRight 
                    className="w-5 h-5 flex-shrink-0"
                    style={{ color: '#000000', marginLeft: '12px' }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Company;
