import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleSectionClick = (e, sectionId) => {
    e.preventDefault();
    closeMenu();
    
    const scrollToSection = () => {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    };
    
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        scrollToSection();
      }, 100);
    } else {
      scrollToSection();
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white relative">
      <nav className="w-full py-4">
        <div className="flex items-center">
          {/* Logo */}
          <div className="max-w-7xl ml-4 sm:ml-6 lg:ml-8 px-4 sm:px-6 lg:px-8">
            <Link 
              to="/" 
              className="text-xl sm:text-2xl tracking-[-0.02em]"
              onClick={closeMenu}
              style={{ color: '#000000' }}
            >
              <span className="font-bold">AXON</span><span className="font-normal">CORP</span>
            </Link>
          </div>
          
          {/* Desktop Navigation - Right Aligned */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8 ml-auto mr-4 sm:mr-6 lg:mr-8">
            <a 
              href="#capabilities" 
              onClick={(e) => handleSectionClick(e, 'capabilities')}
              className="text-sm lg:text-base hover:text-secondary transition-colors cursor-pointer"
              style={{ color: '#000000', fontWeight: 500 }}
            >
              Capabilities
            </a>
            <a 
              href="#products" 
              onClick={(e) => handleSectionClick(e, 'products')}
              className="text-sm lg:text-base hover:text-secondary transition-colors cursor-pointer"
              style={{ color: '#000000', fontWeight: 500 }}
            >
              Products
            </a>
            <a 
              href="#insights" 
              onClick={(e) => handleSectionClick(e, 'insights')}
              className="text-sm lg:text-base hover:text-secondary transition-colors cursor-pointer"
              style={{ color: '#000000', fontWeight: 500 }}
            >
              Insights
            </a>
            {/* Hamburger Menu Icon */}
            <button
              onClick={toggleMenu}
              className="cursor-pointer focus:outline-none"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                viewBox="0 0 24 24"
                style={{ color: '#0F172A' }}
              >
                <path 
                  d="M4 6h16M4 12h16M4 18h16" 
                  stroke="#0F172A" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          
          {/* Hamburger Menu Button - Visible on mobile and tablet */}
          <button 
            className="md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded ml-auto mr-4 sm:mr-6 lg:mr-8"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            style={{ color: '#0A0A0A' }}
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="#0A0A0A" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="#0A0A0A" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        
        {/* Mobile Menu - Slides down on mobile/tablet */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-64 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col space-y-4 pb-4">
            <a 
              href="#capabilities" 
              onClick={(e) => handleSectionClick(e, 'capabilities')}
              className="text-base hover:text-secondary transition-colors py-2 border-b border-muted cursor-pointer"
              style={{ color: '#000000', fontWeight: 500 }}
            >
              Capabilities
            </a>
            <a 
              href="#products" 
              onClick={(e) => handleSectionClick(e, 'products')}
              className="text-base hover:text-secondary transition-colors py-2 border-b border-muted cursor-pointer"
              style={{ color: '#000000', fontWeight: 500 }}
            >
              Products
            </a>
            <a 
              href="#insights" 
              onClick={(e) => handleSectionClick(e, 'insights')}
              className="text-base hover:text-secondary transition-colors py-2 cursor-pointer"
              style={{ color: '#000000', fontWeight: 500 }}
            >
              Insights
            </a>
          </div>
        </div>
        
        {/* Desktop Menu Dropdown - Appears on desktop hamburger click */}
        <div 
          className={`hidden md:block absolute top-full left-0 right-0 bg-white border-b border-muted overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="w-full">
            <div className="max-w-7xl ml-4 sm:ml-6 lg:ml-8 mr-4 sm:mr-6 lg:mr-8 px-4 sm:px-6 lg:px-8 py-6">
            <div className="text-base text-secondary">
              Menu content placeholder
            </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

