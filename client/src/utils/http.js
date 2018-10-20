import axios from 'axios'
import store from '../store'
// 请求拦截

// 设置统一的header
axios.interceptors.request.use(request => {
    // 请求的时候会转，请求完了后就会转到下面的响应拦截然后消失
    if(localStorage.jwtToken){
        request.headers.Authorization = localStorage.jwtToken;
    }
    return request;
},error => {
    return Promise.reject(error);
});



//响应拦截 
axios.interceptors.response.use(response => {
    return response;
},error => {
    return Promise.reject(error);
});

export default axios;


