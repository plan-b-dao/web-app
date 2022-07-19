import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HTMLAttributeAnchorTarget } from "react";

interface ILinkTagProps {
    link: string;
    target?: HTMLAttributeAnchorTarget
    rel?: string;
}

export const LinkTag: React.FC<ILinkTagProps> = ({link, target, rel}) => {

    return (
        <a href={link} target={target} rel={rel}>
            <div className=" bg-dark-jungle hover:bg-dark-jungle-light inline-flex space-x-2 px-2 py-1 rounded-xl text-cultured-light items-center">
                <div className="text-xs">article</div>
                <div><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></div>
            </div>
        </a>
        
    )
}