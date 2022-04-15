import React from 'react';

// components
import Menu from "./menu";
import Header from "./header";

// image
import phone from "../image/phon.png"
import brand1 from "../image/Brand1.png"
import brand2 from "../image/Brand4.png"
import L from "../image/L.png"
import brand3 from "../image/Brand2.png"
import brand4 from "../image/Brand5.png"
import wa from "../image/wa.png"
import brand5 from "../image/Brand3.png"
import brand6 from "../image/Brand6.png"

const grouping = () => {
    return (
        <div className='md:hidden'>
        <Menu name="دسته بندی"/>
        <Header name="دسته بندی"/>
            <div className='flex flex-col h-fit mt-8 mx-2 mb-16 items-center'>
                <div className='flex items-end overflow-x-scroll pb-4'>
                    <img className='w-36 h-[190px] cursor-pointer' src={phone} alt="image" />
                    <img className='h-40 cursor-pointer' src={brand1} alt="image" />
                    <img className='h-40 -mr-2 cursor-pointer' src={brand2} alt="image" />
                </div> 
                <div className='flex items-end overflow-x-scroll mt-2 pb-4'>
                    <img className='w-36 h-[190px] cursor-pointer' src={L} alt="image" />
                    <img className='h-40 cursor-pointer' src={brand3} alt="image" />
                    <img className='h-40 -mr-4 cursor-pointer' src={brand4} alt="image" />
                </div> 
                <div className='flex items-end overflow-x-scroll mt-2 pb-4'>
                    <img className='w-36 h-[190px] cursor-pointer' src={wa} alt="image" />
                    <img className='h-40 cursor-pointer' src={brand5} alt="image" />
                    <img className='h-40 -mr-2 cursor-pointer' src={brand6} alt="image" />
                </div> 
            </div>
        </div>
    );
};

export default grouping;