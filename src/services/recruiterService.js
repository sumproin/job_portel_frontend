import apiClient from './api';

const recruiterService = {
  // Create job posting
  async createJobPosting(jobData) {
    try {
      const response = await apiClient.post('/api/recruiter/jobs', jobData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Update job posting
  async updateJobPosting(jobId, jobData) {
    try {
      const response = await apiClient.put(`/api/recruiter/jobs/${jobId}`, jobData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Delete job posting
  async deleteJobPosting(jobId) {
    try {
      const response = await apiClient.delete(`/api/recruiter/jobs/${jobId}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Get recruiter's job postings
  async getMyJobs(filters = {}) {
    try {
      const response = await apiClient.get('/api/recruiter/jobs', { params: filters });
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Get applications for a job
  async getJobApplications(jobId, filters = {}) {
    try {
      const response = await apiClient.get(`/api/recruiter/jobs/${jobId}/applications`, {
        params: filters,
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Update application status
  async updateApplicationStatus(applicationId, status) {
    try {
      const response = await apiClient.put(`/api/recruiter/applications/${applicationId}`, {
        status,
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Submit company verification
  async submitCompanyVerification(companyData) {
    try {
      const response = await apiClient.post('/api/recruiter/company-verification', companyData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Get company verification status
  async getCompanyVerificationStatus() {
    try {
      const response = await apiClient.get('/api/recruiter/company-verification/status');
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Get recruiter dashboard stats
  async getDashboardStats() {
    try {
      const response = await apiClient.get('/api/recruiter/dashboard/stats');
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
};

export default recruiterService;
