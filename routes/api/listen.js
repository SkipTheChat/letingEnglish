const express = require('express');
const router  = express.Router();
const mongoose =require('mongoose');
const passport = require("passport");

const User = require("../../models/User");
//四级
const FourListen = require("../../models/FourListen");
const FourAnswer = require("../../models/FourAnswer");
const FourHistory = require("../../models/FourHistory");

//六级
const SixHistory = require("../../models/SixHistory");
const SixListen = require("../../models/SixListen");
const SixAnswer = require("../../models/SixAnswer");


//TED
const Ted = require("../../models/Ted");


 

//get到听力文章用于渲染
router.get("/four/handle/:handle",(req,res) => {
    FourListen.findOne({handle:req.params.handle})
        .then(data => {
            if(data){
                return res.json(data);
            }else{
                return res.status(404).json({"text":"该文件可能已被删除"});
            }

        }).catch(err => {
            return res.status(404).json(err);
    });

});

//校验答案并且保存成绩
router.post("/four/check/:handle",passport.authenticate('jwt', { session: false }),(req,res) => {
    let errors = {};
    let MyAnswer = [];
    errors.number = 0;

    //校验答案
    FourAnswer.findOne({handle:req.body.handle})
        .then(data => {
            if(!data){
                return res.status(404).json({"text":"没有找到该文章的答案"});
            }
            MyAnswer.push(req.body.one);
            MyAnswer.push(req.body.two);
            MyAnswer.push(req.body.three);
            MyAnswer.push(req.body.four);
            MyAnswer.push(req.body.five);
            MyAnswer.push(req.body.six);
            MyAnswer.push(req.body.seven);
            MyAnswer.push(req.body.eight);
            MyAnswer.push(req.body.nine);
            MyAnswer.push(req.body.ten);
            MyAnswer.push(req.body.eleven);
            MyAnswer.push(req.body.twelve);
            MyAnswer.push(req.body.thirteen);
            MyAnswer.push(req.body.fourteen);
            MyAnswer.push(req.body.fifteen);
            MyAnswer.push(req.body.sixteen);
            MyAnswer.push(req.body.seventeen);
            MyAnswer.push(req.body.eightteen);
            MyAnswer.push(req.body.nineteen);
            MyAnswer.push(req.body.twenty);
            MyAnswer.push(req.body.twentyone);
            MyAnswer.push(req.body.twentytwo);
            MyAnswer.push(req.body.twentythree);
            MyAnswer.push(req.body.twentyfour);
            MyAnswer.push(req.body.twentyfive);

            //校对答案
            if(req.body.one !== data.rightAnswer[0]){
                errors.one = data.rightAnswer[0];
                errors.number ++;
            }
            if(req.body.two !== data.rightAnswer[1]){
                errors.two = data.rightAnswer[1];
                errors.number ++;
            }
            if(req.body.three !== data.rightAnswer[2]){
                errors.three = data.rightAnswer[2];
                errors.number ++;
            }
            if(req.body.four !== data.rightAnswer[3]){
                errors.four = data.rightAnswer[3];
                errors.number ++;
            }
            if(req.body.five !== data.rightAnswer[4]){
                errors.five = data.rightAnswer[4];
                errors.number ++;
            }
            if(req.body.six !== data.rightAnswer[5]){
                errors.six = data.rightAnswer[5];
                errors.number ++;
            }
            if(req.body.seven !== data.rightAnswer[6]){
                errors.seven = data.rightAnswer[6];
                errors.number ++;
            }
            if(req.body.eight !== data.rightAnswer[7]){
                errors.eight = data.rightAnswer[7];
                errors.number ++;
            }
            if(req.body.nine !== data.rightAnswer[8]){
                errors.nine = data.rightAnswer[8];
                errors.number ++;
            }
            if(req.body.ten !== data.rightAnswer[9]){
                errors.ten = data.rightAnswer[9];
                errors.number ++;
            }
            if(req.body.eleven !== data.rightAnswer[10]){
                errors.eleven = data.rightAnswer[10];
                errors.number ++;
            }
            if(req.body.twelve !== data.rightAnswer[11]){
                errors.twelve = data.rightAnswer[11];
                errors.number ++;
            }
            if(req.body.thirteen !== data.rightAnswer[12]){
                errors.thirteen = data.rightAnswer[12];
                errors.number ++;
            }
            if(req.body.fourteen !== data.rightAnswer[13]){
                errors.fourteen = data.rightAnswer[13];
                errors.number ++;
            }
            if(req.body.fifteen !== data.rightAnswer[14]){
                errors.fifteen = data.rightAnswer[14];
                errors.number ++;
            }
            if(req.body.sixteen !== data.rightAnswer[15]){
                errors.sixteen = data.rightAnswer[15];
                errors.number ++;
            }
            if(req.body.seventeen !== data.rightAnswer[16]){
                errors.seventeen = data.rightAnswer[16];
                errors.number ++;
            }
            if(req.body.eightteen !== data.rightAnswer[17]){
                errors.eightteen = data.rightAnswer[17];
                errors.number ++;
            }
            if(req.body.nineteen !== data.rightAnswer[18]){
                errors.nineteen = data.rightAnswer[18];
                errors.number ++;
            }
            if(req.body.twenty !== data.rightAnswer[19]){
                errors.twenty = data.rightAnswer[19];
                errors.number ++;
            }
            if(req.body.twentyone !== data.rightAnswer[20]){
                errors.twentyone = data.rightAnswer[20];
                errors.number ++;
            }
            if(req.body.twentytwo !== data.rightAnswer[21]){
                errors.twentytwo = data.rightAnswer[21];
                errors.number ++;
            }
            if(req.body.twentythree !== data.rightAnswer[22]){
                errors.twentythree = data.rightAnswer[22];
                errors.number ++;
            }
            if(req.body.twentyfour !== data.rightAnswer[23]){
                errors.twentyfour = data.rightAnswer[23];
                errors.number ++;
            }
            if(req.body.twentyfive !== data.rightAnswer[24]){
                errors.twentyfive = data.rightAnswer[24];
                errors.number ++;
            }


            //保存成绩
            //scorex是成绩
            const scorex = (100 - errors.number * 4);
            let flag = true;
            const personScore = {
                score: scorex.toString(),
                handle: req.params.handle,
                answers:MyAnswer
            };

            FourHistory.findOne({user:req.user.id})
                .then(history => {
                    if(!history) {

                        //保存成绩
                        const newHistory = new FourHistory({
                            user: req.user.id
                        });

                        newHistory.scores.push(personScore);
                        newHistory.save().then((data) => {
                            return res.json({"data":data,"errors":errors});
                        }).catch(err => {
                            return res.status(404).json(err);
                        });

                    }else{
                        for(let i = 0;i < history.scores.length;i++){
                            if(history.scores[i].handle === req.params.handle){
                                flag = false;
                            }
                        }
                        if(!flag){
                            return res.json({"errors":errors,"text":"成绩已存在"});
                        }
                        history.scores.push(personScore);
                        history.save().then((data) => {
                            return res.json(data);
                        }).catch(err => {
                            return res.status(404).json(err);
                        });
                    }
                }).catch(err => {
                return res.status(404).json(err);
            });
        }).catch(err => {
        return res.status(404).json(err);
    });

})



router.get("/four/count",(req,res) => {
    FourListen.countDocuments()
        .then(count => {
            if(count){
                return res.json(count);
            }else{
                return res.status(404).json({"text":"未找到听力文件"});
            }

        }).catch(err => {
        return res.status(404).json(err);
    });

});


//六级
router.get("/six/count",(req,res) => {
    SixListen.countDocuments()
        .then(count => {
            if(count){
                return res.json(count);
            }else{
                return res.status(404).json({"text":"未找到听力文件"});
            }

        }).catch(err => {
        return res.status(404).json(err);
    });

});


router.get("/six/handle/:handle",(req,res) => {
    SixListen.findOne({handle:req.params.handle})
        .then(data => {
            if(data){
                return res.json(data);
            }else{
                return res.status(404).json({"text":"该六级材料可能已被删除"});
            }

        }).catch(err => {
        return res.status(404).json(err);
    });

});


//校验答案并且保存成绩
router.post("/six/check/:handle",passport.authenticate('jwt', { session: false }),(req,res) => {
    let errors = {};
    let MyAnswer = [];
    errors.number = 0;

    //校验答案
    SixAnswer.findOne({handle:req.params.handle})
        .then(data => {
            if(!data){
                return res.status(404).json({"text":"没有找到该文章的答案"});
            }
            MyAnswer.push(req.body.one);
            MyAnswer.push(req.body.two);
            MyAnswer.push(req.body.three);
            MyAnswer.push(req.body.four);
            MyAnswer.push(req.body.five);
            MyAnswer.push(req.body.six);
            MyAnswer.push(req.body.seven);
            MyAnswer.push(req.body.eight);
            MyAnswer.push(req.body.nine);
            MyAnswer.push(req.body.ten);
            MyAnswer.push(req.body.eleven);
            MyAnswer.push(req.body.twelve);
            MyAnswer.push(req.body.thirteen);
            MyAnswer.push(req.body.fourteen);
            MyAnswer.push(req.body.fifteen);
            MyAnswer.push(req.body.sixteen);
            MyAnswer.push(req.body.seventeen);
            MyAnswer.push(req.body.eightteen);
            MyAnswer.push(req.body.nineteen);
            MyAnswer.push(req.body.twenty);
            MyAnswer.push(req.body.twentyone);
            MyAnswer.push(req.body.twentytwo);
            MyAnswer.push(req.body.twentythree);
            MyAnswer.push(req.body.twentyfour);
            MyAnswer.push(req.body.twentyfive);

            //校对答案
            if(req.body.one !== data.rightAnswer[0]){
                errors.one = data.rightAnswer[0];
                errors.number ++;
            }
            if(req.body.two !== data.rightAnswer[1]){
                errors.two = data.rightAnswer[1];
                errors.number ++;
            }
            if(req.body.three !== data.rightAnswer[2]){
                errors.three = data.rightAnswer[2];
                errors.number ++;
            }
            if(req.body.four !== data.rightAnswer[3]){
                errors.four = data.rightAnswer[3];
                errors.number ++;
            }
            if(req.body.five !== data.rightAnswer[4]){
                errors.five = data.rightAnswer[4];
                errors.number ++;
            }
            if(req.body.six !== data.rightAnswer[5]){
                errors.six = data.rightAnswer[5];
                errors.number ++;
            }
            if(req.body.seven !== data.rightAnswer[6]){
                errors.seven = data.rightAnswer[6];
                errors.number ++;
            }
            if(req.body.eight !== data.rightAnswer[7]){
                errors.eight = data.rightAnswer[7];
                errors.number ++;
            }
            if(req.body.nine !== data.rightAnswer[8]){
                errors.nine = data.rightAnswer[8];
                errors.number ++;
            }
            if(req.body.ten !== data.rightAnswer[9]){
                errors.ten = data.rightAnswer[9];
                errors.number ++;
            }
            if(req.body.eleven !== data.rightAnswer[10]){
                errors.eleven = data.rightAnswer[10];
                errors.number ++;
            }
            if(req.body.twelve !== data.rightAnswer[11]){
                errors.twelve = data.rightAnswer[11];
                errors.number ++;
            }
            if(req.body.thirteen !== data.rightAnswer[12]){
                errors.thirteen = data.rightAnswer[12];
                errors.number ++;
            }
            if(req.body.fourteen !== data.rightAnswer[13]){
                errors.fourteen = data.rightAnswer[13];
                errors.number ++;
            }
            if(req.body.fifteen !== data.rightAnswer[14]){
                errors.fifteen = data.rightAnswer[14];
                errors.number ++;
            }
            if(req.body.sixteen !== data.rightAnswer[15]){
                errors.sixteen = data.rightAnswer[15];
                errors.number ++;
            }
            if(req.body.seventeen !== data.rightAnswer[16]){
                errors.seventeen = data.rightAnswer[16];
                errors.number ++;
            }
            if(req.body.eightteen !== data.rightAnswer[17]){
                errors.eightteen = data.rightAnswer[17];
                errors.number ++;
            }
            if(req.body.nineteen !== data.rightAnswer[18]){
                errors.nineteen = data.rightAnswer[18];
                errors.number ++;
            }
            if(req.body.twenty !== data.rightAnswer[19]){
                errors.twenty = data.rightAnswer[19];
                errors.number ++;
            }
            if(req.body.twentyone !== data.rightAnswer[20]){
                errors.twentyone = data.rightAnswer[20];
                errors.number ++;
            }
            if(req.body.twentytwo !== data.rightAnswer[21]){
                errors.twentytwo = data.rightAnswer[21];
                errors.number ++;
            }
            if(req.body.twentythree !== data.rightAnswer[22]){
                errors.twentythree = data.rightAnswer[22];
                errors.number ++;
            }
            if(req.body.twentyfour !== data.rightAnswer[23]){
                errors.twentyfour = data.rightAnswer[23];
                errors.number ++;
            }
            if(req.body.twentyfive !== data.rightAnswer[24]){
                errors.twentyfive = data.rightAnswer[24];
                errors.number ++;
            }


            //保存成绩
            //scorex是成绩
            const scorex = (100 - errors.number * 4);
            let flag = true;
            const personScore = {
                score: scorex.toString(),
                handle: req.params.handle,
                answers:MyAnswer
            };

            SixHistory.findOne({user:req.user.id})
                .then(history => {
                    if(!history) {

                        //保存成绩
                        const newHistory = new SixHistory({
                            user: req.user.id
                        });

                        newHistory.scores.push(personScore);
                        newHistory.save().then((data) => {
                            return res.json({"data":data,"errors":errors});
                        }).catch(err => {
                            return res.status(404).json(err);
                        });

                    }else{
                        for(let i = 0;i < history.scores.length;i++){
                            if(history.scores[i].handle === req.params.handle){
                                flag = false;
                            }
                        }
                        if(!flag){
                            return res.json({"errors":errors,"text":"成绩已存在"});
                        }
                        history.scores.push(personScore);
                        history.save().then((data) => {
                            return res.json(data);
                        }).catch(err => {
                            return res.status(404).json(err);
                        });
                    }
                }).catch(err => {
                return res.status(404).json(err);
            });
        }).catch(err => {
        return res.status(404).json(err);
    });

})



//Ted 得到ted听力的数量
router.get("/ted/count",(req,res) => {
    Ted.countDocuments()
        .then(count => {
            if(count){
                return res.json(count);
            }else{
                return res.status(404).json({"text":"未找到TED听力文件"});
            }
        }).catch(err => {
        return res.status(404).json(err);
    });

});


//Ted得到全部文章
router.get("/ted/all",(req,res) => {
    Ted.find()
        .then(data => {
            return res.json(data);
        }).catch(err => {
        return res.status(404).json(err);
    });
});


// Ted 得到特定的ted听力
router.get("/ted/:handle",(req,res) => {
    Ted.findOne({handle:req.params.handle})
        .then(data => {
            return res.json(data);
        }).catch(err => {
        return res.status(404).json(err);
    });
});



// //插入原文。
// router.get("/charu/:handle",(req,res) => {
//     const article = {
//         article:""
//     };
//     const article1 = JSON.stringify(article);
//     FourListen.findOne({handle:req.params.handle})
//         .then(data => {
//             data.article = article1;
//             data.save().then(data1 => {
//                 res.json(data1);
//             });
//         }).catch(err => {
//         return res.status(404).json(err);
//     });
// });



// //存储ted文章数据
// router.get("/ted/:handle",(req,res) => {
//     const article = {
//         article:""
//     };
//     const article1 = JSON.stringify(article);
//     Ted.findOne({handle:req.params.handle})
//         .then(data => {
//             data.article = article1;
//             data.save().then(data1 => {
//                 res.json(data1);
//             });
//         }).catch(err => {
//         return res.status(404).json(err);
//     });
// });

module.exports = router;


