import { createContext, useContext, useEffect, useState } from "react";
import { FounderContract } from "../contract/FounderContract";
import { useWeb3Context } from "./Web3Context";

interface IFounderContractContextProps {
    children: React.ReactNode;
}

interface IFounderContextState {
    founderContract: FounderContract | undefined;
}

const FounderContext = createContext({} as IFounderContextState);

export const FounderContractProvider: React.FC<IFounderContractContextProps> = ({children}) => {
    const [founderContract, setFounderContract] = useState<FounderContract>();
    const { provider } = useWeb3Context();

    useEffect(() => {
        if (!provider) return;
        const initialContract = new FounderContract(provider);
        setFounderContract(initialContract);
    }, [provider])

    return (
        <FounderContext.Provider value={{founderContract}}>
            {children}
        </FounderContext.Provider>
    );
}

export const useFounderContext = () => useContext(FounderContext);
