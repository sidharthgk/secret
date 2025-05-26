import axios, { AxiosResponse } from 'axios';
import keycloak from '../keycloak';

const api = axios.create({
  baseURL: '/api', 
  timeout: 10000,
});

const PRACTICE_ID = '80664e87-778f-4d17-a10e-4c5a35185138';

api.interceptors.request.use(
  (config) => {
    if (keycloak.token) {
      config.headers.Authorization = `Bearer ${keycloak.token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const original = error.config;
    
    if (error.response?.status === 401 && !original._retry) {
      original._retry = true;
      
      try {
        // Try to refresh the token
        const refreshed = await keycloak.updateToken(5);
        if (refreshed) {
          original.headers.Authorization = `Bearer ${keycloak.token}`;
          return api(original);
        } else {
          // Token couldn't be refreshed, redirect to login
          keycloak.login();
        }
      } catch (refreshError) {
        // Refresh failed, redirect to login
        keycloak.login();
      }
    }
    
    return Promise.reject(error);
  }
);

export const getPatientFeedback = (
  page: number = 0,
  size: number = 10
): Promise<AxiosResponse<any>> => 
  api.get('/dashboard/patient-feedback', {
    params: { 
      practiceId: PRACTICE_ID, 
      page, 
      size 
    }
  });

export const getAppUsers = (
  page: number = 0,
  size: number = 10
): Promise<AxiosResponse<any>> => {
  console.log('Making API call to:', `/dashboard/app-users`);
  console.log('With params:', { practiceId: PRACTICE_ID, page, size });
  
  return api.get('/dashboard/app-users', {
    params: { 
      practiceId: PRACTICE_ID, 
      page, 
      size 
    }
  });
};

export default api;