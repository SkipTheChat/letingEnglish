<template>
  <div class="login">
     <div class="container">
      <div class="row">
        <div class="col-md-8 m-auto col-md-offset-2">
          <h1 class="display-4 text-center">登录</h1>
          <p class="lead text-center">使用已有账号登录</p>
          <form @submit.prevent="submit()">
            <div class="form-group">
              <input type="text" class="form-control form-control-lg input-lg" placeholder="学号" name="SchoolNumber" v-model="user.SchoolNumber"/>
			  <div class="errinfo" v-if="errors.SchoolNumber">{{errors.SchoolNumber}}</div>
            </div>
            <div class="form-group">
              <input type="password" class="form-control form-control-lg input-lg" placeholder="密码" name="password" v-model="user.password"/>
			  <div class="errinfo" v-if="errors.password">{{errors.password}}</div>
            </div>
            <input type="submit" class="btn btn-info btn-block mt-4 btn-color input-lg"  value="登录"/>
          </form>
        </div>
      </div>
    </div>     
  </div>
</template>

<script>
import jwtDecode from 'jwt-decode'

export default {
    name: 'Login',
    data(){
        return{
            user:{
                SchoolNumber:"",
                password:""
            },
            errors:""
        };
        },
     
    methods:{
        submit(){
                this.$axios.post('http://localhost:5000/api/users/login',this.user).then(res => {
                    const {token} = res.data;
                    localStorage.setItem('jwtToken',token);
                    const decoded = jwtDecode(token);
                    this.$store.dispatch("setIsAuthenticated",!this.isEmpty(decoded));
                    this.$store.dispatch("setUser",decoded);
                    this.$router.push("/");
                    }).catch(err => {
                        this.errors = err.response.data;
                        console.log(this.errors);
                    });
        },
        isEmpty(value){
              return value == undefined || value == null ||
                  (typeof value === "object" && Object.keys(value).length === 0)
              || (typeof value === "string" && value.trim().length === 0)
            }
    }
} 
</script>

<style scoped>
.errinfo{
	font-size:12px;
	color:#A94442;
}

.btn-color{
  background:#A94442;
  font-size:20px;
}


.login{
  margin-top:150px;
}



</style>

