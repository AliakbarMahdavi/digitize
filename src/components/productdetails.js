import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

//components
import Data from '../api/data';
import Container from "./details/Container" 
import Breadcrumb from "./details/Breadcrumb" 
import Category from "./details/category" 
import MdMenu from './mdMenu';
import Menu from "./menu";
import Header from "./header"



const Productdetails = () => {

    useEffect(() => {
        window.scrollTo({
            top:0,
            behavior: 'smooth'
        })
    },[])
       

    const id2 = useParams().id;
    const [api] = useState(Data);
    const data = api[id2 - 1];
    const {name, brand, j} = data;    
    return (
        <div>
            <Header name={name}/>
            <Menu />
            <MdMenu/>
                <div className="container mx-auto max-w-screen-2xl grid md:grid-cols-12 md:grid-rows-[60px_minmax(900px,_1fr)_100px] gap-x-4 gap-y-4 mt-8 md:mt-4 ">
                    <Breadcrumb j={j}/>
                    <Category brand={brand} j={j} name={name}/>
                    <Container data={data}/>
                </div>
        </div>
    );
};

export default Productdetails;