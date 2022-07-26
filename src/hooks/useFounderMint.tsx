import { useState } from "react";
import { useFounderContext } from "../context";

enum MintFounderState {
    Mint,
    Minting,
    Minted,
}

export const useFounderMint = () => {
    const { founderContract } = useFounderContext();
    const [isProcessing, setIsProcessing] = useState(false);
    const [state, setState] = useState<MintFounderState>(MintFounderState.Mint);

    const mintFounder = (account: string) => {
        if (!founderContract) return;
        setIsProcessing(true);
        founderContract
            .becomeFounder(account)
            .then((tx) => {
                //return tx hash
                console.log(tx);
            })
            .finally(() => setIsProcessing(false));
    }

    return [isProcessing, mintFounder, state] as const;
}