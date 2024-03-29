import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

type PrimaryButtonType = "primary" | "secondary" | "gradient" | "warning" | "danger" | "isProcessing";

interface IPrimaryButtonProps {
    children: React.ReactNode
    disabled?: boolean
    icon?: IconProp
    link?: string
    type?: PrimaryButtonType
    isProcessing?: boolean
    onClick?: () => void
}

export const PrimaryButton: React.FC<IPrimaryButtonProps> = (props) => {
    const { children, disabled = false, icon, link, onClick, type = "primary", isProcessing = false } = props;

    const getClass = (type: PrimaryButtonType) => {
        const baseClasses = "flex items-center px-4 py-2 rounded font-poppins font-bold disabled:opacity-50 ";
        switch(type) {
            case "secondary":
                return baseClasses + " bg-cultured hover:bg-cultured-light text-spring-green";
            case "gradient":
                return baseClasses + " bg-gradient transition hover:bg-gradient-reverse text-cultured-light border-[2px] border-cultured-light shadow";
            case "warning":
                return baseClasses + " border-[2px] border-cultured-dark text-dark-jungle-light hover:bg-rosso-warning hover:text-cultured-light transition"
            case "danger":
                return baseClasses + " text-cultured-light bg-rosso hover:bg-rosso-light hover:text-cultured-light transition"
            case "isProcessing":
                return baseClasses + " text-[#ccc] bg-cultured shadow-inner"
            default:
                return baseClasses + " bg-dark-jungle hover:bg-dark-jungle-light text-cultured-light";
        }
    }

    if (isProcessing) {
        return (
            <div className={getClass("isProcessing")}>
                <FontAwesomeIcon className='w-6 h-6 mr-2 animate-spin' icon={faSpinner} /> Processing
            </div>
        );
    }

    if (link) {
        return (
            <Link to={link}>
                <div className={getClass(type)}>
                    {icon && <FontAwesomeIcon className='w-6 h-6 mr-2' icon={icon} />} {children}
                </div>
            </Link>
        )
        
    }

    return (
        <button disabled={disabled} className={getClass(type)} onClick={onClick}>
           {icon && <FontAwesomeIcon className='w-6 h-6 mr-2' icon={icon} />} {children}
        </button>
    );
}