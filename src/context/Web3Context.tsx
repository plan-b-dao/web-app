import { ethers } from "ethers";
import { createContext, useContext, useEffect, useState } from "react";

declare global {
    interface Window {
      ethereum: any
      provider: ethers.providers.Web3Provider
    }
}

interface IWeb3ContextProps {
    children: React.ReactNode;
}

interface IWeb3ContextState {
    ready: boolean,
    isSupported: boolean,
    provider: ethers.providers.Web3Provider | undefined
}

const Web3Context = createContext({} as IWeb3ContextState);

export const Web3Provider: React.FC<IWeb3ContextProps> = ({children}) => {
    const [ready, setReady] = useState(false);
    const [isSupported, setIsSupported] = useState(false);
    const [provider, setProvider] = useState<ethers.providers.Web3Provider>();

    useEffect(() => {
        // check if metamask is supported
        if (typeof window.ethereum !== "undefined") {
            setIsSupported(true);
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            setProvider(provider);
        }
        
        setReady(true);
    }, [])

    return (
        <Web3Context.Provider value={{ready, isSupported, provider}}>
            {children}
        </Web3Context.Provider>
    );
}

export const useWeb3Context = () => useContext(Web3Context);
