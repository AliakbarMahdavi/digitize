import React, { createContext, useState } from 'react';

export const dataPropvider = createContext();

const sortContextProvider = ({children}) => {
    
    const [state, setState] = useState("1");

    const Filter = (e) => {
        setState(e.target.name)
    }

    return (
        <dataPropvider.Provider value={{Filter, state}}>
            {children}
        </dataPropvider.Provider>
    );
};

export default sortContextProvider;