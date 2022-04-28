import React, { useEffect, useState, useContext } from 'react';

// component
import Product from './product';

// data
import data from "../api/data";

// context
import { dataContext } from './context/menuContextProvider';


const Products = () => {

    const {submit} = useContext(dataContext);

    const [apidata, setApidata] = useState([]);
    const [search, setSearch] = useState("");
    const [bool, setBool] = useState(false);

    useEffect(() => {
        setSearch(submit)
    },[submit])

    useEffect(() => {
        setApidata(data())
    },[data])

    const newData = apidata.filter(item => item.name.includes(search));
    useEffect(() => {
        if (newData.length === 0) {
            setBool(true)
        }else{
            setBool(false)
        }
    },[newData])


    
    return (
        <div className='mt-10 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-y-7 gap-x-4 px-4 mb-10 md:col-span-9 xl:col-span-10'>
            {newData.map(item => <Product key={item.id} img={item.img} name={item.name} price={item.price} id={item.id}/>)}
            {bool ? <h1 className='w-full h-full text-xl md:text-2xl'>موردی یافت نشد!!!</h1> : null}
        </div>
    );
};

export default Products;