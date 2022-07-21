import { createContext, useContext, useEffect } from "react";
import { useWeb3Context } from "./Web3Context";

interface IFounderContractContextProps {
    children: React.ReactNode;
}

interface IFounderContextState {}

const FounderContext = createContext({} as IFounderContextState);

export const FounderContractProvider: React.FC<IFounderContractContextProps> = ({children}) => {
    const { provider } = useWeb3Context();

    useEffect(() => {
        provider?.getNetwork().then((network) => {
            console.log(network);
        });
    }, [provider])
    
    return (
        <FounderContext.Provider value={{}}>
            {children}
        </FounderContext.Provider>
    );
}

export const useFounderContext = () => useContext(FounderContext);
