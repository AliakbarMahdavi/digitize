import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { validate } from "./formvalidate/signupValidate";

const signup = () => {
    const navigate = useNavigate();

    const [data, setDate] = useState({})
    const [errors, setErrors] = useState({})
    const [touch, setTouch] = useState({})
    const [massege, setMassege] = useState(false)

    const clickHandler = (e) => {
        setDate({...data,[e.target.name]:e.target.value});
    }

    useEffect(() => {
        setErrors(validate(data))
    },[data])

    const touched = (e) => {
        setTouch({...touch,[e.target.name]:true})
    }

    const check = () => {
       if(Object.keys(errors).length){
        setTouch({
            Name:true,
            Email:true,
            Password:true,
            ConfirmPassword:true
        })
       }else{
        setMassege(true)
        setTimeout(()=>{
         navigate("/");
        },1000)
       }
    }
    return (
        <div className='h-screen flex flex-col items-center justify-center px-6 md:px-0 relative'>
            <Link to="/" className='absolute top-2 right-4 md:top-10 md:right-16 cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" class="md:h-14 w-10 md:w-14 " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </Link>
            <div className='w-full md:w-fit h-fit bg-white p-8 pt-10 pb-4 flex flex-col rounded-xl'>
                <h1 className='text-[40px] mb-4 md:mb-16 text-black font-bold text-center'>ثبت نام</h1>
                <label className=' mr-2'>نام:</label>
                <input onChange={clickHandler} onClick={touched} name="Name" type="text" className='md:w-[300px] rounded-xl bg-gray-100 mt-2 outline-orange-200 h-4 md:h-10 border-2 border-orange-400 p-4 text-left'/>
                {touch.Name && errors.Name ? <span className='text-red-500 text-sm mt-2 mr-2'>{errors.Name}</span> : null}
                <label className=' mr-2  mt-4 md:mt-8'>ایمیل:</label>
                <input onChange={clickHandler} onClick={touched} name="Email" type="text" className='md:w-[300px] rounded-xl bg-gray-100 mt-2 outline-orange-200 h-4 md:h-10 border-2 border-orange-400 p-4 text-left'/>
                {touch.Email && errors.Email ? <span className='text-red-500 text-sm mt-2 mr-2'>{errors.Email}</span> : null}
                <label className=' mt-4 md:mt-8 mr-2'>پسورد:</label>
                <input onChange={clickHandler} onClick={touched} name="Password" type="password" className='md:w-[300px] rounded-xl bg-gray-100 mt-2 outline-orange-200 h-4 md:h-10 border-2 border-orange-400 p-4 text-left'/>
                {touch.Password && errors.Password ? <span className='text-red-500 text-sm mt-2 mr-2'>{errors.Password}</span> : null}
                <label className=' mt-4 md:mt-8 mr-2'>تکرار پسورد:</label>
                <input onChange={clickHandler} onClick={touched} name="ConfirmPassword" type="password" className='md:w-[300px] rounded-xl bg-gray-100 mt-2 outline-orange-200 h-4 md:h-10 border-2 border-orange-400 p-4 text-left'/>
                {touch.ConfirmPassword && errors.ConfirmPassword ? <span className='text-red-500 text-sm mt-2 mr-2'>{errors.ConfirmPassword}</span> : null}
                <div className='mt-16 w-full'>
                    <button onClick={check} className='w-full h-10 bg-orange-400 text-white text-xl font-bold rounded-lg cursor-pointer'>تکمیل</button>
                    <h1 className='mt-4 mr-2'>حساب دارید ؟ <Link className="text-blue-700" to="/login">ورود</Link></h1>
                </div>
                {massege ? <h1 className='text-green-500 mt-6 mr-2'>با موفقیت وارد شدید</h1> : null}
            </div>
        </div>
    );
};

export default signup;