/**
 * Cookie Consent Utility
 * Handles localStorage operations for cookie consent with 6-month expiry
 */

const CONSENT_KEY = 'cookie_consent';
const EXPIRY_MONTHS = 6;

/**
 * Get consent from localStorage
 * @returns {Object|null} Consent object or null if expired/missing
 */
export const getConsent = () => {
  try {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) return null;

    const consent = JSON.parse(stored);
    const now = Date.now();

    // Check if consent has expired
    if (consent.expiresAt && consent.expiresAt < now) {
      localStorage.removeItem(CONSENT_KEY);
      return null;
    }

    return consent;
  } catch (error) {
    console.error('Error reading consent:', error);
    return null;
  }
};

/**
 * Save consent to localStorage with 6-month expiry
 * @param {Object} consentData - Consent preferences
 * @param {boolean} consentData.necessary - Always true
 * @param {boolean} consentData.analytics - Analytics cookies
 * @param {boolean} consentData.marketing - Marketing cookies
 */
export const saveConsent = (consentData) => {
  try {
    const now = Date.now();
    const expiresAt = now + (EXPIRY_MONTHS * 30 * 24 * 60 * 60 * 1000); // 6 months in milliseconds

    const consent = {
      consent: {
        necessary: consentData.necessary !== undefined ? consentData.necessary : true,
        analytics: consentData.analytics || false,
        marketing: consentData.marketing || false
      },
      expiresAt: expiresAt,
      savedAt: now
    };

    localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
    return consent;
  } catch (error) {
    console.error('Error saving consent:', error);
    return null;
  }
};

/**
 * Check if consent exists and is valid
 * @returns {boolean}
 */
export const hasValidConsent = () => {
  const consent = getConsent();
  return consent !== null && consent.consent !== undefined;
};
