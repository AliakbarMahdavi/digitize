import React, { useState, useContext } from 'react';

// image
import Logo from "../image/search-normal.png"; 
import Logo2 from "../image/Logo (1).png"

// context
import { dataContext } from './context/menuContextProvider';

const header = ({name}) => {

    const {getData, sub} = useContext(dataContext);

    const [bool, setBool] = useState(false);

    const clickHandler = () => {
        setBool(!bool)
        console.log(bool)
    }

    return (
        <div className='flex md:hidden flex-row-reverse justify-between px-4 mt-6'>
            {bool ? <div className='fixed w-full h-full bg-backGround top-0 left-0 z-10 flex justify-center items-center'>
                <div onClick={clickHandler} className="w-full h-full absolute z-10" ></div>
                <form onSubmit={sub} className='absolute z-20 flex flex-col items-center'>
                    <input type="text" onChange={getData} placeholder='سرچ کنید' autoFocus className="w-[300px] h-12 text-center rounded-xl p-4 border-2 border-slate-800 outline-none" />
                    <button className='w-[297px] p-3 bg-slate-800 text-white rounded-xl mt-2'>جست و جو</button>
                </form>
            </div> : null}
            <div className='h-fit p-1 rounded-md bg-white shadow-lg shadow-black-500 mt-[6px] cursor-pointer'>
                <img src={Logo} alt="Logo" onClick={clickHandler}/>
            </div>
            <div className=' font-bold text-xl text-slate-700'>
                <h1 className='mt-2'>{name}</h1>
            </div>
            <div>
                <img className='h-10 mt-1' src={Logo2} alt="Logo" />
            </div>
        </div>
    );
};

export default header;