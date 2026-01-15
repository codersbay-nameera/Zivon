import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row md:justify-between gap-8 sm:gap-12 lg:gap-16 mb-8 sm:mb-12 lg:mb-16">
          {/* Left Column - Logo & Tagline */}
          <div>
            <Link 
              to="/" 
              className="text-xl sm:text-2xl tracking-[-0.02em] mb-4 sm:mb-5 inline-block"
              style={{ color: '#000000' }}
            >
              <span className="font-bold">AXON</span><span className="font-normal">CORP</span>
            </Link>
            <p className="leading-relaxed" style={{ color: '#020617', fontWeight: 400, fontSize: 'clamp(16px, 4vw, 20px)' }}>
              Redefining what's possible in digital infrastructure.
            </p>
          </div>

          {/* Right Side - Company, Services, Connect */}
          <div className="flex flex-col sm:flex-row gap-12 sm:gap-16 lg:gap-20">
            {/* Company Column */}
            <div>
              <h3 className="text-sm sm:text-base font-semibold text-primary mb-4 sm:mb-5 tracking-[-0.02em]">
                Company
              </h3>
              <ul className="space-y-4 sm:space-y-5">
                <li>
                  <Link 
                    to="#" 
                    className="text-sm sm:text-base text-primary hover:underline transition-all"
                    style={{ color: '#000000' }}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link 
                    to="#" 
                    className="text-sm sm:text-base text-primary hover:underline transition-all"
                    style={{ color: '#000000' }}
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link 
                    to="#" 
                    className="text-sm sm:text-base text-primary hover:underline transition-all"
                    style={{ color: '#000000' }}
                  >
                    Press
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services Column */}
            <div>
              <h3 className="text-sm sm:text-base font-semibold text-primary mb-4 sm:mb-5 tracking-[-0.02em]">
                Services
              </h3>
              <ul className="space-y-4 sm:space-y-5">
                <li>
                  <Link 
                    to="#" 
                    className="text-sm sm:text-base text-primary hover:underline transition-all"
                    style={{ color: '#000000' }}
                  >
                    Engineering
                  </Link>
                </li>
                <li>
                  <Link 
                    to="#" 
                    className="text-sm sm:text-base text-primary hover:underline transition-all"
                    style={{ color: '#000000' }}
                  >
                    Cloud Infrastructure
                  </Link>
                </li>
                <li>
                  <Link 
                    to="#" 
                    className="text-sm sm:text-base text-primary hover:underline transition-all"
                    style={{ color: '#000000' }}
                  >
                    Data Intelligence
                  </Link>
                </li>
              </ul>
            </div>

            {/* Connect Column */}
            <div>
              <h3 className="text-sm sm:text-base font-semibold text-primary mb-4 sm:mb-5 tracking-[-0.02em]">
                Connect
              </h3>
              <ul className="space-y-4 sm:space-y-5">
                <li>
                  <Link 
                    to="#" 
                    className="text-sm sm:text-base text-primary hover:underline transition-all"
                    style={{ color: '#000000' }}
                  >
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link 
                    to="#" 
                    className="text-sm sm:text-base text-primary hover:underline transition-all"
                    style={{ color: '#000000' }}
                  >
                    Twitter / X
                  </Link>
                </li>
                <li>
                  <Link 
                    to="#" 
                    className="text-sm sm:text-base text-primary hover:underline transition-all"
                    style={{ color: '#000000' }}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Row - Copyright & Links */}
        <div className="pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6">
            {/* Copyright */}
            <div style={{ fontSize: 'clamp(14px, 3.5vw, 20px)', fontWeight: 400, color: '#020617' }}>
              © {currentYear} AxonCorp International. All Rights Reserved.
            </div>

            {/* Privacy & Terms */}
            <div className="flex items-center gap-4 sm:gap-6">
              <Link 
                to="#" 
                className="text-sm sm:text-base text-primary hover:underline transition-all"
                style={{ color: '#000000' }}
              >
                Privacy
              </Link>
              <Link 
                to="#" 
                className="text-sm sm:text-base text-primary hover:underline transition-all"
                style={{ color: '#000000' }}
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
