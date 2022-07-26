import { useFounderMint } from "../../hooks";
import { PrimaryButton } from "./PrimaryButton";

interface IMintFounderButtonProps {
    isFounder: boolean;
    account: string;
}

export const MintFounderButton: React.FC<IMintFounderButtonProps> = (props) => {
    const { isFounder, account } = props;
    const [isProcessing, onMint] = useFounderMint();

    return (
        <PrimaryButton
            isProcessing={isProcessing}
            disabled={isFounder}
            type="gradient"
            onClick={() => onMint(account)}
        >{account ? "Mint Founder NFT" : "Connect to Wallet"}</PrimaryButton>
    );
}
