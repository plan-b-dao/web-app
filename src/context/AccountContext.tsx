import { createContext, useContext, useState } from "react";
import { METHODS } from "../utils/ethereum";
import { useWeb3Context } from "./Web3Context";

interface IAccountProviderProps {
    children: React.ReactNode;
}

interface IAccountContextState {
    account: string | undefined
    connectWithWallet: () => Promise<void>
}

const AccountContext = createContext({} as IAccountContextState);

export const AccountProvider: React.FC<IAccountProviderProps> = ({children}) => {
    const [account, setAccount] = useState();
    const { provider } = useWeb3Context();

    const connectWithWallet = async () => {
        try {
            if (!provider) return;

            const accounts = await provider.send(METHODS.REQUEST_ACCOUNTS, []);
            setAccount(accounts[0]);   
        } catch (error) {
            
        }
    }
    
    return (
        <AccountContext.Provider value={{account, connectWithWallet}}>
            {children}
        </AccountContext.Provider>
    );
}

export const useAccountContext = () => useContext(AccountContext);
