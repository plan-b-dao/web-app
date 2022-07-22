import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BaseElementType } from "../../constants";
import { getCardClass } from "./Card.utils";


interface ICardProps {
    children: React.ReactNode
    type?: BaseElementType;
    onClose?: () => void;
    className?: string;
}

export const Card: React.FC<ICardProps> = ({children, type="primary", onClose, className}) => {

    return (
        <div className={getCardClass(type, className)}>
            {onClose && <button className="absolute top-1 right-3 hover:bg-[#ccc] rounded-full cursor-pointer w-9 h-9 flex items-center justify-center">
                <FontAwesomeIcon icon={faClose}/>
            </button>}
            {children}
        </div>
    );
}