<template>
  <div id="app">
    <app-navbar></app-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import './js/iconfont.js'

import NavBar from './components/NavBar'
import jwtDecode from 'jwt-decode';
 

export default {
  name: 'App',
  components: {
      "app-navbar":NavBar
		
  },
  // 不管刷新还是重新开启浏览器，都会检验一下localStorage是否有token
  // 如果有的话，就存到setIsAuthenticated和setUser,不至于因为刷新就变成不是登录状态了。
  created(){
     if(localStorage.jwtToken){
        const decoded = jwtDecode(localStorage.jwtToken);
        const currentTime = Date.now() / 1000;//转换成秒
        // 处理token过期
          if(decoded.exp < currentTime){ 
              this.$store.dispatch('clearCurrentState');
            this.$router.push('/login');
          }else{
            this.$store.dispatch("setIsAuthenticated",!this.isEmpty(decoded));
            this.$store.dispatch("setUser",decoded);
          }
      }
  },
  methods:{
     isEmpty(value){
              return value == undefined || value == null ||
                  (typeof value === "object" && Object.keys(value).length === 0)
              || (typeof value === "string" && value.trim().length === 0)
            }
  }
 
}
</script>


