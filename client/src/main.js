import Vue from 'vue'
import App from './App'
import router from './router'
import axios from './utils/http'
import store from './store'
import 'lib-flexible'
import $ from 'jquery' ;
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

Vue.prototype.$axios = axios
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

Vue.config.productionTip = false

// 全局守卫
router.beforeEach((to,from,next) => {
  if(to.path == '/login' || to.path =='/register' ){
      next();
  }else{
      if(!isEmpty(localStorage.jwtToken)){
          next();
      }else{
           next('/login');
      }
  }
})

const isEmpty = value => {
  return value == undefined || value == null ||
      (typeof value === "object" && Object.keys(value).length === 0)
  || (typeof value === "string" && value.trim().length === 0)
}



/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})


