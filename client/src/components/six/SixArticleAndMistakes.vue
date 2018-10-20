<template>
<div class="myarticle">
<nav>
    <ul>
      <li><router-link :to="`/mysixmistakes/${handle}`">查看我的错题</router-link></li>
      <li><router-link :to="`/mysixarticle/${handle}`">查看原文</router-link></li>
    </ul>
</nav>
<router-view></router-view>
</div>
</template>
<script>
 

export default {
        name: 'SixArticleAndMistakes',
        data() {
            return {
                handle:""
            };
        },
        beforeRouteEnter(to,from,next){
          next(vm => {
            console.log(to);
            vm.handle = to.params.handle;
          });
    }
}
</script>

<style scoped>
.myarticle{
        height:2000px;
}
.myarticle ul{
	list-style-type: none;
	text-align: center;
	margin: 0;
}
.myarticle li{
  display: inline-block;
  margin: 0 5%;
  width:10%;
  height:45px;
  border-radius: 20px;
  line-height: 45px;
  text-align: center;
  background: #DF5048;
}


.myarticle li:hover{
  box-shadow: 2px 2px 5px #ccc;
}

.myarticle a{
  color: #fff;
  text-decoration: none;
  padding: 12px;
}

.myarticle nav{
        border-bottom: 3px solid #DF5048;
        padding: 25px 0;
        margin-bottom: 40px;
}

</style>
