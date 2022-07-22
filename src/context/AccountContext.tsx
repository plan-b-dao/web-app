import { createContext, useContext, useEffect, useState } from "react";
import { PLAN_B_FOUNDER_CONTRACT_EVENTS } from "../constants/misc";
import { METHODS } from "../utils/ethereum";
import { useFounderContext } from "./FounderContractContext";
import { useWeb3Context } from "./Web3Context";

interface IAccountProviderProps {
    children: React.ReactNode;
}

interface IAccountContextState {
    account: string | undefined
    isFounder: boolean
    connectWithWallet: () => Promise<void>
    updateIsFounder: (f: boolean, txA?: string) => void
}

const AccountContext = createContext({} as IAccountContextState);

export const AccountProvider: React.FC<IAccountProviderProps> = ({children}) => {
    const [account, setAccount] = useState();
    const [isFounder, setIsFounder] = useState(false);
    const { provider } = useWeb3Context();
    const { founderContract } = useFounderContext();

    useEffect(() => {
        if (!provider || !founderContract || !account) return;
        founderContract.contract.isFounder(account)
            .then(isFounder => Promise.resolve(updateIsFounder(isFounder)))
            .then(() => founderContract.setSignerContract(provider, account))
            .catch(error => console.log(error));
    }, [account, provider, founderContract]);

    useEffect(() => {
        if (!founderContract) return;
        const { contract } = founderContract;

        contract.on(PLAN_B_FOUNDER_CONTRACT_EVENTS.FOUNDER_ADDED, (founder: string) => {
            if(founder.toLocaleLowerCase() === account) {
                updateIsFounder(true);
            }
           
        });

        contract.on(PLAN_B_FOUNDER_CONTRACT_EVENTS.WITHDRAW, (founder: string) => {
            if(founder.toLocaleLowerCase() === account) {
                updateIsFounder(false);
            }
        })

        return () => {
            contract.removeAllListeners(PLAN_B_FOUNDER_CONTRACT_EVENTS.FOUNDER_ADDED);
            contract.removeAllListeners(PLAN_B_FOUNDER_CONTRACT_EVENTS.WITHDRAW);
        }
    }, [founderContract, account]);

    const connectWithWallet = async () => {
        try {
            if (!provider) return;

            const accounts = await provider.send(METHODS.REQUEST_ACCOUNTS, []);
            setAccount(accounts[0]);   
        } catch (error) {
            
        }
    }

    const updateIsFounder = async (isFounder: boolean) => setIsFounder(isFounder);

    
    
    return (
        <AccountContext.Provider value={{account, isFounder, connectWithWallet, updateIsFounder}}>
            {children}
        </AccountContext.Provider>
    );
}

export const useAccountContext = () => useContext(AccountContext);
