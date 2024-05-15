// VariableContext.jsx
import React, { createContext, useContext } from 'react';

const VariableContext = createContext();

export const useVariables = () => useContext(VariableContext);

export const VariableProvider = ({ children }) => {
    const name = 'radheshyam';

    return (
        <VariableContext.Provider value={{ name }}>
            {children}
        </VariableContext.Provider>
    );
};
