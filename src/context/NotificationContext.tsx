import { createContext, useContext, useState } from "react";

interface INotificationProviderProps {
    children: React.ReactNode;
}

interface INotificationContextState {}

const NotificationContext = createContext({} as INotificationContextState);

export const NotificationProvider: React.FC<INotificationProviderProps> = ({children}) => {
    // const [errors, setErrors] = useState([]);
    
    return (
        <NotificationContext.Provider value={{}}>
            {children}
        </NotificationContext.Provider>
    );
}

export const useNotificationContext = () => useContext(NotificationContext);
