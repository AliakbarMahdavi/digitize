import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Product = ({img, name, price, id}) => {

    const [check, setcheck] = useState("black");

    const CheckHandler = (e) => {
        setcheck(e.target.id)
    }

    return (
        <div className=' bg-white rounded-xl p-[0.40rem] shadow-lg shadow-gray-300 xl:hover:-mt-2 transition-all h-fit '>
            <div className='bg-slate-200 rounded-xl flex justify-center p-4 h-36 md:h-40 lg:h-44 xl:h-52'>
                <img src={img} alt="img" />
            </div>  
            <div className='text-right w-full p-1 pt-2 flex justify-between'>
                <h1 className='text-gray-400'>اپل</h1>
                <div className='flex mt-[2px] flex-row-reverse relative z-0'>
                    <div onClick={CheckHandler} id="black" className={check === "black" ? "h-5 w-5 bg-black rounded-full cursor-pointer border-2 border-white  -mr-[4px] flex items-center justify-center ring-1 ring-red-400 absolute z-30" : "h-5 w-5 bg-black rounded-full cursor-pointer border-2 border-white  -mr-[4px] flex items-center justify-center absolute z-30"}>
                        {
                        check === "black" ? <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg> :
                        null
                        }
                    </div>
                    <div onClick={CheckHandler} id="red" className={check === "red" ? "h-5 w-5 bg-red-500 rounded-full cursor-pointer border-2 border-white left-4 absolute z-20 ring-1 ring-red-400" : "h-5 w-5 bg-red-500 rounded-full cursor-pointer border-2 border-white left-4 absolute z-20"}>
                        {
                        check === "red" ? <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg> :
                        null
                        }
                    </div>
                    <div onClick={CheckHandler} id="yellow" className={check === "yellow" ? "h-5 w-5 bg-yellow-400 rounded-full cursor-pointer border-2 border-white left-8 absolute z-10 ring-1 ring-red-400" : "h-5 w-5 bg-yellow-400 rounded-full cursor-pointer border-2 border-white left-8 absolute z-10"}>
                        {
                        check === "yellow" ? <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg> :
                        null
                        }
                    </div>
                    <div onClick={CheckHandler} id="purple" className={check === "purple" ? "h-5 w-5 bg-purple-500 rounded-full cursor-pointer border-2 border-white absolute left-12 ring-1 ring-red-400" : "h-5 w-5 bg-purple-500 rounded-full cursor-pointer border-2 border-white absolute left-12"}>
                        {
                        check === "purple" ? <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg> :
                        null
                        }
                    </div>
               </div>
            </div>
            <div className='text-right w-full pr-1 mt-2 lg:pt-2'>
                <h1 className='text-sm md:text-[16px] my-1'>{name}</h1>
            </div>
            <div className='pt-3 pb-1 md:pt-5 lg:pt-6  text-orange-500 flex justify-center'>
                <h1 className='text-sm'>{price.toLocaleString()}T</h1>
            </div>
            <Link to={`/${id}`} className='text-orange-500 border-t-2 w-full h-10 pt-3 font-bold text-sm block text-center '>مشاهده و سفارش</Link>
        </div>
    );
};

export default Product;