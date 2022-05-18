import React, { useEffect, useState } from 'react';

// components
import MdMenu from './mdMenu';
import Menu from "./menu";
import Footer from './Footer';

// image
import location from "../image/location.png"
import email from "../image/download.png"

const contactUs = () => {

    const [data, setData] = useState({
        Name:"",
        Email:""
    });

    const [err, setErr] = useState({
       
    });

    useEffect(() => {
        window.scrollTo({
            top:0,
            behavior: 'smooth'
        })
    },[]);

    const changeHandler = (e) => {
        setData({...data,[e.target.name]:e.target.value})
    }
    
    const massege = () => {
        const errMassege = {};
        if(data.Name.length < 1) {
            errMassege.name="نام را وارد کنید*";
        }else{
            delete errMassege.name;
        }
        
        if (!/\S+@\S+\.\S+/.test(data.Email)) {
            errMassege.email="ایمیل معتبر نیست*";
        }else{
            delete errMassege.email;
        }

        return errMassege;
    }

    const clickHandler = () => {
        setErr(massege())
    }

    return (
        <div>
            <Menu/>
            <MdMenu />
            <div className='flex flex-col-reverse justify-center px-10 md:px-5 lg:px-0 md:flex-row w-full lg:w-[90%] m-auto md:p-10 lg:pt-16 mb-20 md:mb-10'>
                <div className='w-full md:w-[50%] mt-10 md:mt-0'>
                    <h1 className='text-2xl text-orange-400 font-bold mt-10 md:mt-0'>راه های ارتباطی</h1>
                    <div className='flex text-gray-600 mt-16 md:mt-32'>
                        <img src={location} alt="img" className='w-10' />
                        <h1 className='mt-2 mr-2'>آدرس : ایران، تهران</h1>
                    </div>
                    <div className='flex text-gray-600 mt-4 mr-[3px]'>
                        <img src={email} alt="img" className='w-8' />
                        <h1 className='mt-[4px] mr-4'>آدرس ایمیل : xrexali@yahoo.com</h1>
                    </div>
                </div>
                <div className='w-full md:w-[50%] flex flex-col relative'>                          
                    <h1 className='text-orange-400 text-2xl font-bold text-center md:text-right mt-10 md:mt-0'>تماس با ما</h1>
                    <label className='text-xl mt-16 md:mt-20 text-gray-500'>نام<b className='text-red-500'>*</b></label>     
                    <input name="Name" onChange={changeHandler} type="text" className='text-right lg:w-[500px] h-14 rounded-xl mt-2 outline-none p-2'/>
                    {err.name ? <h5 className='text-red-500 mt-2' >{err.name}</h5> : null}
                    <label className='text-xl mt-10 text-gray-500'>ایمیل<b className='text-red-500'>*</b></label>     
                    <input name="Email" onChange={changeHandler} type="text" className='lg:w-[500px] h-14 rounded-xl mt-2 outline-none p-2 text-left'/>
                    {err.email ? <h5 className='text-red-500 mt-2' >{err.email}</h5> : null}
                    <label className='text-xl mt-10 text-gray-500'>متن خود را بنویسید<b className='text-red-500'>*</b></label>     
                    <textarea name="" id="" cols="30" rows="10" className='mt-2 lg:w-[500px] h-48 md:h-52 lg:h-64 resize-none outline-none p-2'></textarea>        
                    <button onClick={clickHandler} className='w-32 p-4 bg-orange-400 rounded-full mt-10'>ارسال</button>                                              
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default contactUs;