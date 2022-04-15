import React from 'react';

// images
import logo from "../../image/Group 8811.png"
import logo2 from "../../image/laptop.png"
import logo3 from "../../image/sat.png"
import Banner from "../../image/Banner.png"


const Breadcrumb = ({j}) => {
    return (
        <div className='hidden md:block col-span-3 xl:col-span-2 row-span-2'>
            <div className='bg-white h-fit pb-6 mr-4 pr-4 pl-2 pt-5  rounded-lg '>
                <h1 className='text-orange-400 text-xl font-bold mb-8'>دسته بندی</h1>
                    <div className='flex mt-6'>
                        <img src={logo} alt="logo" className='h-fit'/>
                        <h1 className={j == "تلفن همراه" ? 'mt-[1px] mr-2 text-lg text-black transition-all' : 'mt-[1px] mr-2 text-lg text-gray-400 transition-all'}>تلفن همراه</h1>
                    </div>
                    <div className='flex mt-6'>
                        <img src={logo2} alt="logo" className='h-fit'/>
                        <h1 className={j == "لپ تاپ" ? 'mt-[1px] mr-2 text-lg text-black transition-all' : 'mt-[1px] mr-2 text-lg text-gray-400 transition-all'}>لپ تاپ</h1>
                    </div>
                    <div className='flex mt-6'>
                        <img src={logo3} alt="logo" className='h-fit'/>
                        <h1 className={j == "ساعت هوشمند" ? 'mt-[1px] mr-2 text-lg text-black transition-all' : 'mt-[1px] mr-2 text-lg text-gray-400 transition-all'}>ساعت هوشمند</h1>
                    </div>
            </div>
            <img src={Banner} alt="banner" className='w-56 mr-4 mt-40 mb-4 cursor-pointer'/>
            <div className='bg-white h-fit pb-6 mr-4 pr-4 pl-2 pt-5  rounded-lg'>
                <h1 className='text-orange-400 text-xl font-bold mb-4'>دسترسی سریع</h1>
                    <div className='mt-2 '>
                        <h1 className='mt-[1px] text-lg  text-gray-900'>طراحی</h1>
                    </div>
                    <div className='mt-2 '>
                        <h1 className='mt-[1px] text-lg  text-gray-900'>دوربین</h1>
                    </div>
                    <div className='mt-2 '>
                        <h1 className='mt-[1px] text-lg text-gray-900'>باطری</h1>
                    </div>
            </div>
        </div>
    );
};

export default Breadcrumb;