import React from 'react';

// react-redux
import { useDispatch } from 'react-redux';

//components
import reamove from "../image/reamove.png"
import decrease from "../image/decrease.png"
import increase2 from "../image/increase.png"

import { decrease_item, increase_item, reamove_item } from '../redux/products/productsAction';

const CartProduct = ({data}) => {

    const dispatch = useDispatch();
   
    return (
        <div className='bg-white md:bg-transparent border-b-[1px] border-gray-300 flex items-center rounded-xl md:rounded-none shadow-lg md:shadow-none shadow-gray-300'>
            <img src={data.img} alt="img" className='w-14 m-4 md:w-24 xl:w-28 md:m-4 md:mb-7 md:ml-4 xl:ml-10' />
            <div className='flex flex-col md:gap-y-6 w-full pl-4'>
                <div className='w-full flex justify-between'>
                    <h1 className='text-sm md:text-xl 2xl:text-2xl font-light'>{data.name}</h1>
                    <img src={reamove} onClick={() => dispatch(reamove_item(data))} alt="reamove" className='cursor-pointer h-[12px] md:h-4 2xl:h-6 mt-1'/>
                </div>
                <div className='w-full flex justify-between'>
                    <h1 className='text-orange-500 text-sm mt-[25px] md:text-lg xl:text-xl md:mt-3'>{data.price.toLocaleString()}</h1>
                    <div className='flex gap-x-2 items-center mt-[20px] md:mt-2'>
                        <img src={increase2} onClick={() => dispatch(increase_item(data))} alt="increase" className='w-[18px] md:w-[24px] h-[18px] md:h-[24px] cursor-pointer' />
                        <h1 className='border-2 border-orange-400 p-[2px] md:p-1 text-sm'>{data.quantity}</h1>
                        <img src={decrease} onClick={() => dispatch(decrease_item(data))} alt="decrease" className='w-[18px] md:w-[24px] h-[18px] md:h-[24px] cursor-pointer' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartProduct;