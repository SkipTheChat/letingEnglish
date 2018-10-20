<template>
<div class="myarticle">
        <p v-for="(thearticle) in article1">
                {{thearticle}}
        </p>
</div>
</template>
<script>
export default {
        name: 'Myarticle',
        data() {
            return {
                year:"",
                article:"",
                article1:""
            };
        },
          beforeRouteEnter(to,from,next){
        next(vm => {
            vm.getListenHandle(to.params.handle);
        });
    },
        methods:{
          getListenHandle(handle){
            // 得到题目渲染页面
            this.$axios.get(`http://localhost:5000/api/listen/four/handle/${handle}`)
            .then(res => {
                this.year = res.data.year;
                this.article =JSON.parse(res.data.article).article;
                this.article1 = this.article.split("\n");
            }).catch(err => {
                console.log(err.response);
            });
        },
        }
}
</script>

<style scoped>
.myarticle{
    width:70%;
    margin:10px auto;
}
</style>
