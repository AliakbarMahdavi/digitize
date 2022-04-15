import React, { useState } from 'react';

const Sort = () => {

    const [state, setState] = useState(1);

    const Filter = (e) => {
        setState(e.target.name)
    }


    return (
        <div className='hidden md:block md:col-span-9 xl:col-span-10  bg-white mx-4 h-[60px] rounded-md'>
            <div className='flex items-center h-full md:gap-x-4 lg:gap-x-8'>
                <div className='bg-orange-100 p-2 pt-3 pl-3 rounded-lg mr-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-orange-500 h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4" />
                    </svg>
                </div>
                <button onClick={Filter} name="1" className={state == 1 ? 'h-full text-black md:text-sm lg:text-[16px] relative ' : 'h-full text-gray-400 md:text-sm lg:text-[16px]'}>
                    محبوب ترین محصول
                    {state == 1 ? <span className='w-2 h-2 bg-red-400 absolute top-3 rounded-full md:mr-0 lg:mr-2'></span> : null}
                    </button>    
                <button onClick={Filter} name="2" className={state == 2 ? 'h-full text-black md:text-sm lg:text-[16px] relative' : 'h-full text-gray-400 md:text-sm lg:text-[16px]'}>
                    پربازدید ترین محصول
                    {state == 2 ? <span className='w-2 h-2 bg-red-400 absolute top-3 rounded-full mr-2'></span> : null}
                    </button>    
                <button onClick={Filter} name="3" className={state == 3 ? 'h-full text-black md:text-sm lg:text-[16px] relative' : 'h-full text-gray-400 md:text-sm lg:text-[16px]'}>
                    گران ترین محصول
                    {state == 3 ? <span className='w-2 h-2 bg-red-400 absolute top-3 rounded-full mr-2'></span> : null}
                    </button>    
                <button onClick={Filter} name="4" className={state == 4 ? 'h-full text-black md:text-sm lg:text-[16px] relative' : 'h-full text-gray-400 md:text-sm lg:text-[16px]'}>
                    ارزان ترین محصول
                    {state == 4 ? <span className='w-2 h-2 bg-red-400 absolute top-3 rounded-full mr-2'></span> : null}
                    </button>    
            </div>    
        </div>
    );
};

export default Sort;