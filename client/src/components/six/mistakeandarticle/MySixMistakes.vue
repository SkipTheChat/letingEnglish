<template>
<div>
<div id="maincontain">
    <h1 class="title">六级英语听力-<span>{{year}}真题</span></h1>
<form @submit.prevent="submit">
     <!-- A -->
    <h2>Section A</h2>
<h3>Questions 1 to 4 are based on the conversation you have just heard.</h3>
<br>
<div>
    1.<p v-if="Questions.Q1">{{Questions.Q1[0]}}</p>
    <p v-if="Questions.Q1">{{Questions.Q1[1]}}</p>
    <p v-if="Questions.Q1">{{Questions.Q1[2]}}</p>
    <p v-if="Questions.Q1">{{Questions.Q1[3]}}</p>
    <div v-if="rightanswers" class="rightanswer">
        正确答案：{{rightanswers[0]}}
    </div>
    <div class="mistake" v-if="myanswers">我的答案:{{myanswers[0]}}</div>
    <br>
</div>

<div>
   2.<p v-if="Questions.Q2">{{Questions.Q2[0]}}</p>
    <p v-if="Questions.Q2">{{Questions.Q2[1]}}</p>
    <p v-if="Questions.Q2">{{Questions.Q2[2]}}</p>
    <p v-if="Questions.Q2">{{Questions.Q2[3]}}</p>
    <div v-if="rightanswers" class="rightanswer">
        正确答案：{{rightanswers[1]}}
    </div>
       <div class="mistake" v-if="myanswers">我的答案:{{myanswers[1]}}</div>
       <br>
</div>

<div>
    3.<p v-if="Questions.Q3">{{Questions.Q3[0]}}</p>
    <p v-if="Questions.Q3">{{Questions.Q3[1]}}</p>
    <p v-if="Questions.Q3">{{Questions.Q3[2]}}</p>
    <p v-if="Questions.Q3">{{Questions.Q3[3]}}</p>
    <div v-if="rightanswers" class="rightanswer">
        正确答案：{{rightanswers[2]}}
    </div>
     <div class="mistake" v-if="myanswers">我的答案:{{myanswers[2]}}</div>
     <br>
</div>

<div>
    4.<p v-if="Questions.Q4">{{Questions.Q4[0]}}</p>
    <p v-if="Questions.Q4">{{Questions.Q4[1]}}</p>
    <p v-if="Questions.Q4">{{Questions.Q4[2]}}</p>
    <p v-if="Questions.Q4">{{Questions.Q4[3]}}</p>
    <div v-if="rightanswers" class="rightanswer">
        正确答案：{{rightanswers[3]}}
    </div>
     <div class="mistake" v-if="myanswers">我的答案:{{myanswers[3]}}</div>
     <br>
</div>



<h3>Questions 5 to 8 are based on the conversation you have just heard.</h3>
<br>
<div>
   5.<p v-if="Questions.Q5">{{Questions.Q5[0]}}</p>
    <p v-if="Questions.Q5">{{Questions.Q5[1]}}</p>
    <p v-if="Questions.Q5">{{Questions.Q5[2]}}</p>
    <p v-if="Questions.Q5">{{Questions.Q5[3]}}</p>
    <div v-if="rightanswers" class="rightanswer">
        正确答案：{{rightanswers[4]}}
    </div>
     <div class="mistake" v-if="myanswers">我的答案:{{myanswers[4]}}</div>
     <br>
</div>

<div>
   6.<p v-if="Questions.Q6">{{Questions.Q6[0]}}</p>
    <p v-if="Questions.Q6">{{Questions.Q6[1]}}</p>
    <p v-if="Questions.Q6">{{Questions.Q6[2]}}</p>
    <p v-if="Questions.Q6">{{Questions.Q6[3]}}</p>
    <div v-if="rightanswers" class="rightanswer">
        正确答案：{{rightanswers[5]}}
    </div>
     <div class="mistake" v-if="myanswers">我的答案:{{myanswers[5]}}</div>
     <br>
</div>

<div>
    7.<p v-if="Questions.Q7">{{Questions.Q7[0]}}</p>
    <p v-if="Questions.Q7">{{Questions.Q7[1]}}</p>
    <p v-if="Questions.Q7">{{Questions.Q7[2]}}</p>
    <p v-if="Questions.Q7">{{Questions.Q7[3]}}</p>
    <div v-if="rightanswers" class="rightanswer">
        正确答案：{{rightanswers[6]}}
    </div>
     <div class="mistake" v-if="myanswers">我的答案:{{myanswers[6]}}</div>
     <br>
</div>


<div>
    8.<p v-if="Questions.Q8">{{Questions.Q8[0]}}</p>
    <p v-if="Questions.Q8">{{Questions.Q8[1]}}</p>
    <p v-if="Questions.Q8">{{Questions.Q8[2]}}</p>
    <p v-if="Questions.Q8">{{Questions.Q8[3]}}</p>
    <div v-if="rightanswers" class="rightanswer">
        正确答案：{{rightanswers[7]}}
    </div>
     <div class="mistake" v-if="myanswers">我的答案:{{myanswers[7]}}</div>
     <br>
</div>


<!-- B -->
<h2>Section B</h2>
<h3>Questions 9 to 12 are based on the passage you have just heard.</h3>
<br>
<div>
    9.<p v-if="Questions.Q9">{{Questions.Q9[0]}}</p>
    <p v-if="Questions.Q9">{{Questions.Q9[1]}}</p>
    <p v-if="Questions.Q9">{{Questions.Q9[2]}}</p>
    <p v-if="Questions.Q9">{{Questions.Q9[3]}}</p>
    <div v-if="rightanswers" class="rightanswer">
        正确答案：{{rightanswers[8]}}
    </div>
     <div class="mistake" v-if="myanswers">我的答案:{{myanswers[8]}}</div>
     <br>
</div>

<div>
    10.<p v-if="Questions.Q10">{{Questions.Q10[0]}}</p>
    <p v-if="Questions.Q10">{{Questions.Q10[1]}}</p>
    <p v-if="Questions.Q10">{{Questions.Q10[2]}}</p>
    <p v-if="Questions.Q10">{{Questions.Q10[3]}}</p>
    <div v-if="rightanswers" class="rightanswer">
        正确答案：{{rightanswers[9]}}
    </div>
     <div class="mistake" v-if="myanswers">我的答案:{{myanswers[9]}}</div>
     <br>
</div>

<div>
    11.<p v-if="Questions.Q11">{{Questions.Q11[0]}}</p>
    <p v-if="Questions.Q11">{{Questions.Q11[1]}}</p>
    <p v-if="Questions.Q11">{{Questions.Q11[2]}}</p>
    <p v-if="Questions.Q11">{{Questions.Q11[3]}}</p>
    <div v-if="rightanswers" class="rightanswer">
        正确答案：{{rightanswers[10]}}
    </div>
     <div class="mistake" v-if="myanswers">我的答案:{{myanswers[10]}}</div>
     <br>
</div>

<div>
    12.<p v-if="Questions.Q12">{{Questions.Q12[0]}}</p>
    <p v-if="Questions.Q12">{{Questions.Q12[1]}}</p>
    <p v-if="Questions.Q12">{{Questions.Q12[2]}}</p>
    <p v-if="Questions.Q12">{{Questions.Q12[3]}}</p>
    <div v-if="rightanswers" class="rightanswer">
        正确答案：{{rightanswers[11]}}
    </div>
     <div class="mistake" v-if="myanswers">我的答案:{{myanswers[11]}}</div>
     <br>
</div>


<h3>Questions 13 to 15 are based on the passage you have just heard.</h3>
<br>
<div>
    13.<p v-if="Questions.Q13">{{Questions.Q13[0]}}</p>
    <p v-if="Questions.Q13">{{Questions.Q13[1]}}</p>
    <p v-if="Questions.Q13">{{Questions.Q13[2]}}</p>
    <p v-if="Questions.Q13">{{Questions.Q13[3]}}</p>
    <div v-if="rightanswers" class="rightanswer">
        正确答案：{{rightanswers[12]}}
    </div>
     <div class="mistake" v-if="myanswers">我的答案:{{myanswers[12]}}</div>
     <br>
</div>

<div>
    14.<p v-if="Questions.Q14">{{Questions.Q14[0]}}</p>
    <p v-if="Questions.Q14">{{Questions.Q14[1]}}</p>
    <p v-if="Questions.Q14">{{Questions.Q14[2]}}</p>
    <p v-if="Questions.Q14">{{Questions.Q14[3]}}</p>
    <div v-if="rightanswers" class="rightanswer">
        正确答案：{{rightanswers[13]}}
    </div>
     <div class="mistake" v-if="myanswers">我的答案:{{myanswers[13]}}</div>
     <br>
</div>

<div>
 15.<p v-if="Questions.Q15">{{Questions.Q15[0]}}</p>
    <p v-if="Questions.Q15">{{Questions.Q15[1]}}</p>
    <p v-if="Questions.Q15">{{Questions.Q15[2]}}</p>
    <p v-if="Questions.Q15">{{Questions.Q15[3]}}</p>
    <div v-if="rightanswers" class="rightanswer">
        正确答案：{{rightanswers[14]}}
    </div>
     <div class="mistake" v-if="myanswers">我的答案:{{myanswers[14]}}</div>
     <br>
</div>


<!-- C -->
<h2>Section C</h2>
<h3>Questions 16 to 18 are based on the recording you have just heard.</h3>
<br>
<div>
    16.<p v-if="Questions.Q16">{{Questions.Q16[0]}}</p>
    <p v-if="Questions.Q16">{{Questions.Q16[1]}}</p>
    <p v-if="Questions.Q16">{{Questions.Q16[2]}}</p>
    <p v-if="Questions.Q16">{{Questions.Q16[3]}}</p>
    <div v-if="rightanswers" class="rightanswer">
        正确答案：{{rightanswers[15]}}
    </div>
     <div class="mistake" v-if="myanswers">我的答案:{{myanswers[15]}}</div>
     <br>
     <div v-if="errors">
        <p class="errInfo" v-if="errors.sixteen">正确答案：sixteen}}</p>
    </div>
</div>

<div>
    17.<p v-if="Questions.Q17">{{Questions.Q17[0]}}</p>
    <p v-if="Questions.Q17">{{Questions.Q17[1]}}</p>
    <p v-if="Questions.Q17">{{Questions.Q17[2]}}</p>
    <p v-if="Questions.Q17">{{Questions.Q17[3]}}</p>
    <div v-if="rightanswers" class="rightanswer">
        正确答案：{{rightanswers[16]}}
    </div>
     <div class="mistake" v-if="myanswers">我的答案:{{myanswers[16]}}</div>
     <br>
</div>

<div>
   18. <p v-if="Questions.Q18">{{Questions.Q18[0]}}</p>
    <p v-if="Questions.Q18">{{Questions.Q18[1]}}</p>
    <p v-if="Questions.Q18">{{Questions.Q18[2]}}</p>
    <p v-if="Questions.Q18">{{Questions.Q18[3]}}</p>
    <div v-if="rightanswers" class="rightanswer">
        正确答案：{{rightanswers[17]}}
    </div>
     <div class="mistake" v-if="myanswers">我的答案:{{myanswers[17]}}</div>
     <br>
</div>


<h3>Questions 19 to 22 are based on the recording you have just heard.</h3>
<br>
<div>
    19.<p v-if="Questions.Q19">{{Questions.Q19[0]}}</p>
    <p v-if="Questions.Q19">{{Questions.Q19[1]}}</p>
    <p v-if="Questions.Q19">{{Questions.Q19[2]}}</p>
    <p v-if="Questions.Q19">{{Questions.Q19[3]}}</p>
    <div v-if="rightanswers" class="rightanswer">
        正确答案：{{rightanswers[18]}}
    </div>
     <div class="mistake" v-if="myanswers">我的答案:{{myanswers[18]}}</div>
     <br>
    
</div>

<div>
    20.<p v-if="Questions.Q20">{{Questions.Q20[0]}}</p>
    <p v-if="Questions.Q20">{{Questions.Q20[1]}}</p>
    <p v-if="Questions.Q20">{{Questions.Q20[2]}}</p>
    <p v-if="Questions.Q20">{{Questions.Q20[3]}}</p>
    <div v-if="rightanswers" class="rightanswer">
        正确答案：{{rightanswers[19]}}
    </div>
     <div class="mistake" v-if="myanswers">我的答案:{{myanswers[19]}}</div>
     <br>

</div>

<div>
    21.<p v-if="Questions.Q21">{{Questions.Q21[0]}}</p>
    <p v-if="Questions.Q21">{{Questions.Q21[1]}}</p>
    <p v-if="Questions.Q21">{{Questions.Q21[2]}}</p>
    <p v-if="Questions.Q21">{{Questions.Q21[3]}}</p>
    <div v-if="rightanswers" class="rightanswer">
        正确答案：{{rightanswers[20]}}
    </div>
     <div class="mistake" v-if="myanswers">我的答案:{{myanswers[20]}}</div>
     <br>
 
</div>


<div>
    22.<p v-if="Questions.Q22">{{Questions.Q22[0]}}</p>
    <p v-if="Questions.Q22">{{Questions.Q22[1]}}</p>
    <p v-if="Questions.Q22">{{Questions.Q22[2]}}</p>
    <p v-if="Questions.Q22">{{Questions.Q22[3]}}</p>
    <div v-if="rightanswers" class="rightanswer">
        正确答案：{{rightanswers[21]}}
    </div>
     <div class="mistake" v-if="myanswers">我的答案:{{myanswers[21]}}</div>
     <br>
</div>


<h3>Questions 23 to 25 are based on the recording you have just heard.</h3>
<br>
<div>
    23.<p v-if="Questions.Q23">{{Questions.Q23[0]}}</p>
    <p v-if="Questions.Q23">{{Questions.Q23[1]}}</p>
    <p v-if="Questions.Q23">{{Questions.Q23[2]}}</p>
    <p v-if="Questions.Q23">{{Questions.Q23[3]}}</p>
    <div v-if="rightanswers" class="rightanswer">
        正确答案：{{rightanswers[22]}}
    </div>
     <div class="mistake" v-if="myanswers">我的答案:{{myanswers[22]}}</div>
     <br>
</div>

<div>
   24. <p v-if="Questions.Q24">{{Questions.Q24[0]}}</p>
    <p v-if="Questions.Q24">{{Questions.Q24[1]}}</p>
    <p v-if="Questions.Q24">{{Questions.Q24[2]}}</p>
    <p v-if="Questions.Q24">{{Questions.Q24[3]}}</p>
    <div v-if="rightanswers" class="rightanswer">
        正确答案：{{rightanswers[23]}}
    </div>
     <div class="mistake" v-if="myanswers">我的答案:{{myanswers[23]}}</div>
     <br>
</div>

<div>
    25.<p v-if="Questions.Q25">{{Questions.Q25[0]}}</p>
    <p v-if="Questions.Q25">{{Questions.Q25[1]}}</p>
    <p v-if="Questions.Q25">{{Questions.Q25[2]}}</p>
    <p v-if="Questions.Q25">{{Questions.Q25[3]}}</p>
    <div v-if="rightanswers" class="rightanswer">
        正确答案：{{rightanswers[24]}}
    </div>
     <div class="mistake" v-if="myanswers">我的答案:{{myanswers[24]}}</div>
     <br>
</div>
  
</form>
</div>
</div>
</template>

<script>
export default {
        name: 'MySixMistakes',
        data() {
            return {
                urlsrc:"",
                Questions:"",
                year:"",
                errors:{},
                isSubmit:false,
                myanswers:[],
                rightanswers:[],
                
            };
    },
     beforeRouteEnter(to,from,next){
        next(vm => {
            vm.getListenHandle(to.params.handle);
            vm.getHistory(to.params.handle);
            vm.getRightAnswer(to.params.handle);
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
            }).catch(err => {
                console.log(err.response);
            });
        },
        getHistory(handle){
                // /four/personScore
                // 得到答案
                 this.$axios.get(`http://localhost:5000/api/history/six/personScore/${handle}`)
            .then(res => {
                console.log(res.data);
                this.myanswers = res.data.answers;
            }).catch(err => {
                console.log(err.response);
            });

        },
        getRightAnswer(handle){
            this.$axios.get(`http://localhost:5000/api/history/six/rightanswer/${handle}`)
                .then(res => {
                    this.rightanswers = res.data.rightAnswer;
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
   .title{
        text-align: center;
    }
    #maincontain{
        width:70%;
        margin:0 auto;
    }

    .mistake{
        color:#DF5048;
    }

    .rightanswer{
        color:#00CC33;
    }

</style>
