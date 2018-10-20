 <template>
<div class="tedsingletalk">
    <h1 class="title">{{title}}</h1>
  <div v-if="urlsrc" class="srcaudio">
       <audio :src="urlsrc"  controls="controls">
         您的浏览器不支持html5
       </audio>
  </div>
  <div>
      <p v-for="item in article" class="item">
          {{item}}
      </p>
  </div>
</div>

</template>

<script>

export default {
        name: 'TedSingleTalk',
        data() {
            return {
              urlsrc:"",
              title:"",
              article:[]

            };
    },
     beforeRouteEnter(to,from,next){
        next(vm => {
          vm.getAll(to.params.handle);
        });
    },
    methods:{
        getAll(handle){
                this.$axios.get("http://localhost:5000/api/listen/ted/" + handle)
                .then(res => {
                    this.urlsrc = res.data.urlsrc;
                    this.title = res.data.title;
                    this.article = (JSON.parse(res.data.article).article).split("\n");
                }).catch(err => {
                    console.log(err.response);
                }); 
            }
    }
}
</script>

<style scoped>

.tedsingletalk{
    width:70%;
    margin:10px auto;
    font-size: 21px;
}


.title{
    text-align: center;
    margin:50px 0;
}

.item{
    margin:80px 0;
}
</style>
