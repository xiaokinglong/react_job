// important: axios的封装
import axios from 'axios';

axios.defaults.baseURL = 'https://restapi.amap.com/v3/';
axios.withCredentials = false; // 默认的

// tips: 设置请求拦截
axios.interceptors.request.use(
	(config) => {
		console.log(config);
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

// tips: 设置响应拦截
axios.interceptors.response.use(
	function(res) {
		return res.data;
	},
	function(error) {
		return Promise.reject(error);
	}
);

export default axios;
