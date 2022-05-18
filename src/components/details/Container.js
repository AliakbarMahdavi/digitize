import React, { useState } from 'react';

// react-redux
import { useDispatch } from "react-redux";

// images
import logo10 from "../../image/logo10.png"
import cercoll from "../../image/cercoll.png"
import shop from "../../image/shop.png"
import shop2 from "../../image/shield.svg"
import shop3 from "../../image/truck-time.png"

import { add_item } from '../../redux/products/productsAction';

const Container = ({data}) => {

    const [check, setcheck] = useState("black");


    const CheckHandler = (e) => {
        setcheck(e.target.id)
    }
    const {image, name, price, brand, j, memory, description, img} = data;

    const dispatch = useDispatch();

    return (
        <div className='col-span-9 xl:col-span-10 bg-transparent md:bg-white rounded-md w-full px-4 lg:px-12 xl:px-10 pb-4 mb-20 md:mb-0'>
            <div className='flex flex-col md:flex-row items-center md:justify-between'>
                <div className='flex flex-col md:flex-row mt-10 md:mt-0'>
                    <img src={img} alt="logos" className='w-[200px] md:w-[160px] lg:w-[200px] xl:w-[250px] md:mt-8 md:h-[250px] xl:h-[290px] 2xl:h-[310px]'/>
                    <div className=' md:mr-4 lg:mr-8 xl:mr-10 lg:w-[220px] xl:w-[450px] 2xl:w-[500px]'>
                        <div className='hidden md:flex md:mt-8'>
                            <img src={logo10} alt="logo" />
                            <p className='mt-2 mr-2 text-orange-400 text-sm'>{j}</p>
                            <p className='mt-2 mr-3 text-orange-400 text-sm'>{brand}</p>
                        </div>
                        <div className='mt-12 md:mt-0 md:h-20 md:pt-6 md:border-b-[2px]'>
                            <h1 className='text-2xl font-bold md:font-normal md:text-lg lg:text-2xl xl:text-[26px] text-slate-700'>{name}</h1>
                        </div>
                        <div className='flex mt-8 md:mt-4 2xl:mt-8'>
                                <h1 className='text-xl'>انتخاب رنگ :</h1>
                                <div className='flex flex-row-reverse relative z-0 right-6 md:right-[0px] lg:right-[42px] xl:right-[120px] 2xl:right-[180px]'>
                                    <div onClick={CheckHandler} id="black" className={check === "black" ? "h-6 w-6 2xl:h-8 2xl:w-8 bg-black rounded-full cursor-pointer border-2 border-white  -mr-[4px] flex items-center justify-center ring-1 ring-red-400 absolute right-14 z-30" : "right-14  h-6 w-6 2xl:h-8 2xl:w-8 bg-black rounded-full cursor-pointer border-2 border-white  -mr-[4px] flex items-center justify-center absolute z-30"}>
                                        {
                                        check === "black" ? <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 2xl:h-8 2xl:w-8 text-white " viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                        </svg> :
                                        null
                                        }
                                    </div>
                                    <div onClick={CheckHandler} id="red" className={check === "red" ? "h-6 w-6 2xl:h-8 2xl:w-8 bg-red-500 rounded-full cursor-pointer border-2 border-white md:left-4 2xl:left-5 absolute z-20 flex items-center justify-center ring-1 ring-red-400 right-9" : "right-9 h-6 w-6 2xl:h-8 2xl:w-8 bg-red-500 rounded-full cursor-pointer border-2 border-white left-4 md:left-4 2xl:left-5 absolute z-20"}>
                                        {
                                        check === "red" ? <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 2xl:h-8 2xl:w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                        </svg> :
                                        null
                                        }
                                    </div>
                                    <div onClick={CheckHandler} id="yellow" className={check === "yellow" ? "h-6 w-6 2xl:h-8 2xl:w-8 bg-yellow-400 rounded-full cursor-pointer border-2 border-white md:left-8 2xl:left-10 absolute z-10 flex items-center justify-center ring-1 ring-red-400 right-5" : "right-5 h-6 w-6 2xl:h-8 2xl:w-8 bg-yellow-400 rounded-full cursor-pointer border-2 border-white md:left-8 2xl:left-10 absolute z-10"}>
                                        {
                                        check === "yellow" ? <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 2xl:h-8 2xl:w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                        </svg> :
                                        null
                                        }
                                    </div>
                                    <div onClick={CheckHandler} id="purple" className={check === "purple" ? "h-6 w-6 2xl:h-8 2xl:w-8 bg-purple-500 rounded-full cursor-pointer border-2 border-white absolute md:left-[48px] 2xl:left-[60px] flex items-center justify-center ring-1 ring-red-400 right-1" : "right-1 h-6 w-6 2xl:h-8 2xl:w-8 bg-purple-500 rounded-full cursor-pointer border-2 border-white absolute md:left-[48px] 2xl:left-[60px]"}>
                                        {
                                        check === "purple" ? <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 2xl:h-8 2xl:w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                        </svg> :
                                        null
                                        }
                                    </div>
                            </div>
                        </div>
                        <div className='hidden md:block'>
                            <h1 className='md:mt-4 xl:mt-6 2xl:mt-10 md:text-lg xl:text-xl'>ویژگی های کالا:</h1>
                            <h1 className='flex mt-2 xl:mt-4'><b><img src={cercoll} alt="logo" className='mt-[6px] ml-1' /></b>حافظه داخلی:</h1>
                            <p className='font-bold mr-4 mt-2'>{memory}</p>
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-[210px] xl:w-[250px] text-center md:bg-gray-100 md:mt-10 h-fit md:p-[6px] lg:p-3 '>
                    <div className='flex md:block flex-row flex-wrap justify-center gap-x-6 mt-4 md:mt-0'>
                        <h1 className='flex flex-row-reverse justify-end items-center text-slate-800 font-bold md:text-sm mt-4 md:mt-0'> <p className='mr-2 font-normal text-sm xl:text-lg'>دیجی تایز</p>فروشنده:<img className='w-fit h-fit ml-2 mb-1' src={shop} alt="shop"/></h1>
                        <h1 className='flex flex-row-reverse justify-end items-center mt-5 text-slate-800 font-bold md:text-sm'> <p className='mr-2 font-normal text-sm xl:text-lg'>18 ماه زرین خدمت</p>گارانتی:<img className='w-fit h-fit ml-2 mb-1' src={shop2} alt="shop"/></h1>
                        <h1 className='flex flex-row-reverse justify-end items-center mt-5 text-slate-800 font-bold md:text-sm'> <p className='mr-2 font-normal text-sm xl:text-lg'>انبار تهران</p>ارسال توسط:<img className='w-fit h-fit ml-2 mb-1' src={shop3} alt="shop"/></h1>
                    </div>
                    <h1 className='text-orange-400 mt-10 text-center font-bold text-xl md:mt-8 xl:mt-12 md:text-left md:ml-1 xl:ml-2'>{price.toLocaleString()} تومان</h1>
                    <button onClick={() => dispatch(add_item(data))} className='bg-orange-400 w-[78%] md:w-full h-12 mt-3 rounded-lg'>اضافه به سبد خرید</button>
                </div>
                <div className='block md:hidden w-full bg-white rounded-xl p-4 mt-16 mb-6'>
                    <h1 className='text-xl font-bold'>ویژگی های کالا:</h1>
                    <h1 className='flex mt-6 text-lg'><b><img src={cercoll} alt="logo" className='mt-[6px] ml-1' /></b>حافظه داخلی:</h1>
                    <p className='font-bold mr-4 mt-2 text-xl'>{memory}</p>
                </div>
            </div>
            <div className='md:mt-[70px] md:px-4 lg:px-0 lg:mr-1 w-full bg-white rounded-xl md:rounded-none p-4 md:p-0 pt-6 md:pt-0'>
                <h1 className='text-slate-700 text-2xl mb-8 md:mb-0 font-bold md:font-normal'>نقد و برسی این محصول</h1>
                <p className='md:mt-10 text-justify text-slate-700 md:text-slate-800 leading-8 '>{description}</p>
                <div className='w-full flex justify-center'>
                    <img src={image} alt="logos" className='mt-10'/>
                </div>
            </div>
        </div>
    );
};


export default Container;