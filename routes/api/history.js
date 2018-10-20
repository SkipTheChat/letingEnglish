const express = require('express');
const router  = express.Router();
const mongoose =require('mongoose');
const passport = require("passport");

const FourHistory = require("../../models/FourHistory");
const FourAnswer = require("../../models/FourAnswer");

const SixHistory = require("../../models/SixHistory");
const SixAnswer = require("../../models/SixAnswer");


//四级
//获取全部成绩渲染页面
router.get("/four/personScore",passport.authenticate('jwt', { session: false }),(req,res) => {
    FourHistory.findOne({user:req.user.id})
        .populate("user",["name"])
        .then(history => {
            if(history){
                return res.json(history);
            }else{
                return res.json({"text":"还未有成绩"});
            }
        }).catch(err => {
        return res.status(404).json(err);
    });
});
 
 

//获取部分成绩以及错题
router.get("/four/personScore/:handle",passport.authenticate('jwt', { session: false }),(req,res) => {
    FourHistory.findOne({user:req.user.id})
        .then(history => {
            if(history){
                for(let i = 0;i < history.scores.length;i++){
                    if(history.scores[i].handle === req.params.handle){
                       return res.json(history.scores[i]);
                    }
                }
            }else{
                return res.json({"text":"未找到错题"});
            }
        }).catch(err => {
        return res.status(404).json(err);
    });
});


//获取正确答案
router.get("/four/rightanswer/:handle",passport.authenticate('jwt', { session: false }),(req,res) => {
    FourAnswer.findOne({handle:req.params.handle})
        .then(rightanswers => {
            if(rightanswers){
                return res.json(rightanswers);
            }else{
                return res.json({"text":"未找到正确答案"});
            }
        }).catch(err => {
        return res.status(404).json(err);
    });
});



//六级
//获取全部成绩渲染页面
router.get("/six/personScore",passport.authenticate('jwt', { session: false }),(req,res) => {
    SixHistory.findOne({user:req.user.id})
        .populate("user",["name"])
        .then(history => {
            if(history){
                return res.json(history);
            }else{
                return res.json({"text":"还未有成绩"});
            }
        }).catch(err => {
        return res.status(404).json(err);
    });
});


//获取部分成绩以及错题
router.get("/six/personScore/:handle",passport.authenticate('jwt', { session: false }),(req,res) => {
    SixHistory.findOne({user:req.user.id})
        .then(history => {
            if(history){
                for(let i = 0;i < history.scores.length;i++){
                    if(history.scores[i].handle === req.params.handle){
                        return res.json(history.scores[i]);
                    }
                }
            }else{
                return res.json({"text":"未找到错题"});
            }
        }).catch(err => {
        return res.status(404).json(err);
    });
});


//获取正确答案
router.get("/six/rightanswer/:handle",passport.authenticate('jwt', { session: false }),(req,res) => {
    SixAnswer.findOne({handle:req.params.handle})
        .then(rightanswers => {
            if(rightanswers){
                return res.json(rightanswers);
            }else{
                return res.json({"text":"未找到正确答案"});
            }
        }).catch(err => {
        return res.status(404).json(err);
    });
});


module.exports = router;