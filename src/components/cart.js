import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// react-redux
import { useSelector, useDispatch } from 'react-redux';

// components
import CartProduct from './cartProduct';
import Header from './header';
import MdMenu from './mdMenu';
import Menu from "./menu";

import { checkOut_item } from '../redux/products/productsAction';


const Cart = () => {

    useEffect(() => {
        window.scrollTo({
            top:0,
            behavior: 'smooth'
        })
    },[])

    const cartData = useSelector(state => state);
    const dispatch = useDispatch();

    return (
        <div>
        <Menu name="سبد خرید"/>
        <MdMenu/>
        <Header name="سبد خرید"/>        
            <div className='hidden md:block w-full px-5 pt-10 pb-10 container mx-auto 2xl:max-w-screen-2xl'>
                <div className='w-[58%] flex justify-between pl-8 mb-10'>
                    <h1 className='text-slate-800 md:text-lg xl:text-2xl'>سبد خرید</h1>
                    <Link to="/" className='text-orange-400 md:text-lg text-xl'>بازگشت به خانه</Link>
                </div>
                <div className='flex w-full gap-x-8'>
                    <div className='w-[1200px] h-fit bg-stone-50 rounded-lg'>
                        {cartData.products.map(item => item.quantity < 1 ? dispatch({type:"REAMOVE", payload:item}) : <CartProduct key={item.id} data={item} />)}
                    </div>
                    {
                        cartData.itemsCounter !== 0 ? 
                        <div className='w-[900px]'>
                        <div className='h-fit bg-stone-50 p-6 rounded-lg space-y-10'>
                            <div className='flex justify-between'>
                                <h1 className='text-lg xl:text-xl'>مجموع قیمت:</h1>
                                <h1 className='text-orange-600 text-lg xl:text-xl'>{cartData.total.toLocaleString()} تومان</h1>
                            </div>
                            <div className='flex justify-between'>
                                <h1 className='text-lg xl:text-xl'>کد تخفیف:</h1>
                                <div>
                                    <input type="text" className='rounded-md rounded-l-none py-2 w-20 xl:w-40 text-center bg-gray-200' placeholder='123ABC' />
                                    <button className='bg-orange-500 px-4 py-2 rounded-md rounded-r-none'>تایید</button>
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <h1 className='text-xl'>تخفیف:</h1>
                                <h1 className='text-xl'>250,000 تومان</h1>
                            </div>
                            <div className='flex justify-between pt-10'>
                                <h1 className='text-xl'>قیمت نهایی:</h1>
                                <h1 className='text-orange-600 text-xl'>{cartData.total.toLocaleString()} تومان</h1>
                            </div>
                        </div>
                        <button className='w-full bg-orange-500 rounded-lg p-4 text-white text-2xl mt-8 hover:bg-orange-600 '>ادامه فرایند خرید</button>
                        <button onClick={() => dispatch(checkOut_item())} className='w-full border-2 border-orange-500 rounded-lg p-4 text-orange-500 text-2xl mt-4 hover:bg-red-100 '>انصراف از خرید</button>
                    </div>
                    :
                    <h1 className='absolute left-[43%] top-[44%] text-2xl'>سبد خرید خالی است !!!</h1>
                    }
                </div>
            </div>
            <div className='block md:hidden pt-10 space-y-2 px-2 mb-16'>
            {cartData.products.map(item => item.quantity < 1 ? dispatch({type:"REAMOVE", payload:item}) : <CartProduct key={item.id} data={item} />)}
            </div>
        </div>
    );
};


export default Cart;