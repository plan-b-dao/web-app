import { MintFounderState, useFounderMint } from "../../hooks";
import { PrimaryButton } from "./PrimaryButton";

interface IMintFounderButtonProps {
    isFounder: boolean;
    account: string;
}

export const MintFounderButton: React.FC<IMintFounderButtonProps> = (props) => {
    const { isFounder, account } = props;
    const [isProcessing, onMint, state] = useFounderMint();

    const getText = () => {
        if (state === MintFounderState.Mint) {
            return "Become a Founder";
        }

        return "Transaction in progress..."
    }

    return (
        <PrimaryButton
            isProcessing={isProcessing}
            disabled={isFounder || state === 1}
            type="gradient"
            onClick={() => onMint(account)}
        >{account ? getText() : "Connect to Wallet"}</PrimaryButton>
    );
}
