import { useState } from "react";

interface IWalletProps {}

export const Wallet: React.FC<IWalletProps> = () => {
    const [account] = useState(true);

    return (
        <div>
            {account ?
                <div className="px-2 py-1 rounded-md bg-cultured-dark">0x12sa...fe44</div>
            :
                <button className="px-2 py-1 rounded-md bg-cultured-dark hover:bg-cultured shadow text-dark-jungle-light">connect wallet</button>
            }
        </div>
    );
}