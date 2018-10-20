var Validator = require('validator');
const isEmpty = require('./is-empty');


module.exports = function (data){
    let errors = {};
    data.SchoolNumber = !isEmpty(data.SchoolNumber) ? data.SchoolNumber : '';
    data.password = !isEmpty(data.password) ? data.password : '';


    if(Validator.isEmpty(data.SchoolNumber)){
        errors.SchoolNumber = "学号不能为空!";
    }


    if(Validator.isEmpty(data.password)){
        errors.password = "密码不能为空!";
    }

    return {
        errors,
        isValid:isEmpty(errors)
    }
}