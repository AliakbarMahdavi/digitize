import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { validate } from "./formvalidate/validate";

const login = () => {
    const navigate = useNavigate();

    const [data, setDate] = useState({})
    const [errors, setErrors] = useState({})
    const [touch, setTouch] = useState({})

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
            Email:true,
            Password:true
        })
       }else{
        navigate("/");
       }
    }


    return (
        <div className='h-screen flex flex-col items-center justify-center px-6 md:px-0 relative'>
            <Link to="/" className='absolute top-10 right-4 md:right-16 cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-14 w-14 " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </Link>
            <div className='w-full md:w-fit h-fit bg-white p-4 pb-10 pt-6 flex flex-col rounded-xl '>
                <h1 className='text-[40px] mb-12 text-black font-bold w-full text-center'>ورود</h1>
                <label className=' mr-2'>ایمیل:</label>
                <input onChange={clickHandler} onClick={touched} name="Email" type="text" className='md:w-[300px] rounded-xl bg-gray-100 mt-2 outline-orange-200 h-10 border-2 border-orange-400 p-4 text-left'/>
                {touch.Email && errors.Email ? <span className='text-red-500 text-sm mt-2 mr-2'>{errors.Email}</span> : null}
                <label className='mt-8 mr-2'>پسورد:</label>
                <input onChange={clickHandler} onClick={touched} name="Password" type="text" className='md:w-[300px] rounded-xl bg-gray-100 mt-2 outline-orange-200 h-10 border-2 border-orange-400 p-4 text-left'/>
                {touch.Password && errors.Password ? <span className='text-red-500 text-sm mt-2 mr-2'>{errors.Password}</span> : null}
                <div className='mt-16 w-full flex justify-center'>
                    <button onClick={check} className='w-28 h-10 bg-orange-400 text-white text-xl font-bold rounded-lg ml-6 md:ml-[70px] cursor-pointer'>ورود</button>
                    <Link to="/signup" className='w-28 h-10 border-2 flex justify-center items-center border-orange-400 text-orange-400 text-xl font-bold rounded-lg cursor-pointer'>ثبت نام</Link>
                </div>
            </div>
        </div>
    );
};

export default login;