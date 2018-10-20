<template>
<div>
<div class="main">
    <h1 class="title">六级英语听力-<span>{{year}}真题</span></h1>
   <audio :src="urlsrc"  controls="controls" class="audio">
    您的浏览器不支持html5
    </audio>

<form @submit.prevent="submit">
     <!-- A -->
    <h3>Section A</h3>
<!-- <h4>Directions: In this section, you will hear two long conversations. At the end of each conversation you will hear four questions. Both the conversation and the questions will be spoken only once. After you hear a questionyou must choose the best answer from the four choices marked A, B, C and D.Then mark the corresponding letter on Answer Sheet 1 with a single line through the centre.</h4> -->
<h4>Questions 1 to 4 are based on the conversation you have just heard.</h4>
<br>
<div>
    1.<p v-if="Questions.Q1"><input type="radio" v-model="answer.one" value="A">{{Questions.Q1[0]}}</p>
    <p v-if="Questions.Q1"><input type="radio" v-model="answer.one" value="B">{{Questions.Q1[1]}}</p>
    <p v-if="Questions.Q1"><input type="radio" v-model="answer.one" value="C">{{Questions.Q1[2]}}</p>
    <p v-if="Questions.Q1"><input type="radio" v-model="answer.one" value="D">{{Questions.Q1[3]}}</p>
    <div v-if="errors">
        <p class="errInfo" v-if="errors.one">正确答案：{{errors.one}}</p>
    </div>
</div>
<br>
<div>
    2.<p v-if="Questions.Q2"><input type="radio" v-model="answer.two" value="A">{{Questions.Q2[0]}}</p>
    <p v-if="Questions.Q2"><input type="radio" v-model="answer.two" value="B">{{Questions.Q2[1]}}</p>
    <p v-if="Questions.Q2"><input type="radio" v-model="answer.two" value="C">{{Questions.Q2[2]}}</p>
    <p v-if="Questions.Q2"><input type="radio" v-model="answer.two" value="D">{{Questions.Q2[3]}}</p>
       <div v-if="errors">
        <p class="errInfo" v-if="errors.two">正确答案：{{errors.two}}</p>
    </div>
</div>
<br>
<div>
     3.<p v-if="Questions.Q3"><input type="radio" v-model="answer.three" value="A">{{Questions.Q3[0]}}</p>
    <p v-if="Questions.Q3"><input type="radio" v-model="answer.three" value="B">{{Questions.Q3[1]}}</p>
    <p v-if="Questions.Q3"><input type="radio" v-model="answer.three" value="C">{{Questions.Q3[2]}}</p>
    <p v-if="Questions.Q3"><input type="radio" v-model="answer.three" value="D">{{Questions.Q3[3]}}</p>
     <div v-if="errors">
        <p class="errInfo" v-if="errors.three">正确答案：{{errors.three}}</p>
    </div>
</div>
<br>
<div>
    4.<p v-if="Questions.Q4"><input type="radio" v-model="answer.four" value="A">{{Questions.Q4[0]}}</p>
    <p v-if="Questions.Q4"><input type="radio" v-model="answer.four" value="B">{{Questions.Q4[1]}}</p>
    <p v-if="Questions.Q4"><input type="radio" v-model="answer.four" value="C">{{Questions.Q4[2]}}</p>
    <p v-if="Questions.Q4"><input type="radio" v-model="answer.four" value="D">{{Questions.Q4[3]}}</p>
     <div v-if="errors">
        <p class="errInfo" v-if="errors.four">正确答案：{{errors.four}}</p>
    </div>
</div>

<br>
<h4>Questions 5 to 8 are based on the conversation you have just heard.</h4>
<br>
<div>
    5.<p v-if="Questions.Q5"><input type="radio" v-model="answer.five" value="A">{{Questions.Q5[0]}}</p>
    <p v-if="Questions.Q5"><input type="radio" v-model="answer.five" value="B">{{Questions.Q5[1]}}</p>
    <p v-if="Questions.Q5"><input type="radio" v-model="answer.five" value="C">{{Questions.Q5[2]}}</p>
    <p v-if="Questions.Q5"><input type="radio" v-model="answer.five" value="D">{{Questions.Q5[3]}}</p>
     <div v-if="errors">
        <p class="errInfo" v-if="errors.five">正确答案：{{errors.five}}</p>
    </div>
</div>
<br>
<div>
    6.<p v-if="Questions.Q6"><input type="radio" v-model="answer.six" value="A">{{Questions.Q6[0]}}</p>
    <p v-if="Questions.Q6"><input type="radio" v-model="answer.six" value="B">{{Questions.Q6[1]}}</p>
    <p v-if="Questions.Q6"><input type="radio" v-model="answer.six" value="C">{{Questions.Q6[2]}}</p>
    <p v-if="Questions.Q6"><input type="radio" v-model="answer.six" value="D">{{Questions.Q6[3]}}</p>
     <div v-if="errors">
        <p class="errInfo" v-if="errors.six">正确答案：{{errors.six}}</p>
    </div>
</div>
<br>
<div>
    7.<p v-if="Questions.Q7"><input type="radio" v-model="answer.seven" value="A">{{Questions.Q7[0]}}</p>
    <p v-if="Questions.Q7"><input type="radio" v-model="answer.seven" value="B">{{Questions.Q7[1]}}</p>
    <p v-if="Questions.Q7"><input type="radio" v-model="answer.seven" value="C">{{Questions.Q7[2]}}</p>
    <p v-if="Questions.Q7"><input type="radio" v-model="answer.seven" value="D">{{Questions.Q7[3]}}</p>
     <div v-if="errors">
        <p class="errInfo" v-if="errors.seven">正确答案：{{errors.seven}}</p>
    </div>
</div>
<br>
<div>
    8.<p v-if="Questions.Q8"><input type="radio" v-model="answer.eight" value="A">{{Questions.Q8[0]}}</p>
    <p v-if="Questions.Q8"><input type="radio" v-model="answer.eight" value="B">{{Questions.Q8[1]}}</p>
    <p v-if="Questions.Q8"><input type="radio" v-model="answer.eight" value="C">{{Questions.Q8[2]}}</p>
    <p v-if="Questions.Q8"><input type="radio" v-model="answer.eight" value="D">{{Questions.Q8[3]}}</p>
     <div v-if="errors">
        <p class="errInfo" v-if="errors.eight">正确答案：{{errors.eight}}</p>
    </div>
</div>
<br>
<!-- B -->
<h3>Section B</h3>
<!-- <h4>Directions: In this section, you will hear two passages. At the end of each passage, you will hear three or four questions. Both the passage and the questions will be spoken only once. After you hear a question, you must choose the best answer from the four choices marked A,B,C and D.Then mark the corresponding letter on Answer Sheet 1 with a single line through the centre.</h4> -->
<br>
<h4>Questions 9 to 12 are based on the passage you have just heard.</h4>
<br>
<div>
    9.<p v-if="Questions.Q9"><input type="radio" v-model="answer.nine" value="A">{{Questions.Q9[0]}}</p>
    <p v-if="Questions.Q9"><input type="radio" v-model="answer.nine" value="B">{{Questions.Q9[1]}}</p>
    <p v-if="Questions.Q9"><input type="radio" v-model="answer.nine" value="C">{{Questions.Q9[2]}}</p>
    <p v-if="Questions.Q9"><input type="radio" v-model="answer.nine" value="D">{{Questions.Q9[3]}}</p>
     <div v-if="errors">
        <p class="errInfo" v-if="errors.nine">正确答案：{{errors.nine}}</p>
    </div>
</div>
<br>
<div>
   10.<p v-if="Questions.Q10"><input type="radio" v-model="answer.ten" value="A">{{Questions.Q10[0]}}</p>
    <p v-if="Questions.Q10"><input type="radio" v-model="answer.ten" value="B">{{Questions.Q10[1]}}</p>
    <p v-if="Questions.Q10"><input type="radio" v-model="answer.ten" value="C">{{Questions.Q10[2]}}</p>
    <p v-if="Questions.Q10"><input type="radio" v-model="answer.ten" value="D">{{Questions.Q10[3]}}</p>
     <div v-if="errors">
        <p class="errInfo" v-if="errors.ten">正确答案：{{errors.ten}}</p>
    </div>
</div>
<br>
<div>
   11.<p v-if="Questions.Q11"><input type="radio" v-model="answer.eleven" value="A">{{Questions.Q11[0]}}</p>
    <p v-if="Questions.Q11"><input type="radio" v-model="answer.eleven" value="B">{{Questions.Q11[1]}}</p>
    <p v-if="Questions.Q11"><input type="radio" v-model="answer.eleven" value="C">{{Questions.Q11[2]}}</p>
    <p v-if="Questions.Q11"><input type="radio" v-model="answer.eleven" value="D">{{Questions.Q11[3]}}</p>
     <div v-if="errors">
        <p class="errInfo" v-if="errors.eleven">正确答案：{{errors.eleven}}</p>
    </div>
</div>
<br>
<div>
   12.<p v-if="Questions.Q12"><input type="radio" v-model="answer.twelve" value="A">{{Questions.Q12[0]}}</p>
    <p v-if="Questions.Q12"><input type="radio" v-model="answer.twelve" value="B">{{Questions.Q12[1]}}</p>
    <p v-if="Questions.Q12"><input type="radio" v-model="answer.twelve" value="C">{{Questions.Q12[2]}}</p>
    <p v-if="Questions.Q12"><input type="radio" v-model="answer.twelve" value="D">{{Questions.Q12[3]}}</p>
     <div v-if="errors">
        <p class="errInfo" v-if="errors.twelve">正确答案：{{errors.twelve}}</p>
    </div>
</div>
<br>

<h4>Questions 13 to 15 are based on the passage you have just heard.</h4>
<br>
<div>
   13.<p v-if="Questions.Q13"><input type="radio" v-model="answer.thirteen" value="A">{{Questions.Q13[0]}}</p>
    <p v-if="Questions.Q13"><input type="radio" v-model="answer.thirteen" value="B">{{Questions.Q13[1]}}</p>
    <p v-if="Questions.Q13"><input type="radio" v-model="answer.thirteen" value="C">{{Questions.Q13[2]}}</p>
    <p v-if="Questions.Q13"><input type="radio" v-model="answer.thirteen" value="D">{{Questions.Q13[3]}}</p>
     <div v-if="errors">
        <p class="errInfo" v-if="errors.thirteen">正确答案：{{errors.thirteen}}</p>
    </div>
</div>
<br>
<div>
 14.<p v-if="Questions.Q14"><input type="radio" v-model="answer.fourteen" value="A">{{Questions.Q14[0]}}</p>
    <p v-if="Questions.Q14"><input type="radio" v-model="answer.fourteen" value="B">{{Questions.Q14[1]}}</p>
    <p v-if="Questions.Q14"><input type="radio" v-model="answer.fourteen" value="C">{{Questions.Q14[2]}}</p>
    <p v-if="Questions.Q14"><input type="radio" v-model="answer.fourteen" value="D">{{Questions.Q14[3]}}</p>
     <div v-if="errors">
        <p class="errInfo" v-if="errors.fourteen">正确答案：{{errors.fourteen}}</p>
    </div>
</div>
<br>
<div>
 15.<p v-if="Questions.Q15"><input type="radio" v-model="answer.fifteen" value="A">{{Questions.Q15[0]}}</p>
    <p v-if="Questions.Q15"><input type="radio" v-model="answer.fifteen" value="B">{{Questions.Q15[1]}}</p>
    <p v-if="Questions.Q15"><input type="radio" v-model="answer.fifteen" value="C">{{Questions.Q15[2]}}</p>
    <p v-if="Questions.Q15"><input type="radio" v-model="answer.fifteen" value="D">{{Questions.Q15[3]}}</p>
     <div v-if="errors">
        <p class="errInfo" v-if="errors.fifteen">正确答案：{{errors.fifteen}}</p>
    </div>
</div>
<br>

<!-- C -->
<h3>Section C</h3>
<!-- <h4>Directions: In this section, you will hear three recordings of lectures or talks followedby three or four questions. The recordings will be played only once. After you hear aquestion,you must choose the best answer from the four choices marked ABC andD. Then mark the corresponding letter on Answer Sheet 1 with a single line throughthe centre.</h4> -->
<br>
<h4>Questions 16 to 18 are based on the recording you have just heard.</h4>
<br>
<div>
    16.<p v-if="Questions.Q16"><input type="radio" v-model="answer.sixteen" value="A">{{Questions.Q16[0]}}</p>
    <p v-if="Questions.Q16"><input type="radio" v-model="answer.sixteen" value="B">{{Questions.Q16[1]}}</p>
    <p v-if="Questions.Q16"><input type="radio" v-model="answer.sixteen" value="C">{{Questions.Q16[2]}}</p>
    <p v-if="Questions.Q16"><input type="radio" v-model="answer.sixteen" value="D">{{Questions.Q16[3]}}</p>
     <div v-if="errors">
        <p class="errInfo" v-if="errors.sixteen">正确答案：{{errors.sixteen}}</p>
    </div>
</div>
<br>
<div>
    17.<p v-if="Questions.Q17"><input type="radio" v-model="answer.seventeen" value="A">{{Questions.Q17[0]}}</p>
    <p v-if="Questions.Q17"><input type="radio" v-model="answer.seventeen" value="B">{{Questions.Q17[1]}}</p>
    <p v-if="Questions.Q17"><input type="radio" v-model="answer.seventeen" value="C">{{Questions.Q17[2]}}</p>
    <p v-if="Questions.Q17"><input type="radio" v-model="answer.seventeen" value="D">{{Questions.Q17[3]}}</p>
     <div v-if="errors">
        <p class="errInfo" v-if="errors.seventeen">正确答案：{{errors.seventeen}}</p>
    </div>
</div>
<br>
<div>
    18.<p v-if="Questions.Q18"><input type="radio" v-model="answer.eightteen" value="A">{{Questions.Q18[0]}}</p>
    <p v-if="Questions.Q18"><input type="radio" v-model="answer.eightteen" value="B">{{Questions.Q18[1]}}</p>
    <p v-if="Questions.Q18"><input type="radio" v-model="answer.eightteen" value="C">{{Questions.Q18[2]}}</p>
    <p v-if="Questions.Q18"><input type="radio" v-model="answer.eightteen" value="D">{{Questions.Q18[3]}}</p>
     <div v-if="errors">
        <p class="errInfo" v-if="errors.eightteen">正确答案：{{errors.eightteen}}</p>
    </div>
</div>
<br>

<h4>Questions 19 to 22 are based on the recording you have just heard.</h4>
<br>
<div>
    19.<p v-if="Questions.Q19"><input type="radio" v-model="answer.nineteen" value="A">{{Questions.Q19[0]}}</p>
    <p v-if="Questions.Q19"><input type="radio" v-model="answer.nineteen" value="B">{{Questions.Q19[1]}}</p>
    <p v-if="Questions.Q19"><input type="radio" v-model="answer.nineteen" value="C">{{Questions.Q19[2]}}</p>
    <p v-if="Questions.Q19"><input type="radio" v-model="answer.nineteen" value="D">{{Questions.Q19[3]}}</p>
     <div v-if="errors">
        <p class="errInfo" v-if="errors.nineteen">正确答案：{{errors.nineteen}}</p>
    </div>
</div>
<br>
<div>
    20.<p v-if="Questions.Q20"><input type="radio" v-model="answer.twenty" value="A">{{Questions.Q20[0]}}</p>
    <p v-if="Questions.Q20"><input type="radio" v-model="answer.twenty" value="B">{{Questions.Q20[1]}}</p>
    <p v-if="Questions.Q20"><input type="radio" v-model="answer.twenty" value="C">{{Questions.Q20[2]}}</p>
    <p v-if="Questions.Q20"><input type="radio" v-model="answer.twenty" value="D">{{Questions.Q20[3]}}</p>
     <div v-if="errors">
        <p class="errInfo" v-if="errors.twenty">正确答案：{{errors.twenty}}</p>
    </div>
</div>
<br>
<div>
    21.<p v-if="Questions.Q21"><input type="radio" v-model="answer.twentyone" value="A">{{Questions.Q21[0]}}</p>
    <p v-if="Questions.Q21"><input type="radio" v-model="answer.twentyone" value="B">{{Questions.Q21[1]}}</p>
    <p v-if="Questions.Q21"><input type="radio" v-model="answer.twentyone" value="C">{{Questions.Q21[2]}}</p>
    <p v-if="Questions.Q21"><input type="radio" v-model="answer.twentyone" value="D">{{Questions.Q21[3]}}</p>
     <div v-if="errors">
        <p class="errInfo" v-if="errors.twentyone">正确答案：{{errors.twentyone}}</p>
    </div>
</div>
<br>
<div>
    22.<p v-if="Questions.Q22"><input type="radio" v-model="answer.twentytwo" value="A">{{Questions.Q22[0]}}</p>
    <p v-if="Questions.Q22"><input type="radio" v-model="answer.twentytwo" value="B">{{Questions.Q22[1]}}</p>
    <p v-if="Questions.Q22"><input type="radio" v-model="answer.twentytwo" value="C">{{Questions.Q22[2]}}</p>
    <p v-if="Questions.Q22"><input type="radio" v-model="answer.twentytwo" value="D">{{Questions.Q22[3]}}</p>
     <div v-if="errors">
        <p class="errInfo" v-if="errors.twentytwo">正确答案：{{errors.twentytwo}}</p>
    </div>
</div>
<br>
<h4>Questions 23 to 25 are based on the recording you have just heard.</h4>
 <br>
<div>
    23.<p v-if="Questions.Q23"><input type="radio" v-model="answer.twentythree" value="A">{{Questions.Q23[0]}}</p>
    <p v-if="Questions.Q23"><input type="radio" v-model="answer.twentythree" value="B">{{Questions.Q23[1]}}</p>
    <p v-if="Questions.Q23"><input type="radio" v-model="answer.twentythree" value="C">{{Questions.Q23[2]}}</p>
    <p v-if="Questions.Q23"><input type="radio" v-model="answer.twentythree" value="D">{{Questions.Q23[3]}}</p>
     <div v-if="errors">
        <p class="errInfo" v-if="errors.twentythree">正确答案：{{errors.twentythree}}</p>
    </div>
</div>
<br>
<div>
    24.<p v-if="Questions.Q24"><input type="radio" v-model="answer.twentyfour" value="A">{{Questions.Q24[0]}}</p>
    <p v-if="Questions.Q24"><input type="radio" v-model="answer.twentyfour" value="B">{{Questions.Q24[1]}}</p>
    <p v-if="Questions.Q24"><input type="radio" v-model="answer.twentyfour" value="C">{{Questions.Q24[2]}}</p>
    <p v-if="Questions.Q24"><input type="radio" v-model="answer.twentyfour" value="D">{{Questions.Q24[3]}}</p>
     <div v-if="errors">
        <p class="errInfo" v-if="errors.twentyfour">正确答案：{{errors.twentyfour}}</p>
    </div>
</div>
<br>
<div>
    25.<p v-if="Questions.Q25"><input type="radio" v-model="answer.twentyfive" value="A">{{Questions.Q25[0]}}</p>
    <p v-if="Questions.Q25"><input type="radio" v-model="answer.twentyfive" value="B">{{Questions.Q25[1]}}</p>
    <p v-if="Questions.Q25"><input type="radio" v-model="answer.twentyfive" value="C">{{Questions.Q25[2]}}</p>
    <p v-if="Questions.Q25"><input type="radio" v-model="answer.twentyfive" value="D">{{Questions.Q25[3]}}</p>
     <div v-if="errors">
        <p class="errInfo" v-if="errors.twentyfive">正确答案：{{errors.twentyfive}}</p>
 </div>
</div>
<br>

<div>
    <div v-if="!isEmpty(errors)" class="score1">
        你的分数为：<span class="score2">{{100 - errors.number*4}}</span><br>
        <p class="small">错题答案已经标出，你可以通过查看给出的答案改正错误</p>
    </div>
    <div v-if="text">
        你的成绩已存在，此次成绩不会保存。
    </div>
</div>
<button v-if="!isSubmit" type="submit" class="btn btn-primary btn-lg btn-color">提交</button>
    <div v-if="isSubmit" class="achievementbtn">
        <router-link to="/sixachievement">查看我的成绩</router-link>
    </div>
</form>
</div>
</div>
</template>

<script>
export default {
        name: 'Six',
        data() {
            return {
                urlsrc:"",
                Questions:"",
                year:"",
                article:"",
                answer:{
                    "handle":"",
                    "one":"",
                    "two":"",
                    "three":"",
                    "four":"",
                    "five":"",
                    "six":"",
                    "seven":"",
                    "eight":"",
                    "nine":"",
                    "ten":"",
                    "eleven":"",
                    "twelve":"",
                    "thirteen":"",
                    "fourteen":"",
                    "fifteen":"",
                    "sixteen":"",
                    "seventeen":"",
                    "eightteen":"",
                    "nineteen":"",
                    "twenty":"",
                    "twentyone":"",
                    "twentytwo":"",
                    "twentythree":"",
                    "twentyfour":"",
                    "twentyfive":""
                },
                errors:{},
                isSubmit:false,
                text:"",
                success:""
            };
    },
     beforeRouteEnter(to,from,next){
        next(vm => {
            vm.answer.handle = to.params.handle;
            vm.getListenHandle(to.params.handle);
        });
    },
    methods:{
        getListenHandle(handle){
            // 得到题目渲染页面
            this.$axios.get(`http://localhost:5000/api/listen/six/handle/${handle}`)
            .then(res => {
                this.urlsrc = res.data.urlsrc;
                this.Questions = res.data.Questions;
                this.year = res.data.year;
                this.article = res.data.article;
            }).catch(err => {
                console.log(err.response);
            });
        },
        submit(){
            //赋值handle和score，传给后台校验数据以及保存成绩
            this.$axios.post(`http://localhost:5000/api/listen/six/check/${this.answer.handle}`,this.answer)
            .then(res => {
                this.errors = res.data.errors;
                this.text = res.data.text;
                this.isSubmit = true;
            }).catch(err => {
                console.log(err.response);
            });
        },
         isEmpty:(value)=> {
            return value === undefined || value === null ||
                (typeof value === "object" && Object.keys(value).length === 0) ||
                (typeof value === "string" && value.trim().length === 0)
        }
    }
}
</script>

<style scoped>
h1{
    font-size:30px;
}


h3{
  font-size:26px;
}


h4{
    font-size:24px;
}


   .title{
        text-align: center;
    }
    .main{
        font-size:22px;
        width:70%;
        margin:0 auto;
    }

    .audio{
        margin:0 auto;
    }

    .errInfo{
        color:#DF5048;
        font-size:17px;
    }

    .score2{
        color:#DF5048;
    }

    .score1{
        margin:30px auto;
        font-size:28px;
        text-align:ceter;
    }

    .small{
        font-size:16px;
    }

    .main .btn-color{
        margin-top:50px;
         background:#A94442;
    }


    .achievementbtn{
        font-size:28px;
        margin-top:20px;
    }

</style>