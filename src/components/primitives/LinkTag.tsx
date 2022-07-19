import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ILinkTagProps {
    link?: string;
}

export const LinkTag: React.FC<ILinkTagProps> = (props) => {

    return (
        <div className=" bg-dark-jungle inline-flex space-x-2 px-2 py-1 rounded-xl text-cultured-light items-center">
            <div className="text-xs">article</div>
            <div><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></div>
        </div>
    )
}