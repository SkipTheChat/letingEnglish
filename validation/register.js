//有了validator之后，出错后就会返回错误的类型而不会直接服务器报错了。

var Validator = require('validator');
 const isEmpty = require('./is-empty');

// data是user.js那里传过来的req.body

module.exports = function (data){
  let errors = {};
  //判断是否为空,如果是空就给data.name赋值一个空字符串,因为要确保data.name是一个字符串,不然会报错的.
    data.SchoolNumber = !isEmpty(data.SchoolNumber) ? data.SchoolNumber : '';
    data.name = !isEmpty(data.name) ? data.name : '';
    data.password = !isEmpty(data.password) ? data.password : '';
    data.password2 = !isEmpty(data.password2) ? data.password2 : '';


    if(Validator.isEmpty(data.name)){
        errors.name = "名字不能为空!";
    }

    if(Validator.isEmpty(data.SchoolNumber)){
        errors.SchoolNumber = "学号不能为空!";
    }

    if(!Validator.isLength(data.password,{min:6,max:10})){
        errors.password = "密码的长度不能小于6位并且不能大于10位!";
    }

    if(Validator.isEmpty(data.password2)){
        errors.password2 = "确认密码不能为空!";
    }

    if(!Validator.equals(data.password,data.password2)){
        errors.password2 = "两次不一致!";
    }

    return {
      errors,
      isValid:isEmpty(errors)
  }
}