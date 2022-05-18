import React, {createContext, useState} from 'react';

import { useNavigate } from 'react-router-dom';


export const dataContext = createContext();


const menuContextProvider = ({children}) => {
    const navigate = useNavigate();


    const [searchdata, setSerchData] = useState("");
    const [submit, setSubmit] = useState("");

    const getData = (e) => {
        setSerchData(e.target.value)
    }

    const sub = (e) => {
        e.preventDefault();
        setSubmit(searchdata)
        navigate("/products")
    }

    return (
        <dataContext.Provider value={{submit, getData, sub}}>
            {children}
        </dataContext.Provider>
    );
};

export default menuContextProvider;