const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const gravatar = require('gravatar');
const jwt = require('jsonwebtoken');
const passport = require("passport");
const keys = require('../../config/keys');
const User = require("../../models/User");
// const SchoolUsers = require("../../models/SchoolUsers");
//引入验证方法
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

 
// router.post("/register", (req, res) => {
// 	const {errors,isValid} = validateRegisterInput(req.body);
// 	if(!isValid) {
// 		return res.status(404).json(errors);
// 	}
//     SchoolUsers.findOne({SchoolNumber:req.body.SchoolNumber})
// 		.then(schooluser => {
// 			if(!schooluser){
//                 return res.status(404).json({"SchoolNumber":"学号错误"});
//             }
//
//             if(schooluser.name !== req.body.name){
//                 return res.status(404).json({"name":"姓名错误"});
//             }
//             User.findOne({
//                 SchoolNumber: req.body.SchoolNumber
//             }).then((user) => {
//                 if(user) {
//                     return res.status(404).json({
//                         occupied: "用户已被注册"
//                     });
//                 } else {
//                     const newUser = {
//                         SchoolNumber:req.body.SchoolNumber,
//                         name: req.body.name,
//                         email: req.body.email,
//                         password: req.body.password
//                     };
//                     bcrypt.genSalt(10, function(err, salt) {
//                         bcrypt.hash(newUser.password, salt, function(err, hash) {
//                             if(err) {
//                                 throw err;
//                             }
//                             newUser.password = hash;
//                             const newUser1 = new User(newUser);
//                             newUser1.save()
//                                 .then(user => {
//                                     return res.json(user);
//                                 }).catch(err => {
//                                 console.log(err);
//                             });
//                         });
//                     });
//                 }
//             });
//
// 		}).catch(err => {
// 			console.log(err);
// 	});
// });


router.post("/register", (req, res) => {
    const {errors, isValid} = validateRegisterInput(req.body);
    if (!isValid) {
        return res.status(404).json(errors);
    }
    const newUser = {
        SchoolNumber: req.body.SchoolNumber,
        name: req.body.name,
        password: req.body.password
    };
    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(newUser.password, salt, function (err, hash) {
            if (err) {
                throw err;
            }
            newUser.password = hash;
            const newUser1 = new User(newUser);
            newUser1.save()
                .then(user => {
                    return res.json(user);
                }).catch(err => {
                console.log(err);
            });
        });
    });
});

//得到token
router.post("/login", (req, res) => {
    const {
        errors,
        isValid
    } = validateLoginInput(req.body);
    if(!isValid) {
        return res.json(errors);
    }
    const SchoolNumber = req.body.SchoolNumber;
    const password = req.body.password;
    User.findOne({
        SchoolNumber: SchoolNumber
    })
        .then(user => {
            if(!user) {
                return res.status(404).json({
                    SchoolNumber: "用户不存在！"
                });
            }
            bcrypt.compare(password, user.password, (err, isMatch) => {
                if(err) throw err;
                if(isMatch) {
                    const rule = {
                        id: user.id,
                        name: user.name,
                        SchoolNumber: user.SchoolNumber

                    };
                    //3600 过期时间的单位是秒
                    jwt.sign(rule, keys.secretOrKey, {
                        expiresIn: 18000
                    }, (err, token) => {
                        if(err) {
                            throw err;
                        }
                        return res.json({
                            success: true,
                            token: "Bearer " + token
                        });
                    });
                } else {
                    return res.status(404).json({
                        password: "密码错误"
                    });
                }
            });
        })
});

module.exports = router;