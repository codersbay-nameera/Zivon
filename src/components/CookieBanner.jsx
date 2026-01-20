import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getConsent, saveConsent, hasValidConsent } from '../utils/cookieConsent';
import CookiePreferencesModal from './CookiePreferencesModal';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isLocked, setIsLocked] = useState(false);

  useEffect(() => {
    // Check if consent exists and is valid
    const hasConsent = hasValidConsent();
    
    if (!hasConsent) {
      setShowBanner(true);
      setIsLocked(true);
      
      // Add body class to disable interactions via CSS
      document.body.classList.add('cookie-locked');
      
      // Disable all interactive elements except cookie banner
      const disableAllInteractions = () => {
        const allClickable = document.querySelectorAll('a, button, [role="button"], input, select, textarea, [onclick], [href]');
        allClickable.forEach((el) => {
          const banner = document.querySelector('.cookie-banner');
          const modal = document.querySelector('.cookie-modal');
          
          // Skip cookie banner and modal elements
          if (banner && (banner.contains(el) || el.closest('.cookie-banner'))) {
            return;
          }
          if (modal && (modal.contains(el) || el.closest('.cookie-modal'))) {
            return;
          }
          
          // Disable element
          el.style.pointerEvents = 'none';
          el.setAttribute('data-cookie-disabled', 'true');
        });
      };
      
      // Enable interactions when unlocked
      const enableAllInteractions = () => {
        const disabled = document.querySelectorAll('[data-cookie-disabled="true"]');
        disabled.forEach((el) => {
          el.style.pointerEvents = '';
          el.removeAttribute('data-cookie-disabled');
        });
      };
      
      // Add global event blockers
      const handleClick = (e) => {
        const target = e.target;
        const banner = document.querySelector('.cookie-banner');
        const modal = document.querySelector('.cookie-modal');
        
        // Allow clicks on banner or modal
        if (banner && (banner.contains(target) || banner === target || target.closest('.cookie-banner'))) {
          return;
        }
        if (modal && (modal.contains(target) || modal === target || target.closest('.cookie-modal'))) {
          return;
        }
        
        // Block all other clicks
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        return false;
      };
      
      // Block all pointer events
      const handlePointer = (e) => {
        const target = e.target;
        const banner = document.querySelector('.cookie-banner');
        const modal = document.querySelector('.cookie-modal');
        
        if (banner && (banner.contains(target) || target.closest('.cookie-banner'))) {
          return;
        }
        if (modal && (modal.contains(target) || target.closest('.cookie-modal'))) {
          return;
        }
        
        e.preventDefault();
        e.stopPropagation();
        return false;
      };
      
      // Disable interactions immediately
      setTimeout(disableAllInteractions, 100);
      
      // Use capture phase to catch events early
      document.addEventListener('click', handleClick, true);
      document.addEventListener('mousedown', handleClick, true);
      document.addEventListener('mouseup', handleClick, true);
      document.addEventListener('touchstart', handleClick, true);
      document.addEventListener('touchend', handleClick, true);
      document.addEventListener('pointerdown', handlePointer, true);
      document.addEventListener('pointerup', handlePointer, true);
      
      // Watch for new elements
      const observer = new MutationObserver(() => {
        if (isLocked) {
          disableAllInteractions();
        }
      });
      
      observer.observe(document.body, {
        childList: true,
        subtree: true
      });
      
      return () => {
        enableAllInteractions();
        document.body.classList.remove('cookie-locked');
        document.removeEventListener('click', handleClick, true);
        document.removeEventListener('mousedown', handleClick, true);
        document.removeEventListener('mouseup', handleClick, true);
        document.removeEventListener('touchstart', handleClick, true);
        document.removeEventListener('touchend', handleClick, true);
        document.removeEventListener('pointerdown', handlePointer, true);
        document.removeEventListener('pointerup', handlePointer, true);
        observer.disconnect();
      };
    } else {
      setShowBanner(false);
      setIsLocked(false);
      document.body.classList.remove('cookie-locked');
    }
  }, [isLocked]);

  const handleAcceptAll = () => {
    saveConsent({
      necessary: true,
      analytics: true,
      marketing: true
    });
    // Enable all interactions
    const disabled = document.querySelectorAll('[data-cookie-disabled="true"]');
    disabled.forEach((el) => {
      el.style.pointerEvents = '';
      el.removeAttribute('data-cookie-disabled');
    });
    document.body.classList.remove('cookie-locked');
    setIsLocked(false);
    setShowBanner(false);
  };

  const handleAcceptNecessary = () => {
    saveConsent({
      necessary: true,
      analytics: false,
      marketing: false
    });
    // Enable all interactions
    const disabled = document.querySelectorAll('[data-cookie-disabled="true"]');
    disabled.forEach((el) => {
      el.style.pointerEvents = '';
      el.removeAttribute('data-cookie-disabled');
    });
    document.body.classList.remove('cookie-locked');
    setIsLocked(false);
    setShowBanner(false);
  };

  const handleEditPreferences = () => {
    setShowModal(true);
  };

  const handleSavePreferences = (preferences) => {
    saveConsent({
      necessary: preferences.necessary,
      analytics: preferences.analytics,
      marketing: preferences.marketing
    });
    // Enable all interactions
    const disabled = document.querySelectorAll('[data-cookie-disabled="true"]');
    disabled.forEach((el) => {
      el.style.pointerEvents = '';
      el.removeAttribute('data-cookie-disabled');
    });
    document.body.classList.remove('cookie-locked');
    setIsLocked(false);
    setShowModal(false);
    setShowBanner(false);
  };

  const handleAcceptAllFromModal = () => {
    saveConsent({
      necessary: true,
      analytics: true,
      marketing: true
    });
    // Enable all interactions
    const disabled = document.querySelectorAll('[data-cookie-disabled="true"]');
    disabled.forEach((el) => {
      el.style.pointerEvents = '';
      el.removeAttribute('data-cookie-disabled');
    });
    document.body.classList.remove('cookie-locked');
    setIsLocked(false);
    setShowModal(false);
    setShowBanner(false);
  };

  // Don't render anything if banner shouldn't be shown
  if (!showBanner && !showModal) return null;

  return (
    <>
      {/* Interaction Lock Overlay - Blocks clicks but allows scrolling + dims background */}
      {isLocked && (
        <div
          className="fixed inset-0 z-[9997] cookie-lock-overlay"
          style={{
            zIndex: 9997,
            pointerEvents: 'auto',
            touchAction: 'pan-y', // Allow vertical scrolling
            overscrollBehavior: 'contain',
            backgroundColor: 'rgba(0, 0, 0, 0.08)', // Subtle shadow-like dull effect
            transition: 'background-color 0.3s ease'
          }}
          onClick={(e) => {
            const target = e.target;
            const banner = document.querySelector('.cookie-banner');
            const modal = document.querySelector('.cookie-modal');
            
            if (banner && (banner.contains(target) || target.closest('.cookie-banner'))) {
              return;
            }
            if (modal && (modal.contains(target) || target.closest('.cookie-modal'))) {
              return;
            }
            
            e.preventDefault();
            e.stopPropagation();
          }}
          onMouseDown={(e) => {
            const target = e.target;
            const banner = document.querySelector('.cookie-banner');
            const modal = document.querySelector('.cookie-modal');
            
            if (banner && (banner.contains(target) || target.closest('.cookie-banner'))) {
              return;
            }
            if (modal && (modal.contains(target) || target.closest('.cookie-modal'))) {
              return;
            }
            
            e.preventDefault();
            e.stopPropagation();
          }}
        />
      )}

      {/* Cookie Banner - Hide when modal is open */}
      {showBanner && !showModal && (
        <div
          className="cookie-banner fixed bottom-0 left-0 right-0 z-[9998] bg-white border-t"
          style={{
            zIndex: 9998,
            borderTopWidth: '1px',
            borderTopColor: '#E2E8F0',
            boxShadow: '0 -4px 6px -1px rgba(0, 0, 0, 0.1)',
            padding: 'clamp(16px, 3vw, 24px)',
            paddingLeft: 'clamp(16px, 4vw, 60px)',
            paddingRight: 'clamp(16px, 4vw, 60px)'
          }}
        >
          <div 
            className="mx-auto"
            style={{ 
              maxWidth: '1440px',
              width: '100%'
            }}
          >
            {/* Mobile Box Style */}
            <div className="md:hidden border-2 border-black p-4 bg-white">
              <h3 
                className="text-lg font-semibold mb-2"
                style={{ 
                  color: '#000000',
                  fontWeight: 600,
                  fontSize: 'clamp(18px, 2.5vw, 20px)'
                }}
              >
                We Care About Your Privacy
              </h3>
              <p 
                className="text-sm leading-relaxed mb-4"
                style={{ 
                  color: '#64748B',
                  fontSize: 'clamp(14px, 2vw, 16px)'
                }}
              >
                We use cookies to enhance your browsing experience and analyze our traffic. 
                By clicking "Accept All", you consent to our use of cookies.
              </p>
              <div className="flex flex-col gap-3">
                <button
                  onClick={handleAcceptAll}
                  className="w-full py-3 rounded-lg font-semibold transition-colors"
                  style={{
                    backgroundColor: '#020617',
                    color: '#FFFFFF',
                    fontWeight: 600,
                    fontSize: 'clamp(14px, 2vw, 16px)'
                  }}
                >
                  Accept All
                </button>
                <div className="flex justify-center gap-4">
                  <button
                    onClick={handleEditPreferences}
                    className="bg-transparent border-none p-0 cursor-pointer underline font-semibold"
                    style={{
                      color: '#000000',
                      fontWeight: 600,
                      fontSize: 'clamp(14px, 2vw, 16px)',
                      textDecoration: 'underline'
                    }}
                  >
                    Edit Preferences
                  </button>
                  <button
                    onClick={handleAcceptNecessary}
                    className="bg-transparent border-none p-0 cursor-pointer underline font-semibold"
                    style={{
                      color: '#000000',
                      fontWeight: 600,
                      fontSize: 'clamp(14px, 2vw, 16px)',
                      textDecoration: 'underline'
                    }}
                  >
                    Accept Necessary
                  </button>
                </div>
              </div>
            </div>

            {/* Desktop Layout - Original */}
            <div className="hidden md:flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 lg:gap-6">
              {/* Left Content */}
              <div className="flex-1">
                <h3 
                  className="text-lg sm:text-xl font-semibold mb-2"
                  style={{ 
                    color: '#000000',
                    fontWeight: 600,
                    fontSize: 'clamp(18px, 2.5vw, 20px)'
                  }}
                >
                  We Care About Your Privacy
                </h3>
                <p 
                  className="text-sm sm:text-base leading-relaxed"
                  style={{ 
                    color: '#64748B',
                    fontSize: 'clamp(14px, 2vw, 16px)',
                    marginBottom: '8px'
                  }}
                >
                  We use cookies to enhance your browsing experience and analyze our traffic. 
                  By clicking "Accept All", you consent to our use of cookies.{' '}
                  <Link 
                    to="#" 
                    className="underline hover:no-underline"
                    style={{ color: '#020617' }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    Privacy Policy
                  </Link>
                  {' '}or{' '}
                  <button
                    onClick={handleEditPreferences}
                    className="underline hover:no-underline bg-transparent border-none p-0 cursor-pointer"
                    style={{ color: '#020617' }}
                  >
                    edit your preferences
                  </button>
                  .
                </p>
              </div>

              {/* Right Actions */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 flex-shrink-0">
                <button
                  onClick={handleEditPreferences}
                  className="px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-colors whitespace-nowrap"
                  style={{
                    backgroundColor: 'transparent',
                    color: '#000000',
                    border: '1px solid #E2E8F0',
                    fontWeight: 600,
                    fontSize: 'clamp(14px, 2vw, 16px)'
                  }}
                >
                  Edit Preferences
                </button>
                <button
                  onClick={handleAcceptNecessary}
                  className="px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-colors whitespace-nowrap"
                  style={{
                    backgroundColor: 'transparent',
                    color: '#000000',
                    border: '1px solid #E2E8F0',
                    fontWeight: 600,
                    fontSize: 'clamp(14px, 2vw, 16px)'
                  }}
                >
                  Accept Necessary
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-colors whitespace-nowrap"
                  style={{
                    backgroundColor: '#020617',
                    color: '#FFFFFF',
                    fontWeight: 600,
                    fontSize: 'clamp(14px, 2vw, 16px)'
                  }}
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Preferences Modal */}
      <CookiePreferencesModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSave={handleSavePreferences}
        onAcceptAll={handleAcceptAllFromModal}
      />
    </>
  );
};

export default CookieBanner;
