import axios from "axios";
const AUTH_TOKEN = localStorage.jsonk_token; //获取本地存储中的token
axios.defaults.baseURL = 'https://pc.ltyes.com' || process.env.baseURL || process.env.apiUrl;
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN; //携带token
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let config = {
  baseURL: process.env.baseURL || process.env.apiUrl || "",
  timeout: 60 * 1000, // Timeout
  withCredentials: true, // Check cross-site Access-Control
};
const _axios = axios.create(config);
//请求拦截
_axios.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
//响应拦截
_axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
window.axios = _axios;
export default _axios;