import React, { useState, useEffect } from 'react';
import { getConsent } from '../utils/cookieConsent';

const CookiePreferencesModal = ({ isOpen, onClose, onSave, onAcceptAll }) => {
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true, disabled
    analytics: false,
    marketing: false
  });

  // Disable body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      // Save current scroll position
      const scrollY = window.scrollY;
      // Disable body scroll
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      // Re-enable body scroll
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }

    return () => {
      // Cleanup on unmount
      if (isOpen) {
        const scrollY = document.body.style.top;
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        if (scrollY) {
          window.scrollTo(0, parseInt(scrollY || '0') * -1);
        }
      }
    };
  }, [isOpen]);

  // Load current consent when modal opens
  useEffect(() => {
    if (isOpen) {
      const currentConsent = getConsent();
      if (currentConsent && currentConsent.consent) {
        setPreferences({
          necessary: true,
          analytics: currentConsent.consent.analytics || false,
          marketing: currentConsent.consent.marketing || false
        });
      } else {
        setPreferences({
          necessary: true,
          analytics: false,
          marketing: false
        });
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleToggle = (key) => {
    if (key === 'necessary') return; // Cannot toggle necessary
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleSave = () => {
    onSave(preferences);
  };

  const handleAcceptAll = () => {
    if (onAcceptAll) {
      onAcceptAll();
    }
  };

  // iOS-style Toggle Switch Component
  const ToggleSwitch = ({ checked, onChange, disabled = false }) => {
    return (
      <>
        <style>{`
          @media (max-width: 767px) {
            .toggle-switch {
              height: 20px !important;
              width: 36px !important;
            }
            .toggle-dot {
              width: 14px !important;
              height: 14px !important;
            }
            .toggle-dot.checked {
              transform: translateX(16px) translateY(-1px) !important;
            }
            .toggle-dot.unchecked {
              transform: translateX(2px) translateY(-1px) !important;
            }
          }
          @media (min-width: 1024px) {
            .toggle-switch {
              height: 24px !important;
              width: 44px !important;
            }
            .toggle-dot {
              width: 16px !important;
              height: 16px !important;
            }
            .toggle-dot.checked {
              transform: translateX(20px) translateY(0px) !important;
            }
            .toggle-dot.unchecked {
              transform: translateX(2px) translateY(0px) !important;
            }
          }
        `}</style>
        <button
          type="button"
          role="switch"
          aria-checked={checked}
          disabled={disabled}
          onClick={disabled ? undefined : onChange}
          className={`toggle-switch relative inline-flex flex-shrink-0 rounded-full border-2 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 ${
            disabled ? 'cursor-not-allowed opacity-100' : 'cursor-pointer'
          }`}
          style={{
            height: 'clamp(20px, 4vw, 24px)',
            width: 'clamp(36px, 7vw, 44px)',
            backgroundColor: checked ? '#020617' : '#FFFFFF',
            borderColor: 'var(--Slate-950, #020617)',
            focusRingColor: '#020617',
            padding: '2px'
          }}
        >
          <span
            className={`toggle-dot pointer-events-none inline-block transform rounded-full shadow ring-0 transition duration-200 ease-in-out ${checked ? 'checked' : 'unchecked'}`}
            style={{
              width: 'clamp(14px, 3vw, 16px)',
              height: 'clamp(14px, 3vw, 16px)',
              backgroundColor: checked ? '#FFFFFF' : 'var(--Slate-950, #020617)',
              opacity: disabled && checked ? 1 : disabled ? 0.6 : 1
            }}
          />
        </button>
      </>
    );
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-[9998]"
        onClick={onClose}
        style={{ zIndex: 9998 }}
      ></div>

      {/* Modal */}
      <div 
        className="cookie-modal fixed inset-0 flex items-start justify-center z-[9999]"
        style={{ 
          zIndex: 9999,
          padding: 'clamp(16px, 4vw, 32px)',
          paddingTop: 'clamp(20px, 5vh, 80px)',
          alignItems: 'flex-start'
        }}
        onClick={(e) => {
          // Close on backdrop click (optional)
          if (e.target === e.currentTarget) {
            onClose();
          }
        }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-modal-title"
      >
        <div 
          className="bg-white rounded-lg shadow-xl w-full max-h-[90vh] overflow-hidden flex flex-col"
          style={{
            borderRadius: 'clamp(8px, 2vw, 8px)',
            border: '1px solid #E2E8F0',
            maxWidth: 'clamp(320px, 90vw, 600px)',
            width: '100%'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Scrollable Content */}
          <div className="overflow-y-auto flex-1" style={{ padding: 'clamp(16px, 4vw, 24px)' }}>
            {/* Header */}
            <div className="flex items-center justify-between" style={{ marginBottom: 'clamp(12px, 3vw, 16px)' }}>
              <h2 
                id="cookie-modal-title"
                className="font-bold uppercase"
                style={{ 
                  color: '#000000', 
                  fontWeight: 700,
                  letterSpacing: '0.05em',
                  fontSize: 'clamp(14px, 3vw, 16px)'
                }}
              >
                COOKIE PREFERENCES
              </h2>
              <button
                onClick={onClose}
                className="p-1 hover:bg-gray-100 rounded transition-colors flex-shrink-0"
                aria-label="Close"
                style={{ cursor: 'pointer' }}
              >
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  style={{ color: '#000000', width: 'clamp(18px, 4vw, 20px)', height: 'clamp(18px, 4vw, 20px)' }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Description */}
            <p 
              className="mb-6"
              style={{ 
                color: '#000000', 
                fontSize: 'clamp(12px, 2.5vw, 14px)', 
                lineHeight: '1.5',
                marginBottom: 'clamp(16px, 4vw, 24px)'
              }}
            >
              We use cookies and similar technologies to enhance your experience, anlyze our traffic, and provide personalized marketing. <br></br>please select your prefrence below.
            </p>

            {/* Cookie Categories */}
            <div className="space-y-0">
              {/* Essential Cookies */}
              <div 
                className="flex items-center justify-between"
                style={{ 
                  borderBottom: '1px solid #E2E8F0',
                  paddingTop: 'clamp(12px, 3vw, 16px)',
                  paddingBottom: 'clamp(12px, 3vw, 16px)'
                }}
              >
                <div className="flex-1" style={{ marginRight: 'clamp(12px, 3vw, 16px)' }}>
                  <h3 
                    className="font-semibold mb-1 uppercase"
                    style={{ 
                      color: '#000000', 
                      fontWeight: 600,
                      fontSize: 'clamp(12px, 2.5vw, 14px)',
                      letterSpacing: '0.05em',
                      marginBottom: 'clamp(4px, 1vw, 4px)'
                    }}
                  >
                    ESSENTIAL
                  </h3>
                  <p 
                    className="text-xs"
                    style={{ 
                      color: '#64748B', 
                      fontSize: 'clamp(11px, 2vw, 12px)',
                      lineHeight: '1.4'
                    }}
                  >
                    Necessary for the website to function.these cannot be switched off in our system.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <ToggleSwitch 
                    checked={true} 
                    onChange={() => {}} 
                    disabled={true}
                  />
                </div>
              </div>

              {/* Analytics Cookies */}
              <div 
                className="flex items-center justify-between"
                style={{ 
                  borderBottom: '1px solid #E2E8F0',
                  paddingTop: 'clamp(12px, 3vw, 16px)',
                  paddingBottom: 'clamp(12px, 3vw, 16px)'
                }}
              >
                <div className="flex-1" style={{ marginRight: 'clamp(12px, 3vw, 16px)' }}>
                  <h3 
                    className="font-semibold mb-1 uppercase"
                    style={{ 
                      color: '#000000', 
                      fontWeight: 600,
                      fontSize: 'clamp(12px, 2.5vw, 14px)',
                      letterSpacing: '0.05em',
                      marginBottom: 'clamp(4px, 1vw, 4px)'
                    }}
                  >
                    ANALYTICAL
                  </h3>
                  <p 
                    className="text-xs"
                    style={{ 
                      color: '#64748B', 
                      fontSize: 'clamp(11px, 2vw, 12px)',
                      lineHeight: '1.4'
                    }}
                  >
                   Help us understand how visitors interact witht the site by collecting and reporting information anonymously.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <ToggleSwitch 
                    checked={preferences.analytics} 
                    onChange={() => handleToggle('analytics')}
                  />
                </div>
              </div>

              {/* Marketing Cookies */}
              <div 
                className="flex items-center justify-between"
                style={{ 
                  borderBottom: 'none',
                  paddingTop: 'clamp(12px, 3vw, 16px)',
                  paddingBottom: 'clamp(12px, 3vw, 16px)'
                }}
              >
                <div className="flex-1" style={{ marginRight: 'clamp(12px, 3vw, 16px)' }}>
                  <h3 
                    className="font-semibold mb-1 uppercase"
                    style={{ 
                      color: '#000000', 
                      fontWeight: 600,
                      fontSize: 'clamp(12px, 2.5vw, 14px)',
                      letterSpacing: '0.05em',
                      marginBottom: 'clamp(4px, 1vw, 4px)'
                    }}
                  >
                    MARKETING
                  </h3>
                  <p 
                    className="text-xs"
                    style={{ 
                      color: '#64748B', 
                      fontSize: 'clamp(11px, 2vw, 12px)',
                      lineHeight: '1.4'
                    }}
                  >
                  Used to track visitors across websites. The intention to display ads that are relavant and engaging.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <ToggleSwitch 
                    checked={preferences.marketing} 
                    onChange={() => handleToggle('marketing')}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Fixed Bottom Buttons */}
          <div 
            className="flex flex-col gap-3 border-t"
            style={{
              padding: 'clamp(12px, 3vw, 16px) clamp(16px, 4vw, 24px)',
              borderTop: '1px solid #E2E8F0',
              backgroundColor: '#FFFFFF'
            }}
          >
            <button
              onClick={handleSave}
              className="w-full font-semibold transition-colors"
              style={{
                backgroundColor: 'var(--Slate-950, #020617)',
                color: '#FFFFFF',
                fontWeight: 600,
                fontSize: 'clamp(13px, 2.5vw, 14px)',
                borderRadius: '0',
                paddingTop: 'clamp(10px, 2.5vw, 12px)',
                paddingBottom: 'clamp(10px, 2.5vw, 12px)'
              }}
            >
              SAVE PREFERENCES
            </button>
            <button
              onClick={handleAcceptAll}
              className="w-full font-semibold transition-colors"
              style={{
                backgroundColor: '#FFFFFF',
                color: 'var(--Slate-950, #020617)',
                border: '1px solid var(--Slate-950, #020617)',
                fontWeight: 600,
                fontSize: 'clamp(13px, 2.5vw, 14px)',
                borderRadius: '0',
                paddingTop: 'clamp(10px, 2.5vw, 12px)',
                paddingBottom: 'clamp(10px, 2.5vw, 12px)'
              }}
            >
              ACCEPT ALL
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookiePreferencesModal;
