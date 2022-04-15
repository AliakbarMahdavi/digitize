import React from 'react';

// image
import logo from "../image/دیجی‌تایز.png"
import line from "../image/Line 8.png"
import map from "../image/Footer.jpg"
import call from "../image/call.png"

const mdFooter = () => {
    return (
        <div className='w-full bg-white md:pt-4 px-6 md:px-10 pb-4 mt-12 mb-14 md:mb-0'>
            <div className='h-full mx-auto max-w-screen-2xl flex items-center flex-col md:flex-row md:justify-between '>
                <div className='w-[300px]'>
                    <div className='flex mt-10 md:mt-0 lg:mt-2 justify-center md:justify-start'>
                        <img src={logo} alt="logo"  className='h-8 md:h-fit'/>
                        <img src={line} alt="logo" className='h-fit mt-4 md:mt-5 mr-5' />
                    </div>
                    <p className='text-slate-500 md:text-xl w-[100%] lg:w-[440px] xl:w-[480px] mt-4 md:mt-10 leading-9 text-center md:text-right '>دیجی‌تایز عرضه کننده جدیدترین محصولات الکترونیک نظیر لپ تاپ، گوشی هوشمند و ساعت هوشمند می باشد.</p>
                </div>
                <div className='mb-6 md:mb-0'>
                    <h1 className='text-2xl mb-10 mt-8 md:mt-0 lg:mt-8 mdmt-10 text-orange-400'>محصولات</h1>
                    <h1 className='text-lg mb-4 text-slate-700'>تلفن همراه</h1>
                    <h1 className='text-lg mb-4 text-slate-700'>لپ تاپ</h1>
                    <h1 className='text-lg text-slate-700 '>ساعت هوشمند</h1>
                </div>
                <div className='flex flex-col items-end '>
                    <img src={map} alt="map" className='md:h-[200px] lg:h-[280px] md:mb-6'  />
                    <h1 className='flex ml-3'>
                        021-123456
                        <img src={call} alt="call" className='h-5 mr-4' />
                    </h1>
                    <h1 className='ml-12'>xrexali@yahoo.com</h1>
                </div>
            </div>
        </div>
    );
};

export default mdFooter;