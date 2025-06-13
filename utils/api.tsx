import axios from 'axios';
import Cookies from 'js-cookie';

const token = Cookies.get('XSRF-TOKEN');

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000/api/v1',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-XSRF-TOKEN': token || '',
    },
    withCredentials: true, 
    validateStatus: () => true,
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