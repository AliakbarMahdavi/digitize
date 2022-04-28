export const validate = (data) => {
    const error = {};

    if(!data.Name){
        error.Name = "نام را وارد کنید"
    }
    else{
        delete error.Name;
    }

    if(!data.Email){
        error.Email = "ایمیل را وارد کنید"
    }
    else if(!/\S+@\S+\.\S+/.test(data.Email)){
        error.Email = "ایمیل معتبر نیست";
    }
    else{
        delete error.Email;
    }

    if(!data.Password){
        error.Password = "پسورد را وارد کنید";
    }
    else if(data.Password.length <= 6) {
        error.Password = "پسورد کوتاه است"
    }else{
        delete error.Password;
    }

    if(!data.ConfirmPassword ){
        error.ConfirmPassword = "پسورد را وارد کنید";
    }
    else if(!(data.ConfirmPassword === data.Password)){
        error.ConfirmPassword = "پسورد اشتباه است";
    }
    else{
        delete data.ConfirmPassword;
    }

    

    return error;
}