import React from 'react';

// image
import Logo from "../image/search-normal.png"; 
import Logo2 from "../image/Logo (1).png"

const header = ({name}) => {
    return (
        <div className='flex md:hidden flex-row-reverse justify-between px-4 mt-6'>
            <div className=' h-fit p-1 rounded-md bg-white shadow-lg shadow-black-500 mt-[6px] cursor-pointer'>
                <img src={Logo} alt="Logo" />
            </div>
            <div className=' font-bold text-xl text-slate-700'>
                <h1 className='mt-2'>{name}</h1>
            </div>
            <div>
                <img className='h-10 mt-1' src={Logo2} alt="Logo" />
            </div>
        </div>
    );
};

export default header;