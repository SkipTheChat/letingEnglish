<template>
  <div class="register">
    <div class="container">
      <div class="row">
        <div class="col-md-8 m-auto col-md-offset-2">
          <h1 class="display-4 text-center">注册</h1>
          <p class="lead text-center">创建新的账户</p>
		  <div class="errinfo" v-if="errors.occupied">{{errors.occupied}}</div>
          <form @submit.prevent="submit()">
            <div class="form-group">
              <input type="text" class="form-control form-control-lg input-lg" placeholder="姓名" name="name" v-model="newUser.name"/>
			  <div class="errinfo" v-if="errors.name">{{errors.name}}</div>
            </div>
            <div class="form-group">
              <input type="text" class="form-control form-control-lg input-lg" placeholder="学号" name="SchoolNumber" v-model="newUser.SchoolNumber"/>
			  <div class="errinfo" v-if="errors.SchoolNumber">{{errors.SchoolNumber}}</div>
            </div>
            <div class="form-group">
              <input type="password" class="form-control form-control-lg input-lg" placeholder="密码" name="password" v-model="newUser.password"/>
			  <div class="errinfo" v-if="errors.password">{{errors.password}}</div>
            </div>
            <div class="form-group">
              <input type="password" class="form-control form-control-lg input-lg" placeholder="确认密码" name="password2" v-model="newUser.password2"/>
			  <div class="errinfo" v-if="errors.password2">{{errors.password2}}</div>
            </div>
            <input type="submit" class="btn btn-info btn-block mt-4 btn-color input-lg" value="注册"/>
          </form>
		   
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
        name: 'Register',
        data() {
            return {
                newUser: {
                    name: "",
					SchoolNumber: "",
                    password: "",
                    password2: ""
                },
                errors: {}
            };
        },
        methods: {
            submit() {
                this.$axios.post('http://localhost:5000/api/users/register',this.newUser).then(res => {
						this.$store.dispatch('setUser',res.data);
							this.$router.push('/login');
                    }).catch(err => {
                        if(err.response.data){
                            this.errors = err.response.data;
                        }
                    });
            }
        },
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

.register{
  margin-top:100px;
}




</style>
