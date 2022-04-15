import React from 'react';

// image
import FilterLogo from "../image/filter.png"


const Filters = () => {
    return (
        <div className='md:hidden flex flex-row-reverse gap-x-2 mt-5 cursor-pointer px-4'>
            <div className='bg-white flex w-[48%] h-fit flex-row-reverse justify-end py-3 px-2 rounded-md'>
                <h1 className='mr-2 text-slate-800 text-sm font-bold mt-[2px] '>فیلتر: برند اپل</h1>
                <img className='h-fit' src={FilterLogo} alt="filter" />
            </div>
            <div className='bg-white flex w-[52%] h-fit flex-row-reverse py-3 px-2 justify-end  rounded-md cursor-pointer'>
                <h1 className='mr-1 text-slate-800 text-sm font-bold mt-[2px]'>محبوب ترین محصول</h1>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4" />
                </svg>
            </div>
        </div>
    );
};

export default Filters;