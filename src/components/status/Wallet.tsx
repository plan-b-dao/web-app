import { useState } from "react";
import { useAccountContext, useWeb3Context } from "../../context";
import { formatAddress } from "../../utils/formats";

interface IWalletProps {}

export const Wallet: React.FC<IWalletProps> = () => {
    const {isSupported} = useWeb3Context();
    const {account, connectWithWallet} = useAccountContext();

    if (!isSupported) {
        return (
            <a href="https://metamask.io/" target="_blank" rel="noreferrer">
                <div className="px-2 py-1 text-sm rounded-md transition bg-cultured-dark hover:bg-dark-jungle-light hover:text-cultured-light shadow text-dark-jungle-light">
                    install MetaMask
                </div>
            </a>
            
        )
    }

    return (
        <div>
            {account ?
                <div className="px-2 py-1 text-sm rounded-md bg-cultured-dark">{formatAddress(account)}</div>
            :
                <button onClick={connectWithWallet} className="px-2 py-1 text-sm rounded-md transition bg-cultured-dark hover:bg-dark-jungle-light hover:text-cultured-light shadow text-dark-jungle-light">connect wallet</button>
            }
        </div>
    );
}