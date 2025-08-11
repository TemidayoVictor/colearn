import axios from 'axios';
import Cookies from 'js-cookie';

const token = Cookies.get('XSRF-TOKEN');

const axiosInstance = axios.create({
    // baseURL: 'http://localhost:8000/api/v1',
    baseURL: 'https://backend.colearnglobal.com/api/v1',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-XSRF-TOKEN': token || '',
    },
    withCredentials: true, 
    validateStatus: () => true,
});

axiosInstance.interceptors.request.use(config => {
    const freshToken = Cookies.get('XSRF-TOKEN');
    if (freshToken) {
      config.headers['X-XSRF-TOKEN'] = decodeURIComponent(freshToken);
    }
    return config;
});
  
export default axiosInstance;