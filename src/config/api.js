// API configuration
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export const API_ENDPOINTS = {
  CONTACT: `${API_BASE_URL}/api/crm/contact`,
  HEALTH: `${API_BASE_URL}/api/health`
};

export default API_BASE_URL;