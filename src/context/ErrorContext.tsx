import { createContext, useContext, useState } from "react";

interface IErrorProviderProps {
    children: React.ReactNode;
}

interface IErrorContextState {}

const ErrorContext = createContext({} as IErrorContextState);

export const ErrorProvider: React.FC<IErrorProviderProps> = ({children}) => {
    // const [errors, setErrors] = useState([]);
    
    return (
        <ErrorContext.Provider value={{}}>
            {children}
        </ErrorContext.Provider>
    );
}

export const useErrorContext = () => useContext(ErrorContext);
