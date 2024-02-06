import axios from 'axios';

export const axiosService = axios.create({
    baseURL: 'https://events.johngaitho.info/apidocs/api/v1',
});

axiosService.interceptors.request.use(async (req) => {
    let token = localStorage.getItem('userToken');
    if (token) {
        req.headers['x-access-token'] = token;
    }
    return req;
});
