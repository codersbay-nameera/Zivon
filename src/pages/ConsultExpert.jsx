import React, { useState, useEffect } from 'react';

const ConsultExpert = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email';
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
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const consultationData = {
        ...formData,
        submittedAt: Date.now()
      };
      
      const existing = JSON.parse(localStorage.getItem('consultation_requests') || '[]');
      existing.push(consultationData);
      localStorage.setItem('consultation_requests', JSON.stringify(existing));
      
      alert('Thank you! We will get back to you soon.');
      
      setFormData({
        fullName: '',
        email: '',
        subject: '',
        message: ''
      });
      
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>
      {/* Top Header */}
      <div className="w-full" style={{ paddingTop: 'clamp(16px, 4vw, 24px)', paddingBottom: 'clamp(12px, 3vw, 16px)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p 
            className="uppercase"
            style={{
              fontSize: 'clamp(11px, 2.5vw, 12px)',
              letterSpacing: '0.1em',
              color: '#000000',
              fontWeight: 500,
              margin: 0
            }}
          >
            ENTERPRISE
          </p>
        </div>
      </div>

      {/* Divider */}
      <div 
        style={{ 
          borderBottom: '1px solid #E5E7EB',
          width: '100%'
        }}
      ></div>

      {/* Hero / Intro Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8" style={{ paddingTop: 'clamp(32px, 8vw, 64px)', paddingBottom: 'clamp(24px, 6vw, 48px)' }}>
        <div className="mb-4">
          <p 
            className="uppercase"
            style={{
              fontSize: 'clamp(10px, 2vw, 11px)',
              letterSpacing: '0.15em',
              color: '#9CA3AF',
              fontWeight: 400,
              marginBottom: 'clamp(16px, 4vw, 24px)'
            }}
          >
            INQUIRY DIVISION
          </p>
        </div>
        
        <h1 
          className="font-bold"
          style={{
            fontSize: 'clamp(36px, 10vw, 64px)',
            fontWeight: 700,
            lineHeight: '1.1',
            letterSpacing: '-0.02em',
            color: '#000000',
            marginBottom: 'clamp(16px, 4vw, 24px)'
          }}
        >
          Consult<br />an Expert
        </h1>
        
        <p 
          style={{
            fontSize: 'clamp(14px, 3vw, 16px)',
            lineHeight: '1.6',
            color: '#6B7280',
            fontWeight: 400,
            maxWidth: '600px'
          }}
        >
          Connect with our specialized team to discuss your enterprise needs and explore tailored solutions for your organization.
        </p>
      </section>

      {/* Form Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8" style={{ paddingTop: 'clamp(24px, 6vw, 48px)', paddingBottom: 'clamp(32px, 8vw, 64px)' }}>
        <form onSubmit={handleSubmit}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(24px, 6vw, 40px)' }}>
            
            {/* FULL NAME */}
            <div>
              <label 
                htmlFor="fullName"
                className="block uppercase"
                style={{
                  fontSize: 'clamp(10px, 2vw, 11px)',
                  letterSpacing: '0.1em',
                  color: '#9CA3AF',
                  fontWeight: 500,
                  marginBottom: 'clamp(8px, 2vw, 12px)'
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
                className="w-full focus:outline-none"
                style={{
                  border: 'none',
                  borderBottom: errors.fullName ? '1px solid #EF4444' : '1px solid #D1D5DB',
                  paddingBottom: 'clamp(8px, 2vw, 12px)',
                  fontSize: 'clamp(14px, 3vw, 16px)',
                  color: '#000000',
                  backgroundColor: 'transparent',
                  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
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
            <div>
              <label 
                htmlFor="email"
                className="block uppercase"
                style={{
                  fontSize: 'clamp(10px, 2vw, 11px)',
                  letterSpacing: '0.1em',
                  color: '#9CA3AF',
                  fontWeight: 500,
                  marginBottom: 'clamp(8px, 2vw, 12px)'
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
                className="w-full focus:outline-none"
                style={{
                  border: 'none',
                  borderBottom: errors.email ? '1px solid #EF4444' : '1px solid #D1D5DB',
                  paddingBottom: 'clamp(8px, 2vw, 12px)',
                  fontSize: 'clamp(14px, 3vw, 16px)',
                  color: '#000000',
                  backgroundColor: 'transparent',
                  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
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

            {/* SUBJECT OF INQUIRY */}
            <div>
              <label 
                htmlFor="subject"
                className="block uppercase"
                style={{
                  fontSize: 'clamp(10px, 2vw, 11px)',
                  letterSpacing: '0.1em',
                  color: '#9CA3AF',
                  fontWeight: 500,
                  marginBottom: 'clamp(8px, 2vw, 12px)'
                }}
              >
                SUBJECT OF INQUIRY
              </label>
              <div style={{ position: 'relative' }}>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full focus:outline-none appearance-none"
                  style={{
                    border: 'none',
                    borderBottom: '1px solid #D1D5DB',
                    paddingBottom: 'clamp(8px, 2vw, 12px)',
                    paddingRight: '24px',
                    fontSize: 'clamp(14px, 3vw, 16px)',
                    color: formData.subject ? '#000000' : '#9CA3AF',
                    backgroundColor: 'transparent',
                    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                    cursor: 'pointer',
                    transition: 'border-color 0.2s'
                  }}
                  onFocus={(e) => e.target.style.borderBottomColor = '#000000'}
                  onBlur={(e) => e.target.style.borderBottomColor = '#D1D5DB'}
                >
                  <option value="" disabled>Select specialized area</option>
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
                    color: '#6B7280'
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
            <div>
              <label 
                htmlFor="message"
                className="block uppercase"
                style={{
                  fontSize: 'clamp(10px, 2vw, 11px)',
                  letterSpacing: '0.1em',
                  color: '#9CA3AF',
                  fontWeight: 500,
                  marginBottom: 'clamp(8px, 2vw, 12px)'
                }}
              >
                MESSAGE / REQUIREMENTS
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full focus:outline-none resize-none"
                style={{
                  border: 'none',
                  borderBottom: '1px solid #D1D5DB',
                  paddingBottom: 'clamp(8px, 2vw, 12px)',
                  fontSize: 'clamp(14px, 3vw, 16px)',
                  color: '#000000',
                  backgroundColor: 'transparent',
                  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                  lineHeight: '1.6',
                  transition: 'border-color 0.2s',
                  minHeight: '80px'
                }}
                placeholder="Describe your requirements..."
                onFocus={(e) => e.target.style.borderBottomColor = '#000000'}
                onBlur={(e) => e.target.style.borderBottomColor = '#D1D5DB'}
              />
            </div>
          </div>

          {/* Primary CTA Button */}
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
                letterSpacing: '0.05em',
                fontWeight: 600,
                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                border: 'none'
              }}
            >
              SEND REQUEST
              <svg 
                style={{
                  width: '16px',
                  height: '16px',
                  marginLeft: '4px'
                }}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            <p 
              style={{
                fontSize: 'clamp(11px, 2vw, 12px)',
                color: '#9CA3AF',
                marginTop: 'clamp(12px, 3vw, 16px)',
                textAlign: 'center',
                fontWeight: 400
              }}
            >
              We typically respond within 24 hours during business days.
            </p>
          </div>
        </form>
      </section>

      {/* Footer / Global Presence Section */}
      <div style={{ marginTop: 'clamp(48px, 12vw, 80px)' }}>
        {/* Divider */}
        <div 
          style={{ 
            borderTop: '1px solid #E5E7EB',
            width: '100%',
            marginBottom: 'clamp(32px, 8vw, 48px)'
          }}
        ></div>

        <section className="max-w-7xl mx-auto px-6 lg:px-8" style={{ paddingBottom: 'clamp(48px, 12vw, 80px)' }}>
          <div className="mb-4">
            <p 
              className="uppercase"
              style={{
                fontSize: 'clamp(10px, 2vw, 11px)',
                letterSpacing: '0.15em',
                color: '#000000',
                fontWeight: 600,
                marginBottom: 'clamp(8px, 2vw, 12px)'
              }}
            >
              GLOBAL PRESENCE
            </p>
            <p 
              className="uppercase"
              style={{
                fontSize: 'clamp(9px, 1.8vw, 10px)',
                letterSpacing: '0.1em',
                color: '#9CA3AF',
                fontWeight: 400,
                marginBottom: 'clamp(24px, 6vw, 32px)'
              }}
            >
              HEADQUARTERS & OPERATIONAL HUBS
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(24px, 6vw, 32px)' }}>
            {/* NEW YORK */}
            <div>
              <p 
                className="uppercase"
                style={{
                  fontSize: 'clamp(14px, 3vw, 16px)',
                  fontWeight: 700,
                  color: '#000000',
                  letterSpacing: '0.05em',
                  marginBottom: 'clamp(4px, 1vw, 6px)'
                }}
              >
                NEW YORK
              </p>
              <p 
                style={{
                  fontSize: 'clamp(12px, 2.5vw, 13px)',
                  color: '#6B7280',
                  fontWeight: 400,
                  marginBottom: 'clamp(2px, 0.5vw, 4px)'
                }}
              >
                NORTH AMERICA HUB
              </p>
              <p 
                style={{
                  fontSize: 'clamp(11px, 2vw, 12px)',
                  color: '#9CA3AF',
                  fontWeight: 400
                }}
              >
                UTC-5
              </p>
            </div>

            {/* LONDON */}
            <div>
              <p 
                className="uppercase"
                style={{
                  fontSize: 'clamp(14px, 3vw, 16px)',
                  fontWeight: 700,
                  color: '#000000',
                  letterSpacing: '0.05em',
                  marginBottom: 'clamp(4px, 1vw, 6px)'
                }}
              >
                LONDON
              </p>
              <p 
                style={{
                  fontSize: 'clamp(12px, 2.5vw, 13px)',
                  color: '#6B7280',
                  fontWeight: 400,
                  marginBottom: 'clamp(2px, 0.5vw, 4px)'
                }}
              >
                EMEA HUB
              </p>
              <p 
                style={{
                  fontSize: 'clamp(11px, 2vw, 12px)',
                  color: '#9CA3AF',
                  fontWeight: 400
                }}
              >
                UTC+0
              </p>
            </div>

            {/* TOKYO */}
            <div>
              <p 
                className="uppercase"
                style={{
                  fontSize: 'clamp(14px, 3vw, 16px)',
                  fontWeight: 700,
                  color: '#000000',
                  letterSpacing: '0.05em',
                  marginBottom: 'clamp(4px, 1vw, 6px)'
                }}
              >
                TOKYO
              </p>
              <p 
                style={{
                  fontSize: 'clamp(12px, 2.5vw, 13px)',
                  color: '#6B7280',
                  fontWeight: 400,
                  marginBottom: 'clamp(2px, 0.5vw, 4px)'
                }}
              >
                APAC HUB
              </p>
              <p 
                style={{
                  fontSize: 'clamp(11px, 2vw, 12px)',
                  color: '#9CA3AF',
                  fontWeight: 400
                }}
              >
                UTC+9
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ConsultExpert;
