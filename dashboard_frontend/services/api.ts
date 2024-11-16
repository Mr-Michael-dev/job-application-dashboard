import axios from 'axios';

const apiUrl = 'https://job-application-dashboard-2ubt.onrender.com'; // Backend base URL

export const getApplications = async () => {
    // get all applications
  const response = await axios.get(`${apiUrl}/applications`);
  return response.data;
};

export const getApplicationStats = async () => {
    // get application stats
  const response = await axios.get(`${apiUrl}/applications/stats`);
  return response.data;
};
