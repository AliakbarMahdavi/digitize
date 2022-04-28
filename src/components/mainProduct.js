import React from 'react';

// component
import Product from './product';

// data
import data from "../api/data";


const Products = () => {

    return (
        <div className='mt-10 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-y-7 gap-x-4 px-4 mb-2  md:col-span-9 xl:col-span-10'>
            {data().map(item => <Product key={item.id} img={item.img} name={item.name} price={item.price} id={item.id}/>)}
        </div>
    );
};

export default Products;