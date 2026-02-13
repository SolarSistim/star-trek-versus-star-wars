// Visitor Tracking Script
// Sends visitor data to Netlify function for logging to Google Sheets

(function() {
  'use strict';

  // Generate a session ID if not already set
  function getSessionId() {
    let sessionId = sessionStorage.getItem('sessionId');
    if (!sessionId) {
      sessionId = 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
      sessionStorage.setItem('sessionId', sessionId);
    }
    return sessionId;
  }

  // Detect device type
  function getDeviceType() {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      return 'Tablet';
    }
    if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
      return 'Mobile';
    }
    return 'Desktop';
  }

  // Get screen resolution
  function getScreenResolution() {
    return `${window.screen.width}x${window.screen.height}`;
  }

  // Get user language
  function getUserLanguage() {
    return navigator.language || navigator.userLanguage || 'Unknown';
  }

  // Get user timezone
  function getUserTimezone() {
    try {
      return Intl.DateTimeFormat().resolvedOptions().timeZone;
    } catch (e) {
      return 'Unknown';
    }
  }

  // Send visitor data to Netlify function
  async function logVisit() {
    try {
      const visitorData = {
        domain: window.location.hostname,
        referrer: document.referrer || 'Direct',
        urlPath: window.location.pathname,
        sessionId: getSessionId(),
        deviceType: getDeviceType(),
        userAgent: navigator.userAgent,
        screenResolution: getScreenResolution(),
        language: getUserLanguage(),
        timezone: getUserTimezone(),
        sheetName: 'visitor_logs' // or 'page_views' depending on your needs
      };

      const response = await fetch('/.netlify/functions/log-visit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(visitorData)
      });

      if (!response.ok) {
        console.warn('Failed to log visit:', response.statusText);
      }
    } catch (error) {
      console.warn('Error logging visit:', error);
    }
  }

  // Log visit when page loads
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', logVisit);
  } else {
    logVisit();
  }
})();
