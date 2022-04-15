import React from 'react';
import { Link } from 'react-router-dom';

// image
import Logo2 from "../image/Vector2.png";
import Logo3 from "../image/category.png";
import Logo4 from "../image/home-2.png";

const menu = ({name}) => {
    return (
        <div className='md:hidden w-full h-14 bg-white fixed z-50 bottom-0 flex flex-row-reverse justify-around items-center'>
            <Link to="/login">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-[36px] text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
            </Link>
            <Link to="/cart" className='flex items-center flex-row-reverse'>
                {name == "سبد خرید" ? <h1 className='mr-2 font-bold mt-[3px]'>سبد خرید</h1> : null}
                <img src={Logo2} alt="logo" />
            </Link>
            <Link to="/grouping" className='flex items-center flex-row-reverse'>
                {name == "دسته بندی" ? <h1 className='mr-2 font-bold mt-[2px]'>دسته بندی</h1> : null} 
                <img src={Logo3} alt="logo" />
            </Link>
            <Link to="/" className='flex items-center flex-row-reverse'>
                {name == "خانه" ? <h1 className='mr-2 font-bold mt-2'>خانه</h1> : null}
                <img src={Logo4} alt="logo" />
            </Link>
        </div>
    );
};

export default menu;