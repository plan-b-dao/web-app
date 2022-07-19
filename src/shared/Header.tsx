import { GasPrice } from "../components/primitives";
import { Wallet } from "../components/status";

interface IHeaderProps {}

export const Header: React.FC<IHeaderProps> = () => {

    return (
        <header className="w-4/12 mx-auto h-16 mb-8 border-b-[2px] border-cultured-dark flex items-center">
            <div>
                <Wallet />
            </div>
            <div className="ml-auto">
                <GasPrice />
            </div>
        </header>
    );
}