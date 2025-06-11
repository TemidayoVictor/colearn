import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000/api/v1',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With',
        'Content-Type': 'application/json',
    },
    withCredentials: true, 
});

axiosInstance.interceptors.response.use(
    response => response,
    error => {
    // You can handle global errors here (e.g., token expired, 401 redirect, etc.)
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
    }
);
  
export default axiosInstance;