import React, { useState } from 'react';

// images
import logo from "../image/Group 8811.png"
import logo2 from "../image/laptop.png"
import logo3 from "../image/sat.png"
import logo4 from "../image/brand.png"
import up from "../image/arrow-up.png"
import down from "../image/down.png"
import Banner from "../image/Banner.png"


const MdFilters = () => {

    const [check1, setCheck1] = useState(true);
    const [check2, setCheck2] = useState(false);
    const [check3, setCheck3] = useState(false);

    const changh1 = () => {
        setCheck1(!check1)
    }

    const changh2 = () => {
        setCheck2(!check2)
    }

    const changh3 = () => {
        setCheck3(!check3)
    }   


    return (
        <div className='hidden md:block md:col-span-3 xl:col-span-2 row-span-2 '>
            <div className='bg-white h-fit pb-10 mr-4 pr-5 pl-2 pt-8 2xl:pr-8 rounded-md '>
                <h1 className='text-orange-400 text-xl font-bold mb-8'>دسته بندی</h1>
                    <div className='flex mt-6 cursor-pointer'>
                        <img src={logo} alt="logo" className='h-fit'/>
                        <h1 className='mt-[1px] mr-2 text-lg text-gray-400 hover:text-black transition-all'>تلفن همراه</h1>
                    </div>
                    <div className='flex mt-6 cursor-pointer'>
                        <img src={logo2} alt="logo" className='h-fit'/>
                        <h1 className='mt-[1px] mr-2 text-lg text-gray-400 hover:text-black transition-all'>لپ تاپ</h1>
                    </div>
                    <div className='flex mt-6 cursor-pointer'>
                        <img src={logo3} alt="logo" className='h-fit'/>
                        <h1 className='mt-[1px] mr-2 text-lg text-gray-400 hover:text-black transition-all'>ساعت هوشمند</h1>
                    </div>
                <h1 className='text-orange-400 text-xl font-bold mt-10'>فیلتر</h1>
                    
                    
                    <div onClick={changh1} className='flex justify-between xl:w-[90%] 2xl:w-[80%] cursor-pointer'>
                    <div className='flex mt-6 '>
                            <img src={logo4} alt="logo" className='h-fit'/>
                            <h1 className='mt-[1px] mr-2 text-lg text-gray-800 '>برند محصول</h1>
                    </div>
                    {
                        check1 ? <img src={up} alt="logo" className='h-4 mt-8'/> : <img src={down} alt="logo" className='h-4 mt-8'/>
                    }
                    </div>
                    {
                        check1 ? 
                        <div className='h-fit pb-8 '>
                            <div className='flex mt-6 cursor-pointer'>
                                <input type="checkbox"  className='w-4 h-4 mt-[6px] mr-[5px] cursor-pointer ' />
                                <h1 className='mt-[1px] mr-2 text-lg text-gray-600 '>سامسونگ</h1>
                            </div> 
                            <div className='flex mt-6 cursor-pointer'>
                                <input type="checkbox" className='w-4 h-4 mt-[6px] mr-[5px] cursor-pointer' />
                                <h1 className='mt-[1px] mr-2 text-lg text-gray-600 '>اپل</h1>
                            </div>  
                            <div className='flex mt-6 cursor-pointer'>
                                <input type="checkbox" className='w-4 h-4 mt-[6px] mr-[5px] cursor-pointer' />
                                <h1 className='mt-[1px] mr-2 text-lg text-gray-600 '>شیائومی</h1>
                            </div>  
                            <div className='flex mt-6 cursor-pointer'>
                                <input type="checkbox" className='w-4 h-4 mt-[6px] mr-[5px] cursor-pointer' />
                                <h1 className='mt-[1px] mr-2 text-lg text-gray-600 '>هواوی</h1>
                            </div>     
                        </div> 
                        :  
                        null
                    }
                    

                    <div onClick={changh2} className='flex justify-between xl:w-[90%] 2xl:w-[80%] cursor-pointer'>
                    <div className='flex mt-6 '>
                            <img src={logo4} alt="logo" className='h-fit'/>
                            <h1 className='mt-[1px] mr-2 text-lg text-gray-800 '>رنگ محصول</h1>
                    </div>
                    {
                        check2 ? <img src={up} alt="logo" className='h-4 mt-8'/> : <img src={down} alt="logo" className='h-4 mt-8'/>
                    }
                    </div>
                    {
                        check2 ? 
                        <div className='h-fit'>
                           <div className='h-fit pb-8 '>
                            <div className='flex mt-6 cursor-pointer'>
                                <input type="checkbox" className='w-4 h-4 mt-[6px] mr-[5px] cursor-pointer' />
                                <h1 className='mt-[1px] mr-2 text-lg  text-gray-600 '>سفید</h1>
                            </div> 
                            <div className='flex mt-6 cursor-pointer'>
                                <input type="checkbox" className='w-4 h-4 mt-[6px] mr-[5px] cursor-pointer' />
                                <h1 className='mt-[1px] mr-2 text-lg  text-gray-600 '>قرمز</h1>
                            </div>  
                            <div className='flex mt-6 cursor-pointer'>
                                <input type="checkbox" className='w-4 h-4 mt-[6px] mr-[5px] cursor-pointer' />
                                <h1 className='mt-[1px] mr-2 text-lg  text-gray-600 '>سبز</h1>
                            </div>  
                            <div className='flex mt-6 cursor-pointer'>
                                <input type="checkbox" className='w-4 h-4 mt-[6px] mr-[5px] cursor-pointer' />
                                <h1 className='mt-[1px] mr-2 text-lg  text-gray-600 '>آبی</h1>
                            </div> 
                            <div className='flex mt-6 cursor-pointer'>
                                <input type="checkbox" className='w-4 h-4 mt-[6px] mr-[5px] cursor-pointer' />
                                <h1 className='mt-[1px] mr-2 text-lg  text-gray-600 '>زرد</h1>
                            </div> 
                            <div className='flex mt-6 cursor-pointer'>
                                <input type="checkbox" className='w-4 h-4 mt-[6px] mr-[5px] cursor-pointer' />
                                <h1 className='mt-[1px] mr-2 text-lg  text-gray-600 '>بنفش</h1>
                            </div>  
                            <div className='flex mt-6 cursor-pointer'>
                                <input type="checkbox" className='w-4 h-4 mt-[6px] mr-[5px] cursor-pointer'  />
                                <h1 className='mt-[1px] mr-2 text-lg text-gray-600 '>صورتی</h1>
                            </div>       
                        </div> 
                        </div> 
                        :  
                        null
                    }


                    <div onClick={changh3} className='flex justify-between xl:w-[90%] 2xl:w-[80%] cursor-pointer'>
                    <div className='flex mt-6 '>
                            <img src={logo4} alt="logo" className='h-fit'/>
                            <h1 className='mt-[1px] mr-2 text-lg text-gray-800 '>محدوده قیمت</h1>
                    </div>
                    {
                        check3 ? <img src={up} alt="logo" className='h-4 mt-8'/> : <img src={down} alt="logo" className='h-4 mt-8'/>
                    }
                    </div>
                    {
                        check3 ? 
                        <div className='h-20'>
                                
                        </div> 
                        :  
                        null
                    }
                
                    
            </div>
            <div className='md:w-[%100] mr-4 mt-10 cursor-pointer sticky top-44'>
                <img src={Banner} alt="banner" />
            </div>
        </div>
    );
};

export default MdFilters;