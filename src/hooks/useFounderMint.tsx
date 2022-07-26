import { useState } from "react";
import { useFounderContext } from "../context";

export enum MintFounderState {
    Mint,
    Minting,
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
                // todo: handle tx
                setState(MintFounderState.Minting);
            })
            .finally(() => setIsProcessing(false));
    }

    return [isProcessing, mintFounder, state] as const;
}