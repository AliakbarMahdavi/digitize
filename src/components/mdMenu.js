import React from 'react';

// react-router-dom
import { Link } from 'react-router-dom';

// image
import Logo from "../image/Logo.png"
import Search from "../image/search-normal-2.png"

const mdMenu = () => {
    return (
           <nav className='hidden md:block py-4 bg-white shadow-md sticky z-10 top-0 px-6'>
               <div className='container mx-auto max-w-screen-2xl flex items-center justify-between '>
                    <ul className='flex md:gap-x-6 lg:gap-x-12'>
                        <li><img src={Logo} alt="logo" className='md:h-5 lg:h-fit md:ml-2 lg:ml-4'/></li>
                        <li> <Link to="/" className='md:text-sm lg:text-xl mr-[14%] text-slate-800 font-bold h-full mt-2 border-b-4 border-gray-300'>خانه</Link></li>
                        <li><Link to="/" className='md:text-sm lg:text-xl  text-slate-800 font-bold h-full mt-2'>محصولات</Link></li>
                        <li><Link to="/cart" className='md:text-sm lg:text-xl  text-slate-800 font-bold h-full mt-2'>سبد خرید</Link></li>
                        <li><Link to="/contactUs" className='md:text-sm lg:text-xl  text-slate-800 font-bold h-full mt-2'>تماس با ما</Link></li>
                        <li><Link to="/login" className='md:text-sm lg:text-xl  text-slate-800 font-bold h-full mt-2 ml-20'>ورود</Link></li>
                    </ul>
                    <div className='flex-1 max-w-2xl'>
                        <div className='bg-gray-100 rounded-lg flex justify-center px-2'>
                            <img src={Search} alt="search" className='h-fit mt-[9px] cursor-pointer '/>
                            <input type="search" placeholder='جستجوی نام محصول، نام برند، نام مدل و ...' className='mr-[5px] border-none focus:outline-none bg-transparent  w-full p-3 md:text-sm xl:text-lg' />
                        </div>
                    </div>
               </div>
           </nav>
    );
};
export default mdMenu;