import React from 'react';

import Products from "./products";
import MdMenu from './mdMenu';
import Menu from "./menu";


const productsPage = () => {
    return (
        <div>
            <MdMenu/>
            <Menu/>
            <div className='pb-12 md:px-10'>
            <Products/>
            </div>
        </div> 
    );
};

export default productsPage;