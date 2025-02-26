import axios from 'axios';

const BASE_URL = 'https://fedskillstest.coalitiontechnologies.workers.dev';
const AUTH_KEY = 'Basic Y29hbGl0aW9uOnNraWxscy10ZXN0';

export const getPatientData = async () => {
  try {
    const response = await axios.get(BASE_URL, {
      headers: {
        Authorization: AUTH_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching patient data:', error);
    return null;
  }
};
