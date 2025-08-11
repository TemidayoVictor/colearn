import axios from 'axios';
import Cookies from 'js-cookie';

const axiosInstanceWeb = axios.create({
    // baseURL: 'http://localhost:8000',
    baseURL: 'https://backend.colearnglobal.com',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    withCredentials: true, 
    validateStatus: () => true,
});

axiosInstanceWeb.interceptors.request.use(config => {
    const freshToken = Cookies.get('XSRF-TOKEN');
    if (freshToken) {
      config.headers['X-XSRF-TOKEN'] = decodeURIComponent(freshToken);
    }
    return config;
});
  
export default axiosInstanceWeb;