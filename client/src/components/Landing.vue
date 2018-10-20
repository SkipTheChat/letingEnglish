<template>
<div class="landing">
	<div>
		<router-link to="/homepagefour">
			<svg class="icon" aria-hidden="true">
		  		<use xlink:href="#icon-yingyu-abc"></use>
		    </svg>
		    <p class="fourtext">四级</p>
		</router-link>
	</div>	
		

	<div>
		<router-link to="/homepagesix">
			<svg class="icon" aria-hidden="true">
		  		<use xlink:href="#icon-yingyu-en"></use>
		    </svg>
		    <p class="sixtext">六级</p>
		</router-link>
	</div>	

 	<div>
		<router-link to="/ted/tedhomepage">
			<svg class="icon" aria-hidden="true">
		  		<use xlink:href="#icon-TED"></use>
		    </svg>
		    <p class="achievement">TED Talks</p>
		</router-link>
	</div>	

    <div>
		<router-link to="/achievement">
			<svg class="icon" aria-hidden="true">
		  		<use xlink:href="#icon-yingyu"></use>
		    </svg>
		    <p class="achievement">我的成绩</p>
		</router-link>
	</div>	
</div>
</template>

<script>

export default {
        name: 'Landing',
        data() {
            return {
              
            };
        },
        
    }
</script>

<style scoped>

.icon {
   width: 8em; height: 15em;
   vertical-align: -0.15em;
   fill: currentColor;
   overflow: hidden;
}


.landing{
	margin:0 auto;
    padding:20px;
	width:70%;
	-ms-flex-wrap: wrap;
	    flex-wrap: wrap;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-ms-flex-pack:distribute;
	    justify-content:space-around;
}


.landing div{
	margin:40px 60px;
	padding:10px;
	border:3px solid #DF5048;
	width:25%;
	height:350px;
	border-radius: 20px;
	-webkit-box-shadow: 8px 8px 8px #ccc;
	        box-shadow: 8px 8px 8px #ccc;
	float: left;
	text-align: center;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
}


.landing p{
	font-size:24px;
	text-shadow: 4px 4px 4px #ccc;
}



.landing div:hover{
    -webkit-transform: translate(5px,5px);
    transform: translate(5px,5px);
}


@media(max-width:480px){
	.icon {
   width: 4em; height: 4em;
   vertical-align: -0.15em;
   fill: currentColor;
   overflow: hidden;
}
.landing{
    margin-left:100px;
    padding:20px;
	width:70%;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-ms-flex-pack:distribute;
	    justify-content:space-around;
}

.landing div{
    margin:20px;
    padding:30px;
	border:3px solid #DF5048;
	width:33%;
	height:250px;
	border-radius: 15px;
	-webkit-box-shadow: 6px 6px 6px #ccc;
	        box-shadow: 6px 6px 6px #ccc;
	float: left;
	text-align: center;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
}


}
</style>
