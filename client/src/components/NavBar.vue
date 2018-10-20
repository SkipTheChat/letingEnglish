<template>
<div class="header">
	<header id="header">
	<nav class="link">
	    <ul class="left">
	    	<li class="grand"><router-link to="/"> 乐听English <span class="line">&nbsp;|</span></router-link></li>
	    	 <li><router-link to="/homepagefour"> &nbsp;四级听力 <span class="line">&nbsp;|</span></router-link></li>
			  <li><router-link to="/homepagesix">&nbsp; 六级听力 <span class="line">&nbsp;|</span></router-link></li>
			  <li><router-link to="/ted/tedhomepage"> &nbsp;TED演讲 <span class="line">&nbsp;|</span></router-link></li>
	        <li><router-link to="/achievement"> &nbsp;我的成绩<span class="line">&nbsp;|</span></router-link></li>
	      </ul>
         <div class="clear"></div>
	    <div>
	      <ul class="right">


	        <li v-if="user"><router-link to='/login' class="nav-link"  @click.native = "logout"> 退出<span class="line">&nbsp;|</span></router-link></li>
			 <li v-if="user && name">
				   <router-link to='/' class="nav-link"><span class="line">&nbsp;|</span>&nbsp;{{name}} <span class="line">&nbsp;| </span></router-link>
				</li>

	        <li><router-link v-if="!user" to="/login"> &nbsp;登录 <span class="line">&nbsp;|</span></router-link></li>
	        <li><router-link v-if="!user" to="/register">&nbsp; 注册 <span class="line">&nbsp;|</span></router-link></li>
	      </ul>
	    <div class="clear"></div>
	    </div>
	</nav>  
</header>
</div>
</template>
<script>
export default {
        name: 'NavBar',
        data() {
            return {
				name:"",
				schoolNumber:""
            };
        },
created(){
	this.getInfo();
},
methods:{
   logout(){
        localStorage.removeItem('jwtToken');
        this.$store.dispatch('clearCurrentState');
        this.$router.push('/login');
      },
	   getInfo(){
		   if(this.$store.getters.user){
				this.name = this.$store.getters.user.name;
				this.schoolNumber = this.$store.getters.user.SchoolNumber;
		   }
		
	  }
},
computed:{
  user(){
	  if(this.$store.getters.isAuthenticated){
		return this.$store.getters.isAuthenticated;
	  }
    
    }
  }
}
</script>

<style scoped>

#header{
	width: 100%;
	width:100%;
	height: 50px;
	border-bottom:3px solid #DF5048;
	font-size:26px;
}

#header li{
	height:50px;
	line-height: 50px;
	/*text-align: center;*/
}

#header .grand a{ 
	color:#DF5048;
	font-size:28px;
	}


#header .left{
	float: left;
}
#header .left li{
	float:left;
}

#header .right{
	float: right;
}
#header .right li{
	float:right;
}

#header a:hover{
	color:#DF5048;
}

#header .line{
	color:#DF5048;
}

#header a{
	color:#000;
}

@media(max-width:480px){
	#header{
		font-size: 20px;
	}
}

</style>
