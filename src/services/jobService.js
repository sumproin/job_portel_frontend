import apiClient from './api';

const jobService = {
  // Get all jobs with filters
  async getJobs(filters = {}) {
    try {
      const response = await apiClient.get('/api/jobs', { params: filters });
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Get job by ID
  async getJobById(jobId) {
    try {
      const response = await apiClient.get(`/api/jobs/${jobId}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Search jobs
  async searchJobs(query, filters = {}) {
    try {
      const response = await apiClient.get('/api/jobs/search', {
        params: { q: query, ...filters },
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Get featured jobs
  async getFeaturedJobs() {
    try {
      const response = await apiClient.get('/api/jobs/featured');
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Apply for a job (Job Seeker only)
  async applyForJob(jobId, applicationData) {
    try {
      const response = await apiClient.post(`/api/jobs/${jobId}/apply`, applicationData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Get user's job applications
  async getMyApplications(filters = {}) {
    try {
      const response = await apiClient.get('/api/jobs/my-applications', { params: filters });
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Get application status
  async getApplicationStatus(applicationId) {
    try {
      const response = await apiClient.get(`/api/jobs/applications/${applicationId}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
};

export default jobService;
