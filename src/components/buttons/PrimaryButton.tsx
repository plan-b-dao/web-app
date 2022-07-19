import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type PrimaryButtonType = "primary" | "secondary" | "gradient"

interface IPrimaryButtonProps {
    children: React.ReactNode
    disabled?: boolean
    icon?: IconProp
    link?: string
    type?: PrimaryButtonType
}

export const PrimaryButton: React.FC<IPrimaryButtonProps> = (props) => {
    const { children, disabled = false, icon, link, type = "primary" } = props;

    const getClass = (type: PrimaryButtonType) => {
        const baseClasses = "flex items-center px-4 py-2 rounded font-poppins font-bold"
        switch(type) {
            case "secondary":
                return baseClasses + " bg-cultured hover:bg-cultured-light text-spring-green";
            case "gradient":
                return baseClasses + " bg-gradient text-cultured-light border-[2px] border-cultured-light shadow";
            default:
                return baseClasses + " bg-dark-jungle hover:bg-dark-jungle-light text-cultured-light";
        }
    }

    if (link) {
        return (
            <a href={link}>
                <button className={getClass(type)}>
                    {icon && <FontAwesomeIcon className='w-6 h-6 mr-2' icon={icon} />} {children}
                </button>
            </a>
        )
        
    }

    return (
        <button className={getClass(type)}>
           {icon && <FontAwesomeIcon className='w-6 h-6 mr-2' icon={icon} />} {children}
        </button>
    );
}