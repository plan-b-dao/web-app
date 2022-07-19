import { faGasPump } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IGasPriceProps {}

export const GasPrice: React.FC<IGasPriceProps> = () => {

    return (
        <div className="flex space-x-2 p-1 bg-cultured-dark rounded-md justify-center items-center">
            <div>
                <FontAwesomeIcon icon={faGasPump} />
            </div>
            <div className="text-sm">
                12
            </div>
        </div>
    );
}