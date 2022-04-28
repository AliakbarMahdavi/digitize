import React from 'react';

//components
import Sort from './sort';
import MdFilters from './mdFilters';
import MainProduct from "./mainProduct"

const mdUp = () => {
    

    return (
        <div className='container mx-auto max-w-screen-2xl grid md:grid-cols-12 md:grid-rows-[60px_minmax(900px,_1fr)_100px]  md:mt-8 '>
            <MdFilters/>
            <Sort/>
            <MainProduct/>
        </div>
    );
};

export default mdUp;