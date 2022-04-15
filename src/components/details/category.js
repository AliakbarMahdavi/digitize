import React from 'react';

import Left from "../../image/Arrow---Left-2.png"

const category = ({brand, j, name}) => {

    const mainName = name;
    const splitedName = mainName.split(" ");

    return (
        <div className='col-span-9 xl:col-span-10 bg-transparent md:bg-white rounded-md flex items-center pr-6 gap-x-3' >
            <h1 className='text-orange-400'>{j}</h1>
            <img src={Left} alt="logo" className='w-2 h-2'/>
            <h1 className='text-orange-400'>
برند                
                &nbsp; 
                {brand}
            </h1>
            <img src={Left} alt="logo" className='w-2 h-2'/>
            <h1>
                {`${splitedName[0]} ${splitedName[1]}`}
            </h1>
        </div>
    );
};

export default category;