<template>
<div class="tedhomepage">
    <ul class="tedhomepage1">
      <li v-if="titles" v-for="(item,index) in titles">
          <router-link  :to="`/ted/tedsingletalk/${index+1}`">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-TED"></use>
            </svg>
             <p class="day">day{{index+1}}</p>
            <p class="item">{{item}}</p>
          </router-link>
    </li>
    </ul>
</div>

</template>

<script>
export default {
        name: 'TedHomePage',
        data() {
            return {
                titles:[]
            };
        },
        created(){
            this.getAll();
        },
        methods:{
            getAll(){
                this.$axios.get("http://localhost:5000/api/listen/ted/all")
                .then(res => {
                    for(var i = 0; i < res.data.length;i++){
                        this.titles.push(res.data[i].title);
                    }
                }).catch(err => {
                    console.log(err.response);
                }); 
            }
        }
       
}
</script>

<style scoped>
.icon {
   width: 3em; height: 3em;
   vertical-align: -0.15em;
   fill: currentColor;
   overflow: hidden;
}
    .tedhomepage1{
        font-size:20px;
      margin: 20px auto;
      width:80%;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -ms-flex-pack:distribute;
          justify-content:space-around;
      -ms-flex-wrap: wrap;
          flex-wrap: wrap;
    }



    .tedhomepage1 li{
    overflow:hidden;
      border:3px solid #DF5048;
      width:20%;
      height:220px;
      margin:30px;
      text-align: center;
      border-radius: 20px;
      -webkit-box-shadow: 8px 8px 8px #ccc;
              box-shadow: 8px 8px 8px #ccc;
      opacity: 0.8;
       -webkit-transition: all 0.2s ease;
       transition: all 0.2s ease;
    }

    .tedhomepage1 li:hover{
      -webkit-transform: translate(5px,5px);
              transform: translate(5px,5px);
    }

.day{
    color:#FF5538;
    padding-bottom:20px;
    border-bottom:2px solid #DF5048;
    font-size:23px;
}


    
@media(max-width:480px){
.icon {
   width: 3em; height: 3em;
   vertical-align: -0.40em;
   fill: currentColor;
   overflow: hidden;
}

.tedhomepage1{
     font-size:22px;
}
 .tedhomepage1 li{
      overflow:hidden;
      padding:10px;
      border:3px solid #DF5048;
      width:40%;
      height:250px;
      margin:20px;
      text-align: center;
      border-radius: 20px;
      -webkit-box-shadow: 8px 8px 8px #ccc;
              box-shadow: 8px 8px 8px #ccc;
      opacity: 0.8;
       -webkit-transition: all 0.2s ease;
       transition: all 0.2s ease;
    }
}


.day{
    color:#FF5538;
    padding-bottom:10px;
    border-bottom:2px solid #DF5048;
    font-size:23px;
}

</style>
