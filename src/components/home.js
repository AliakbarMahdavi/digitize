import React from 'react';

//components
import Header from "./header";
import Filters from "./filters";
import MdUp from './mdUp';
import MdMenu from './mdMenu';
import Menu from "./menu";
import Footer from './Footer';



const Home = () => {
    return (
        <div>
            <Menu name="خانه"/>
            <MdMenu/>
            <Header name="خانه"/>
            <Filters/>
            <MdUp/>
            <Footer/>
        </div>
    );
};

export default Home;