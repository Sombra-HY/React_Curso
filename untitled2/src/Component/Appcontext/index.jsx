import React, { createContext, useState } from 'react';
import { globalState } from './data';

export const GlobalContext = createContext();

// eslint-disable-next-line
export const Appcontext = ({ children }) => {
    //variavel global
    const [cont, setCont] = useState(globalState);

    return (
        <GlobalContext.Provider value={{ cont, setCont }}>
            {children}
        </GlobalContext.Provider>
    );
};
