import React, { useState, useEffect, useRef } from 'react';

const ConsultationModal = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const textareaRef = useRef(null);

  // Disable body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    } else {
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

  // Handle ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setFormData({
        fullName: '',
        email: '',
        subject: '',
        message: ''
      });
      setErrors({});
      // Reset textarea height
      if (textareaRef.current) {
        const minHeight = window.innerWidth < 768 ? 20 : 24;
        textareaRef.current.style.height = minHeight + 'px';
      }
    }
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
    
    // Auto-resize textarea
    if (name === 'message' && textareaRef.current) {
      const textarea = textareaRef.current;
      textarea.style.height = 'auto';
      const scrollHeight = textarea.scrollHeight;
      const minHeight = window.innerWidth < 768 ? 20 : 24; // Responsive min height
      textarea.style.height = Math.max(minHeight, scrollHeight) + 'px';
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Save to localStorage
      const consultationData = {
        ...formData,
        submittedAt: Date.now()
      };
      
      // Store in localStorage (optional, for demo)
      const existing = JSON.parse(localStorage.getItem('consultation_requests') || '[]');
      existing.push(consultationData);
      localStorage.setItem('consultation_requests', JSON.stringify(existing));
      
      if (onSubmit) {
        onSubmit(consultationData);
      }
      
      // Close modal
      onClose();
      
      // Show success message (you can add a toast notification here)
      alert('Thank you! We will get back to you soon.');
      
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Placeholder Styles */}
      <style>{`
        .consultation-input::placeholder {
          color: #9CA3AF;
          opacity: 1;
        }
        .consultation-textarea::placeholder {
          color: #9CA3AF;
          opacity: 1;
        }
      `}</style>
      
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-[9998]"
        onClick={onClose}
        style={{ zIndex: 9998 }}
      ></div>

      {/* Modal */}
      <div 
        className="consultation-modal fixed inset-0 flex items-start justify-center z-[9999]"
        style={{ 
          zIndex: 9999,
          padding: 'clamp(16px, 4vw, 32px)',
          paddingTop: 'clamp(20px, 5vh, 80px)',
          alignItems: 'flex-start'
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            onClose();
          }
        }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="consultation-modal-title"
      >
        <div 
          className="bg-white rounded-lg shadow-xl w-full max-h-[90vh] overflow-hidden flex flex-col"
          style={{
            borderRadius: 'clamp(8px, 2vw, 8px)',
            border: '1px solid #E2E8F0',
            maxWidth: 'clamp(320px, 90vw, 700px)',
            width: '100%'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Scrollable Content */}
          <div className="overflow-y-auto flex-1">
            {/* Top Sticky Header */}
            <div 
              className="flex items-center justify-between"
              style={{ 
                padding: 'clamp(16px, 4vw, 24px)',
                paddingBottom: 'clamp(12px, 3vw, 16px)',
                position: 'sticky',
                top: 0,
                backgroundColor: '#FFFFFF',
                zIndex: 10
              }}
            >
              <p 
                className="uppercase"
                style={{
                  fontSize: 'clamp(11px, 2.5vw, 12px)',
                  letterSpacing: '0.1em',
                  color: '#000000',
                  fontWeight: 800,
                  margin: 0,
                  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
                }}
              >
                ENTERPRISE
              </p>
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

            {/* Thin Divider */}
            <div 
              style={{ 
                borderBottom: '1px solid #E5E7EB',
                width: '100%',
                marginBottom: 'clamp(24px, 6vw, 32px)'
              }}
            ></div>

            {/* Content Section */}
            <div style={{ padding: '0 clamp(16px, 4vw, 24px)', paddingBottom: 'clamp(24px, 6vw, 32px)' }}>
              {/* INQUIRY DIVISION Label */}
              <p 
                className="uppercase"
                style={{
                  fontSize: 'clamp(10px, 2vw, 11px)',
                  letterSpacing: '0.15em',
                  color: '#9CA3AF',
                  fontWeight: 400,
                  marginBottom: 'clamp(16px, 4vw, 24px)',
                  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
                }}
              >
                INQUIRY DIVISION
              </p>

              {/* Main Headline - Consult an Expert */}
              <h2 
                id="consultation-modal-title"
                className="font-bold md:whitespace-nowrap"
                style={{
                  fontSize: 'clamp(32px, 8vw, 48px)',
                  fontWeight: 700,
                  lineHeight: '1.1',
                  letterSpacing: '-0.02em',
                  color: '#000000',
                  marginBottom: 'clamp(16px, 4vw, 24px)',
                  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
                }}
              >
                Consult an Expert
              </h2>

              {/* Paragraph */}
              <p 
                style={{
                  fontSize: 'clamp(14px, 3vw, 18px)',
                  lineHeight: '1.6',
                  color: '#6B7280',
                  fontWeight: 400,
                  maxWidth: '500px',
                  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                  marginBottom: 'clamp(24px, 6vw, 32px)'
                }}
              >
                Connect with our specialized team to discuss your enterprise needs and explore tailored solutions for your organization.
              </p>
            </div>

            {/* Divider before form */}
            <div 
              style={{ 
                borderBottom: '1px solid #E5E7EB',
                width: '100%',
                marginBottom: 'clamp(24px, 6vw, 32px)'
              }}
            ></div>

            {/* Form Section */}
            <div style={{ padding: '0 clamp(16px, 4vw, 24px)', paddingBottom: 'clamp(32px, 8vw, 48px)' }}>
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(24px, 6vw, 40px)' }}>
                  
                  {/* FULL NAME and ENTERPRISE EMAIL - Same Row on Desktop */}
                  <div className="flex flex-col md:flex-row" style={{ gap: 'clamp(24px, 6vw, 24px)' }}>
                    {/* FULL NAME */}
                    <div style={{ flex: 1 }}>
                      <label 
                        htmlFor="fullName"
                        className="block uppercase"
                        style={{
                          fontSize: 'clamp(10px, 2vw, 11px)',
                          letterSpacing: '0.1em',
                          color: '#9CA3AF',
                          fontWeight: 400,
                          marginBottom: 'clamp(8px, 2vw, 12px)',
                          fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
                        }}
                      >
                        FULL NAME
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full focus:outline-none consultation-input"
                        style={{
                          border: 'none',
                          borderBottom: errors.fullName ? '1px solid #EF4444' : '1px solid #D1D5DB',
                          paddingBottom: 'clamp(8px, 2vw, 12px)',
                          fontSize: 'clamp(14px, 3vw, 16px)',
                          color: '#000000',
                          backgroundColor: 'transparent',
                          fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                          fontWeight: 300,
                          transition: 'border-color 0.2s'
                        }}
                        placeholder="Required"
                        onFocus={(e) => e.target.style.borderBottomColor = '#000000'}
                        onBlur={(e) => e.target.style.borderBottomColor = errors.fullName ? '#EF4444' : '#D1D5DB'}
                      />
                      {errors.fullName && (
                        <p style={{ color: '#EF4444', fontSize: '12px', marginTop: '4px' }}>
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    {/* ENTERPRISE EMAIL */}
                    <div style={{ flex: 1 }}>
                      <label 
                        htmlFor="email"
                        className="block uppercase"
                        style={{
                          fontSize: 'clamp(10px, 2vw, 11px)',
                          letterSpacing: '0.1em',
                          color: '#9CA3AF',
                          fontWeight: 400,
                          marginBottom: 'clamp(8px, 2vw, 12px)',
                          fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
                        }}
                      >
                        ENTERPRISE EMAIL
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full focus:outline-none consultation-input"
                        style={{
                          border: 'none',
                          borderBottom: errors.email ? '1px solid #EF4444' : '1px solid #D1D5DB',
                          paddingBottom: 'clamp(8px, 2vw, 12px)',
                          fontSize: 'clamp(14px, 3vw, 16px)',
                          color: '#000000',
                          backgroundColor: 'transparent',
                          fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                          fontWeight: 300,
                          transition: 'border-color 0.2s'
                        }}
                        placeholder="corp@company.com"
                        onFocus={(e) => e.target.style.borderBottomColor = '#000000'}
                        onBlur={(e) => e.target.style.borderBottomColor = errors.email ? '#EF4444' : '#D1D5DB'}
                      />
                      {errors.email && (
                        <p style={{ color: '#EF4444', fontSize: '12px', marginTop: '4px' }}>
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* SUBJECT OF INQUIRY and MESSAGE - Same Row on Desktop */}
                  <div className="flex flex-col md:flex-row" style={{ gap: 'clamp(24px, 6vw, 24px)' }}>
                    {/* SUBJECT OF INQUIRY */}
                    <div style={{ flex: 1 }}>
                      <label 
                        htmlFor="subject"
                        className="block uppercase"
                        style={{
                          fontSize: 'clamp(10px, 2vw, 11px)',
                          letterSpacing: '0.1em',
                          color: '#9CA3AF',
                          fontWeight: 400,
                          marginBottom: 'clamp(8px, 2vw, 12px)',
                          fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
                        }}
                      >
                        SUBJECT OF INQUIRY
                      </label>
                      <div style={{ position: 'relative', display: 'flex', alignItems: 'flex-end' }}>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full focus:outline-none appearance-none"
                          style={{
                            border: 'none',
                            borderBottom: '1px solid #D1D5DB',
                            paddingTop: '0',
                            paddingBottom: 'clamp(8px, 2vw, 12px)',
                            paddingRight: '24px',
                            fontSize: 'clamp(14px, 3vw, 16px)',
                            lineHeight: '1.5',
                            color: formData.subject ? '#000000' : '#9CA3AF',
                            backgroundColor: 'transparent',
                            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                            fontWeight: 300,
                            cursor: 'pointer',
                            transition: 'border-color 0.2s',
                            minHeight: 'clamp(20px, 4vw, 24px)'
                          }}
                          onFocus={(e) => e.target.style.borderBottomColor = '#000000'}
                          onBlur={(e) => e.target.style.borderBottomColor = '#D1D5DB'}
                        >
                          <option value="" disabled style={{ color: '#9CA3AF' }}>Select specialized area</option>
                          <option value="cloud-infrastructure">Cloud Infrastructure</option>
                          <option value="ai-ml">AI & Machine Learning</option>
                          <option value="data-analytics">Data Analytics</option>
                          <option value="engineering">Engineering Solutions</option>
                          <option value="security">Security & Compliance</option>
                          <option value="other">Other</option>
                        </select>
                        <svg 
                          style={{
                            position: 'absolute',
                            right: '0',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            width: '16px',
                            height: '16px',
                            pointerEvents: 'none',
                            color: '#9CA3AF'
                          }}
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>

                    {/* MESSAGE / REQUIREMENTS */}
                    <div style={{ flex: 1 }}>
                      <label 
                        htmlFor="message"
                        className="block uppercase"
                        style={{
                          fontSize: 'clamp(10px, 2vw, 11px)',
                          letterSpacing: '0.1em',
                          color: '#9CA3AF',
                          fontWeight: 400,
                          marginBottom: 'clamp(8px, 2vw, 12px)',
                          fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
                        }}
                      >
                        MESSAGE / REQUIREMENTS
                      </label>
                      <div style={{ position: 'relative', display: 'flex', alignItems: 'flex-end' }}>
                        <textarea
                          ref={textareaRef}
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full focus:outline-none resize-none consultation-textarea"
                          style={{
                            border: 'none',
                            borderBottom: '1px solid #D1D5DB',
                            paddingBottom: 'clamp(8px, 2vw, 12px)',
                            fontSize: 'clamp(14px, 3vw, 16px)',
                            color: '#000000',
                            backgroundColor: 'transparent',
                            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                            fontWeight: 300,
                            lineHeight: '1.5',
                            transition: 'border-color 0.2s',
                            height: 'clamp(20px, 4vw, 24px)',
                            overflow: 'hidden',
                            minHeight: 'clamp(20px, 4vw, 24px)'
                          }}
                          placeholder="Describe your requirements..."
                          onFocus={(e) => e.target.style.borderBottomColor = '#000000'}
                          onBlur={(e) => e.target.style.borderBottomColor = '#D1D5DB'}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Primary Button */}
                <div style={{ marginTop: 'clamp(32px, 8vw, 48px)' }}>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full uppercase font-semibold flex items-center justify-center gap-2 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{
                      backgroundColor: '#000000',
                      color: '#FFFFFF',
                      paddingTop: 'clamp(14px, 3vw, 16px)',
                      paddingBottom: 'clamp(14px, 3vw, 16px)',
                      fontSize: 'clamp(13px, 2.5vw, 14px)',
                      letterSpacing: '0.1em',
                      fontWeight: 600,
                      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                      cursor: isSubmitting ? 'not-allowed' : 'pointer',
                      border: 'none',
                      borderRadius: '0'
                    }}
                  >
                    SEND REQUEST
                    <svg 
                      style={{
                        width: 'clamp(14px, 3vw, 16px)',
                        height: 'clamp(14px, 3vw, 16px)',
                        marginLeft: '4px'
                      }}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  
                  {/* Helper Text */}
                  <p 
                    style={{
                      fontSize: 'clamp(11px, 2vw, 12px)',
                      color: '#9CA3AF',
                      marginTop: 'clamp(12px, 3vw, 16px)',
                      textAlign: 'center',
                      fontWeight: 400,
                      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
                    }}
                  >
                    Response time: Typically within 24 business hours.
                  </p>
                </div>
              </form>
            </div>

            {/* Global Presence Footer Section */}
            <div style={{ 
              padding: '0 24px', 
              paddingTop: '20px',
              paddingBottom: '48px'
            }}>
              {/* Top Heading */}
              <p 
                className="uppercase"
                style={{
                  fontSize: '11px',
                  letterSpacing: '0.15em',
                  color: '#6B7280',
                  fontWeight: 400,
                  marginBottom: '12px',
                  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
                }}
              >
                GLOBAL PRESENCE
              </p>
              
              {/* Second Line */}
              <p 
                className="uppercase"
                style={{
                  fontSize: '10px',
                  letterSpacing: '0.1em',
                  color: '#9CA3AF',
                  fontWeight: 400,
                  marginBottom: '40px',
                  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
                }}
              >
                HEADQUARTERS & OPERATIONAL HUBS
              </p>

              {/* Location Blocks - Same Row on Desktop, Stack on Mobile */}
              <div className="flex flex-col md:flex-row" style={{ gap: 'clamp(24px, 6vw, 40px)' }}>
                {/* NEW YORK */}
                <div className="md:flex-1">
                  <p 
                    className="uppercase"
                    style={{
                      fontSize: 'clamp(14px, 3vw, 16px)',
                      fontWeight: 700,
                      color: '#000000',
                      letterSpacing: '0.05em',
                      marginBottom: 'clamp(4px, 1vw, 6px)',
                      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
                    }}
                  >
                    NEW YORK
                  </p>
                  <p 
                    className="uppercase"
                    style={{
                      fontSize: 'clamp(12px, 2.5vw, 13px)',
                      color: '#9CA3AF',
                      fontWeight: 400,
                      marginBottom: 'clamp(2px, 0.5vw, 4px)',
                      letterSpacing: '0.05em',
                      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
                    }}
                  >
                    NORTH AMERICA HUB
                  </p>
                  <p 
                    style={{
                      fontSize: 'clamp(11px, 2vw, 12px)',
                      color: '#000000',
                      fontWeight: 500,
                      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
                    }}
                  >
                    UTC-5
                  </p>
                </div>

                {/* LONDON */}
                <div className="md:flex-1">
                  <p 
                    className="uppercase"
                    style={{
                      fontSize: 'clamp(14px, 3vw, 16px)',
                      fontWeight: 700,
                      color: '#000000',
                      letterSpacing: '0.05em',
                      marginBottom: 'clamp(4px, 1vw, 6px)',
                      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
                    }}
                  >
                    LONDON
                  </p>
                  <p 
                    className="uppercase"
                    style={{
                      fontSize: 'clamp(12px, 2.5vw, 13px)',
                      color: '#9CA3AF',
                      fontWeight: 400,
                      marginBottom: 'clamp(2px, 0.5vw, 4px)',
                      letterSpacing: '0.05em',
                      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
                    }}
                  >
                    EMEA HUB
                  </p>
                  <p 
                    style={{
                      fontSize: 'clamp(11px, 2vw, 12px)',
                      color: '#000000',
                      fontWeight: 500,
                      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
                    }}
                  >
                    UTC+0
                  </p>
                </div>

                {/* TOKYO */}
                <div className="md:flex-1">
                  <p 
                    className="uppercase"
                    style={{
                      fontSize: 'clamp(14px, 3vw, 16px)',
                      fontWeight: 700,
                      color: '#000000',
                      letterSpacing: '0.05em',
                      marginBottom: 'clamp(4px, 1vw, 6px)',
                      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
                    }}
                  >
                    TOKYO
                  </p>
                  <p 
                    className="uppercase"
                    style={{
                      fontSize: 'clamp(12px, 2.5vw, 13px)',
                      color: '#9CA3AF',
                      fontWeight: 400,
                      marginBottom: 'clamp(2px, 0.5vw, 4px)',
                      letterSpacing: '0.05em',
                      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
                    }}
                  >
                    APAC HUB
                  </p>
                  <p 
                    style={{
                      fontSize: 'clamp(11px, 2vw, 12px)',
                      color: '#000000',
                      fontWeight: 500,
                      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
                    }}
                  >
                    UTC+9
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConsultationModal;
