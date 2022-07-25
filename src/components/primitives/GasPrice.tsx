import { faGasPump } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { client } from "../../services/client";

interface IGasPriceProps {}

export const GasPrice: React.FC<IGasPriceProps> = () => {
    const [gas, setGas] = useState(0);

    useEffect(() => {
        client.etherscan.getGases().then(gas => setGas(gas)).catch(() => console.error("Failed to get gas price"));
    }, [])

    return (
        <div className="flex p-1 bg-cultured-dark rounded-md justify-center items-center">
            <div className="text-sm mx-2">
                {gas}
            </div>
            <div>
                <FontAwesomeIcon icon={faGasPump} />
            </div>
        </div>
    );
}