<template>
<div class="sixachievement">
    <ul class="sixachievemenul">
      <li v-if="achievements" v-for="(achievement,index) in achievements">
          <router-link class="daylocation" :to="`/sixarticleandmistakes/${achievement.handle}`">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-rili"></use>
            </svg>
            <p class="day">day{{achievement.handle}}</p>
            <p>成绩：{{achievement.score}}</p>
        </router-link>
    </li>
    </ul>
</div>
</template>
<script>
export default {
        name: 'SixAchievement',
        data() {
            return {
                achievements:""
            };
        },
    created(){
        this.getAchievements();
    },
    methods:{
        getAchievements(){
            this.$axios.get("http://localhost:5000/api/history/six/personScore")
            .then(res => {
              this.achievements = res.data.scores;
            }).catch(err => {
                console.log(err.response);
            });
            
        }
    }

}
</script>

<style scoped>
.icon {
   width: 4em; height: 4em;
   vertical-align: -0.15em;
   fill: currentColor;
   overflow: hidden;
   margin-bottom: 10px;
}

p{
    font-size:22px;
}
.daylocation{
 position: relative;
}
  
    .sixachievemenul{
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

    .sixachievemenul li{
      padding:10px;
      border:3px solid #DF5048;
      width:16%;
      height:240px;
      margin:20px;
      text-align: center;
      border-radius: 20px;
      -webkit-box-shadow: 8px 8px 8px #ccc;
              box-shadow: 8px 8px 8px #ccc;
      opacity: 0.8;
       -webkit-transition: all 0.2s ease;
       transition: all 0.2s ease;
    }

    .sixachievemenul li:hover{
      -webkit-transform: translate(5px,5px);
              transform: translate(5px,5px);
    }


    
@media(max-width:480px){
    p{
        font-size:26px;
    }
.icon {
   width: 3em; height: 3em;
   vertical-align: -0.15em;
   fill: currentColor;
   overflow: hidden;
   margin-bottom: 10px;
}

 .sixachievemenul li{
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


</style>
