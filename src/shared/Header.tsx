import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Navigation } from "../components/Navigation";
import { GasPrice } from "../components/primitives";
import { Logo } from "../components/primitives/Logo";
import { Wallet } from "../components/status";

interface IHeaderProps {}

export const Header: React.FC<IHeaderProps> = () => {
    const [menu, setMenu] = useState(false);

    return (
        <header className="w-11/12 sm:w-11/12 xl:w-8/12 2xl:w-5/12 mx-auto h-16 mb-8 border-b-[2px] border-cultured-dark flex items-center">
            {menu &&
                <div className="h-screen w-10/12 sm:w-4/12 absolute top-0 left-0 bg-cultured-light z-50">
                    <div className="flex m-4">
                        <div>
                            <Logo />
                        </div>
                        <div className="ml-auto" onClick={() => setMenu(false)}>
                            <FontAwesomeIcon icon={faClose} />
                        </div>
                    </div>
                    <Navigation />
                </div>
            }
            <div className="md:hidden mr-4">
                <div onClick={() => setMenu(true)}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
            </div>
            <div>
                <Wallet />
            </div>
            <div className="ml-auto">
                <GasPrice />
            </div>
        </header>
    );
}