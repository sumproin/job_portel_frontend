import apiClient from './api';

const AUTH_TOKEN_KEY = import.meta.env.VITE_AUTH_TOKEN_KEY;
const AUTH_USER_KEY = import.meta.env.VITE_AUTH_USER_KEY;

const authService = {
  // JobSeeker Login
  async jobSeekerLogin(email, password) {
    try {
      const response = await apiClient.post('/api/auth/jobseeker/login', {
        email,
        password,
      });
      
      const { token, user } = response.data;
      
      // Store token and user info
      localStorage.setItem(AUTH_TOKEN_KEY, token);
      localStorage.setItem(AUTH_USER_KEY, JSON.stringify({ ...user, type: 'jobseeker' }));
      
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // JobSeeker Signup
  async jobSeekerSignup(userData) {
    try {
      const response = await apiClient.post('/api/auth/jobseeker/register', userData);
      
      const { token, user } = response.data;
      
      // Store token and user info
      localStorage.setItem(AUTH_TOKEN_KEY, token);
      localStorage.setItem(AUTH_USER_KEY, JSON.stringify({ ...user, type: 'jobseeker' }));
      
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Recruiter Login
  async recruiterLogin(email, password) {
    try {
      const response = await apiClient.post('/api/auth/recruiter/login', {
        email,
        password,
      });
      
      const { token, user } = response.data;
      
      // Store token and user info
      localStorage.setItem(AUTH_TOKEN_KEY, token);
      localStorage.setItem(AUTH_USER_KEY, JSON.stringify({ ...user, type: 'recruiter' }));
      
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Recruiter Signup
  async recruiterSignup(userData) {
    try {
      const response = await apiClient.post('/api/auth/recruiter/register', userData);
      
      const { token, user } = response.data;
      
      // Store token and user info
      localStorage.setItem(AUTH_TOKEN_KEY, token);
      localStorage.setItem(AUTH_USER_KEY, JSON.stringify({ ...user, type: 'recruiter' }));
      
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Email OTP Verification for Recruiter
  async verifyEmailOTP(email, otp) {
    try {
      const response = await apiClient.post('/api/auth/recruiter/verify-email-otp', {
        email,
        otp,
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Phone OTP Verification for Recruiter
  async verifyPhoneOTP(phone, otp) {
    try {
      const response = await apiClient.post('/api/auth/recruiter/verify-phone-otp', {
        phone,
        otp,
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Logout
  logout() {
    localStorage.removeItem(AUTH_TOKEN_KEY);
    localStorage.removeItem(AUTH_USER_KEY);
  },

  // Get current user
  getCurrentUser() {
    const user = localStorage.getItem(AUTH_USER_KEY);
    return user ? JSON.parse(user) : null;
  },

  // Get auth token
  getAuthToken() {
    return localStorage.getItem(AUTH_TOKEN_KEY);
  },

  // Check if user is authenticated
  isAuthenticated() {
    return !!localStorage.getItem(AUTH_TOKEN_KEY);
  },

  // Update user profile
  async updateProfile(userId, profileData) {
    try {
      const response = await apiClient.put(`/api/users/${userId}/profile`, profileData);
      
      // Update local user data
      const updatedUser = { ...this.getCurrentUser(), ...response.data };
      localStorage.setItem(AUTH_USER_KEY, JSON.stringify(updatedUser));
      
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Request password reset
  async requestPasswordReset(email) {
    try {
      const response = await apiClient.post('/api/auth/request-password-reset', { email });
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Reset password
  async resetPassword(token, newPassword) {
    try {
      const response = await apiClient.post('/api/auth/reset-password', {
        token,
        newPassword,
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Social Login (Google, LinkedIn, etc.)
  async socialLogin(provider, token) {
    try {
      const response = await apiClient.post(`/api/auth/social-login/${provider}`, {
        token,
      });
      
      const { token: authToken, user } = response.data;
      
      localStorage.setItem(AUTH_TOKEN_KEY, authToken);
      localStorage.setItem(AUTH_USER_KEY, JSON.stringify(user));
      
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
};

export default authService;
