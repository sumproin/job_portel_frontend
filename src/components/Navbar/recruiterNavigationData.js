// src/components/Navbar/recruiterNavigationData.js

export const postJobMenuItems = [
  { label: 'How to Post a Job', path: '/recruiter/guide/post-job' },
  { label: 'Job Posting Best Practices', path: '/recruiter/guide/best-practices' },
  { label: 'Pricing & Plans', path: '/recruiter/pricing' },
  { label: 'Post a Job Now', path: '/recruiter/post-job', highlight: true },
];

export const manageJobsMenuItems = [
  { label: 'All Jobs', path: '/recruiter/jobs' },
  { label: 'Active Jobs', path: '/recruiter/jobs/active' },
  { label: 'Draft Jobs', path: '/recruiter/jobs/drafts' },
  { label: 'Closed Jobs', path: '/recruiter/jobs/closed' },
  { label: 'Job Performance', path: '/recruiter/jobs/analytics' },
];

export const applicationsMenuItems = [
  { label: 'All Applications', path: '/recruiter/applications' },
  { label: 'New Applications', path: '/recruiter/applications/new' },
  { label: 'Shortlisted', path: '/recruiter/applications/shortlisted' },
  { label: 'Interviewed', path: '/recruiter/applications/interviewed' },
  { label: 'Rejected', path: '/recruiter/applications/rejected' },
];

export const candidatesMenuItems = [
  { label: 'Search Candidates', path: '/recruiter/candidates/search' },
  { label: 'Saved Candidates', path: '/recruiter/candidates/saved' },
  { label: 'Candidate Database', path: '/recruiter/candidates/database' },
  { label: 'Talent Pool', path: '/recruiter/candidates/pool' },
];

export const companyProfileMenuItems = [
  { label: 'View Company Profile', path: '/recruiter/company/profile' },
  { label: 'Edit Profile', path: '/recruiter/company/edit' },
  { label: 'Verification Status', path: '/recruiter/company/verification' },
  { label: 'Company Reviews', path: '/recruiter/company/reviews' },
];

export const recruiterAccountMenuItems = [
  { label: 'Recruiter Profile', path: '/recruiter/profile', icon: 'person' },
  { label: 'Company Verification', path: '/recruiter/verification', icon: 'verified', badge: true },
  { label: 'Billing & Plans', path: '/recruiter/billing', icon: 'payment' },
  { label: 'Settings', path: '/recruiter/settings', icon: 'settings' },
  { label: 'Help & Support', path: '/recruiter/support', icon: 'help' },
  { label: 'Logout', path: '/logout', icon: 'logout', divider: true },
];
