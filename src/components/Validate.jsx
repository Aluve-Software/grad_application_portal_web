import * as Yup from 'yup';

/** validate  */
export async function emailValidate(values){
    const errors = emailVerify({}, values);
    return errors;
}
export async function registerValidate(values){
    const errors = emailVerify({}, values);
    passwordVerify(errors,values);

    return errors;
}
export async function loginValidate(values){
    const errors = passwordVerify({}, values);
    emailVerify(errors,values);

    return errors;
}
function emailVerify(errors ={}, values){
    if(!values.email){
        errors.email = toast.error('Email Required..!');
    }else if(values.email.includes(" ")){
        errors.email = toast.errors('Invalid Email..!')
    }
    return errors;
}

export async function passwordValidate(values){
    const errors = passwordVerify({}, values);
    return errors;
}

function passwordVerify(errors ={}, values){

    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};:'"\\|,.<>\/?~]/;

    if(!values.password){
        errors.password = toast.error('Password Required..!');
    }else if(values.password.includes(" ")){
        errors.password = toast.errors('Invalid Password..!');
    }
    else if(values.password.length < 8 && values.password.length > 50){
        errors.password = toast.error("Password must be more than 7 characters..!");
    }else if(!specialChars.test(values.password)){
        errors.password = toast.error("Password must have special characters");
    }
    return errors;
}