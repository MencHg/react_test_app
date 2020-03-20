import axios from "axios";
import Loading from "./loading"
const AUTH_TOKEN = localStorage.jsonk_token; //获取本地存储中的token
axios.defaults.baseURL = 'https://pc.ltyes.com' || process.env.baseURL || process.env.apiUrl;
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN; //携带token
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
let loadding = new Loading()
let config = {
  baseURL: process.env.baseURL || process.env.apiUrl || "",
  timeout: 60 * 1000, // Timeout
  withCredentials: true, // Check cross-site Access-Control
};
const _axios = axios.create(config);
//请求拦截
_axios.interceptors.request.use(
  function (config) {
    loadding.open()
    return config;
  },
  function (error) {
    loadding.close()
    return Promise.reject(error);
  }
);
//响应拦截
_axios.interceptors.response.use(
  function (response) {
    loadding.close()
    return response;
  },
  function (error) {
    loadding.close()
    return Promise.reject(error);
  }
);
window.axios = _axios;
// export default _axios;