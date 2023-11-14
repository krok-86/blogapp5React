// instance axios + baseURL

import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: 'http://localhost:3003/blog',
});

export default axiosInstance;
